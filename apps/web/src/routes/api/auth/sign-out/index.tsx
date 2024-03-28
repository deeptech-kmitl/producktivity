import { RequestHandler } from '@builder.io/qwik-city';
import { Env, initializeLucia, validateRequest } from '../../../../configs/auth';

export const onPost: RequestHandler = async ({ redirect, cookie, platform }) => {
  const { DB } = platform.env as Env;
  const lucia = initializeLucia(DB);
  const { session } = await validateRequest(lucia, cookie);

  if (!session) throw redirect(302, '/sign-in');

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookie.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  throw redirect(302, '/');
};
