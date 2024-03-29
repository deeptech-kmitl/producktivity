import { Hono } from 'hono';
import { D1Database, R2Bucket } from '@cloudflare/workers-types';
import { typeid } from 'typeid-js';
import { cors } from 'hono/cors';

interface ResponseWrapper<T, E> {
  data: T;
  error: E;
}

const response = <T, E>(data: T, error?: E): ResponseWrapper<T, E> => {
  return {
    data,
    error,
  };
};

type Bindings = {
  DB: D1Database;
  BUCKET: R2Bucket;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', cors());

app.get('/users', async (c) => {
  const { oaid } = c.req.query();
  if (!oaid) return c.json(response(null, 'Bad request'));

  const getUserStatement = c.env.DB.prepare(`
    SELECT
      u.id,
      u.username,
      u.first_name 'firstName',
      u.last_name 'lastName',
      oa.created_at 'createdAt',
      oa.updated_at 'updatedAt'
    FROM oauth_account as oa
    JOIN user as u ON (oa.user_id = u.id)
    JOIN oauth_provider as op ON (oa.oauth_provider_id = op.id)
    WHERE oa.id = ?1 AND u.deleted_at IS NULL
  `);

  const getOAuthAccountStatement = c.env.DB.prepare(`
    SELECT
      oa.id,
      oa.email,
      op.name 'provider',
      oa.created_at 'createdAt',
      oa.updated_at 'updatedAt'
    FROM oauth_account as oa
    JOIN user as u ON (oa.user_id = u.id)
    JOIN oauth_provider as op ON (oa.oauth_provider_id = op.id)
    WHERE u.id = ?1 AND oa.deleted_at IS NULL
  `);

  const user = await getUserStatement.bind(oaid).first<User>();
  if (!user) return c.json(response(null, 'Not found'));

  const { results } = await getOAuthAccountStatement.bind(user.id).all();

  const joinedUser = {
    ...user,
    accounts: results,
  };

  return c.json(response(joinedUser));
});

interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  created_at: number;
  updated_at: number;
  deleted_at: number;
}

type CreateUserParams = Pick<User, 'username' | 'firstName' | 'lastName'>;

interface CreateOAuthParams {
  oaid: string;
  provider: string;
  email: string;
}

type CreateUserRequest = CreateUserParams & CreateOAuthParams;

app.post('/users', async (c) => {
  const body = await c.req.json<CreateUserRequest>();

  if (!body) return c.json(response(null, 'Bad request'));

  const createUserStatement = c.env.DB.prepare(`
    INSERT INTO user (id, username, first_name, last_name, created_at)
    VALUES (?1, ?2, ?3, ?4, ?5)
  `);

  const createOAuthAccountStatement = c.env.DB.prepare(`
    INSERT INTO oauth_account (id, user_id, oauth_provider_id, email, created_at)
    VALUES (?1, ?2, ?3, ?4, ?5)
  `);

  const id = typeid('user').toString();

  const results = await c.env.DB.batch([createUserStatement.bind(id, body.username, body.firstName, body.lastName, Date.now()), createOAuthAccountStatement.bind(body.oaid, id, body.provider, body.email, Date.now())]);

  return c.json(response(results));
});

interface OAuthProvider {
  id: string;
  name: string;
  created_at: number;
  updated_at: number;
  deleted_at: number;
}

type CreateOAuthProviderParams = Pick<OAuthProvider, 'name'>;

app.get('/providers', async (c) => {
  const findOAuthProviderStatement = c.env.DB.prepare(`
    SELECT
      id,
      name,
      created_at 'createdAt',
      updated_at 'updatedAt'
    FROM oauth_provider
  `);

  const { results } = await findOAuthProviderStatement.all<OAuthProvider>();

  return c.json(response(results));
});

