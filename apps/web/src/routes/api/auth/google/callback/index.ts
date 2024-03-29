import { RequestHandler } from '@builder.io/qwik-city';
import { Env, Provider, ResponseWrapper, User, getGoogleUserInfo, initializeLucia } from '../../../../../configs/auth';

async function findUser(oaid: string): Promise<User | undefined> {
  const query = new URLSearchParams({ oaid });
  const url = `${import.meta.env.VITE_API_URL}/users?${query.toString()}`;
  const response = await fetch(url);

  const user = (await response.json()) as ResponseWrapper<User>;

  if (!user) return;

  return user.data;
}

async function findProvider(name: string): Promise<Provider | undefined> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/providers`);
  const providers = (await response.json()) as ResponseWrapper<Provider[]>;

  if (!providers.data) return;

  return providers.data.find((provider) => provider.name === name);
}

export const onGet: RequestHandler = async ({ error, redirect, platform, query, cookie }) => {
  const { DB } = platform.env as Env;
  const lucia = initializeLucia(DB);
  const code = query.get('code');
  const state = query.get('state');
  const storedState = cookie.get('google_oauth_state')?.value ?? null;
  const storedCodeVerifier = cookie.get('google_oauth_code_verifier')?.value ?? null;

  if (!code || !state || !storedState || !storedCodeVerifier || state !== storedState) {
    throw error(400, 'Invalid request 1');
  }

  const googleUserInfo = await getGoogleUserInfo(code, storedCodeVerifier);

  if (!googleUserInfo.data) throw error(400, googleUserInfo.error!.message);

  const existingUser = await findUser(googleUserInfo.data.sub);

  if (existingUser) {
    const session = await lucia.createSession(existingUser.id, {
      created_at: Date.now(),
    });

    const sessionCookie = lucia.createSessionCookie(session.id);
    cookie.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    throw redirect(302, '/dashboard/overview');
  }

  const provider = await findProvider('google');

  await fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: googleUserInfo.data.given_name.toLowerCase(),
      firstName: googleUserInfo.data.given_name,
      lastName: googleUserInfo.data.family_name,
      oaid: googleUserInfo.data.sub,
      provider: provider?.id,
      email: googleUserInfo.data.email,
    }),
  });

  const user = await findUser(googleUserInfo.data.sub);

  const session = await lucia.createSession(user!.id, {
    created_at: Date.now(),
  });

  const sessionCookie = lucia.createSessionCookie(session.id);
  cookie.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  throw redirect(302, '/dashboard/overview');
};
