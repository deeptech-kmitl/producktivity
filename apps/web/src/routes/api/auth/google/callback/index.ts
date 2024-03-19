import { RequestHandler } from "@builder.io/qwik-city";
import { Env, User, getGoogleUserInfo, initializeLucia } from "apps/web/src/configs/auth";

export const onGet: RequestHandler = async ({ error, redirect, platform, query, cookie }) => {
  const { DB } = platform.env as Env;
  const lucia = initializeLucia(DB);
  const code = query.get('code');
  const state = query.get('state');
  const storedState = cookie.get("google_oauth_state")?.value ?? null;
  const storedCodeVerifier = cookie.get("google_oauth_code_verifier")?.value ?? null;

  if (!code || !state || !storedState || !storedCodeVerifier || state !== storedState) {
    throw error(400, 'Invalid request 1');
  }


  const googleUserInfo = await getGoogleUserInfo(code, storedCodeVerifier);

  if (!googleUserInfo.data) throw error(400, googleUserInfo.error!.message);

  const tables = await DB
    .prepare('select name from sqlite_schema').all();
  console.log(tables.results);
  const existingUser = await DB
    .prepare('SELECT u.* FROM oauth_account as oa JOIN user as u ON (oa.user_id = u.id) JOIN oauth_provider as op ON (oa.oauth_provider_id = op.id) WHERE oa.id = ?1')
    .bind(googleUserInfo.data.sub)
    .first<User>();

  console.log('user', existingUser)

  if (existingUser) {
    const session = await lucia.createSession(existingUser.id, {
      id: 'sample',
      user_id: existingUser.id,
      expires_at: Date.now() + 600_000,
      created_at: Date.now(),
    });
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookie.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    throw redirect(302, '/');
  }

  const userId = 'sampleuser';

  const res = await DB.prepare(`
      INSERT INTO user (id, username, first_name, last_name, created_at)
      VALUES (?1, ?2, ?3, ?4, ?5)
    `)
    .bind(userId, 'usernamesample', 'firstnamesample', 'lastnamesample', Date.now())
    .run();
  console.log('exec res', res)

  const session = await lucia.createSession(userId, {
    id: 'sample',
    user_id: userId,
    expires_at: Date.now() + 600_000,
    created_at: Date.now(),
  });
  console.log('session', session)
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookie.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  throw redirect(302, '/');
};