app.post('/providers', async (c) => {
  const body = await c.req.json<CreateOAuthProviderParams>();

  const createOAuthProviderStatement = c.env.DB.prepare(`
    INSERT INTO oauth_provider (id, name, created_at)
    VALUES (?1, ?2, ?3)
  `);

  const id = typeid('oap').toString();

  const result = await createOAuthProviderStatement.bind(id, body.name, Date.now()).run();

  return c.json(response(result));
});

interface Template {
  id: string;
  userId: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  deletedAt: number;
};

type CreateTemplateParams = Pick<Template,
  | 'name'
  | 'userId'
>;

// type FindTemplateParams = Pick<Template,
//   | 'userId'
// >;

interface TemplateDataParams {
  data: JSON;
};

type UpdateTemplateParams = Pick<Template,
  | 'name'
>;

type CreateTemplateRequest = CreateTemplateParams & TemplateDataParams;
type UpdateTemplateRequest = UpdateTemplateParams & TemplateDataParams;

app.post('/templates', async (c) => {
  const body = await c.req.json<CreateTemplateRequest>();

  const id = typeid('tmpl').toString();

  const key = ['templates', body.userId, id].join('/');

  const createTemplateStatement = c.env.DB.prepare(`
    INSERT INTO template (id, user_id, name, created_at)
    VALUES (?1, ?2, ?3, ?4)
  `);

  try {
    await c.env.BUCKET.put(key, JSON.stringify(body.data));

    const { results } = await createTemplateStatement.bind(id, body.userId, body.name, Date.now()).run();

    return c.json(response(results));
  } catch (e) {
    return c.json(response(null, e));
  }
});

app.get('/templates', async (c) => {
  const { userId } = c.req.query();

  const getTemplateStatement = c.env.DB.prepare(`
    SELECT
      t.id,
      t.user_id 'userId',
      t.name,
      t.created_at 'createdAt',
      t.updated_at 'updatedAt'
    FROM template as t
    WHERE t.user_id = ?1 AND t.deleted_at IS NULL
  `);

  const { results } = await getTemplateStatement.bind(userId).all<Template>();

  return c.json(response(results));
});

app.get('/templates/data', async (c) => {
  const { userId, id } = c.req.query();
  const key = ['templates', userId, id].join('/');

  try {
    const objectRef = await c.env.BUCKET.get(key);
    const data = await objectRef.json();

    return c.json(response(data));
  } catch (e) {
    return c.json(response(null, e));
  }
});

app.put('/templates/data', async (c) => {
  const { userId, id } = c.req.query();
  const { data, name } = await c.req.json() as UpdateTemplateRequest;

  const key = ['templates', userId, id].join('/');

  const updateTemplateStatement = c.env.DB.prepare(`
    UPDATE template
    SET name = ?1
    WHERE id = ?2 AND deleted_at IS NULL
  `);

  try {
    await c.env.BUCKET.put(key, JSON.stringify(data));

    const { results } = await updateTemplateStatement.bind(name, id).run();

    return c.json(response(results));
  } catch (e) {
    return c.json(response(null, e));
  }
});

interface Project {
  id: string;
  userId: string;
  templateId: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  deletedAt: number;
};

type CreateProjectRequest = Pick<Project,
  | 'userId'
  | 'templateId'
  | 'name'
>;

type FindProjectRequest = Pick<Project,
  | 'userId'
>;

type UpdateProjectRequest = Pick<Project,
  | 'id'
  | 'name'
>;

app.post('/projects', async (c) => {
  const body = await c.req.json<CreateProjectRequest>();

  const createProjectStatement = c.env.DB.prepare(`
    INSERT INTO project (id, user_id, template_id, name, created_at)
    VALUES (?1, ?2, ?3, ?4, ?5)
  `);

  const id = typeid('proj').toString();

  const result = createProjectStatement.bind(id, body.userId, body.templateId, body.name, Date.now()).run();

  return c.json(response(result));
});

