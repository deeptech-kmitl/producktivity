import { Hono } from 'hono';
import { D1Database, R2Bucket } from '@cloudflare/workers-types';
import { typeid } from 'typeid-js';

interface ResponseWrapper<T, E> {
  data: T;
  error: E;
}

const response = <T, E>(data: T, error?: E): ResponseWrapper<T, E> => {
  return {
    data,
    error
  };
};

type Bindings = {
  DB: D1Database;
  BUCKET: R2Bucket;
}

const app = new Hono<{ Bindings: Bindings }>();

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

type CreateUserParams = Pick<User,
  | 'username'
  | 'firstName'
  | 'lastName'
>;

interface CreateOAuthParams {
  oaid: string;
  provider: string;
  email: string;
};

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

app.get('/projects', async (c) => {
  const { userId } = c.req.query() as FindProjectRequest;

  const getProjectStatement = c.env.DB.prepare(`
    SELECT
      p.id,
      p.user_id 'userId',
      p.template_id 'templateId',
      p.created_at 'createdAt',
      p.updated_at 'updatedAt'
    FROM project as p
    WHERE p.user_id = ?1 AND p.deleted_at NOT NULL
  `);

  const { results } = await getProjectStatement.bind(userId).all<Project>();

  return c.json(response(results));
});

app.patch('/projects', async (c) => {
  const body = await c.req.json<UpdateProjectRequest>();

  const updateProjectStatement = c.env.DB.prepare(`
    UPDATE project
    SET name = ?1
    WHERE id = ?2 AND deleted_at NOT NULL
  `);

  const { results } = await updateProjectStatement.bind(body.name, body.id).run();

  return c.json(response(results));
});

// interface Generate {
//   id: string;
//   projectId: string;
//   key: string;
//   args: string;
//   createdAt: number;
//   deletedAt: number;
// }

export default app;