app.get('/projects', async (c) => {
  const { userId } = c.req.query() as FindProjectRequest;

  const getProjectStatement = c.env.DB.prepare(`
    SELECT
      p.id,
      p.user_id 'userId',
      p.template_id 'templateId',
      p.name,
      p.created_at 'createdAt',
      p.updated_at 'updatedAt'
    FROM project as p
    WHERE p.user_id = ?1 AND p.deleted_at IS NULL
  `);

  const { results } = await getProjectStatement.bind(userId).all<Project>();

  return c.json(response(results));
});

app.patch('/projects', async (c) => {
  const body = await c.req.json<UpdateProjectRequest>();

  const updateProjectStatement = c.env.DB.prepare(`
    UPDATE project
    SET name = ?1
    WHERE id = ?2 AND deleted_at IS NULL
  `);

  const { results } = await updateProjectStatement.bind(body.name, body.id).run();

  return c.json(response(results));
});

interface Generate {
  id: string;
  projectId: string;
  args: string;
  createdAt: number;
  deletedAt: number;
};

type CreateGenerateParams = Pick<Generate,
  | 'projectId'
  | 'args'
>;

app.post('/generates', async (c) => {
  const body = await c.req.json<CreateGenerateParams>();

  const createGenerateStatement = c.env.DB.prepare(`
    INSERT INTO generate (id, project_id, args, created_at)
    VALUES (?1, ?2, ?3, ?4)
  `);

  const getTemplateStatement = c.env.DB.prepare(`
    SELECT
      t.id,
      t.user_id 'userId',
      t.name,
      p.user_id,
      t.created_at 'createdAt',
      t.updated_at 'updatedAt'
    FROM template as t
    JOIN project as p
    ON (p.template_id = t.id)
    WHERE p.id = ?1 AND t.deleted_at IS NULL
  `);

  const templateMetadata = await getTemplateStatement.bind(body.projectId).first<Template>();
  const templateKey = ['templates', templateMetadata.userId, templateMetadata.id].join('/');
  const templateRef = await c.env.BUCKET.get(templateKey);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const template = await templateRef.json<Record<string, any>>();

  const args = Object.fromEntries([...new URLSearchParams(body.args)]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  template.objects = template.objects.map((object: Record<string, any>) => {
    if (!object.text) return object;

    Object.keys(args).map((key) => {
      object.text = object.text.replace(`{${key}}`, args[key]);
    });

    return object;
  });

  const id = typeid('gen').toString();
  const generatesKey = ['generates', body.projectId, id].join('/');

  await c.env.BUCKET.put(generatesKey, JSON.stringify(template));

  const result = createGenerateStatement.bind(id, body.projectId, body.args, Date.now()).run();

  return c.json(response(result));
});

app.get('/generates', async (c) => {
  const { projectId } = c.req.query();

  const getGenerateStatement = c.env.DB.prepare(`
    SELECT
      g.id,
      g.project_id 'projectId',
      g.args,
      g.created_at 'createdAt'
    FROM generate as g
    WHERE g.project_id = ?1 AND g.deleted_at IS NULL
  `);

  const { results } = await getGenerateStatement.bind(projectId).all<Generate>();

  return c.json(response(results));
});

app.get('/generates/data', async (c) => {
  const { id } = c.req.query();

  const getProjectStatement = c.env.DB.prepare(`
    SELECT
      p.id,
      p.user_id 'userId',
      p.template_id 'templateId',
      p.name,
      p.created_at 'createdAt',
      p.updated_at 'updatedAt'
    FROM generate as g
    JOIN project as p
    ON (g.project_id = p.id)
    WHERE g.id = ?1 AND p.deleted_at IS NULL
  `);

  const project = await getProjectStatement.bind(id).first<Project>();

  const key = ['generates', project.id, id].join('/');

  const objectRef = await c.env.BUCKET.get(key);
  const file = await objectRef.json();

  return c.json(response(file));
  // const fileBuffer = await objectRef.arrayBuffer();
  // const fileSlices = new Uint8Array(fileBuffer);

  // return stream(c, async (stream) => {
  //   await stream.write(fileSlices);
  //   await stream.close();
  // });
});

export default app;
