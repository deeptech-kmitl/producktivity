import { RequestHandler } from '@builder.io/qwik-city';
import { google } from 'apps/web/src/configs/auth';
import { generateCodeVerifier, generateState } from 'arctic';

export const onGet: RequestHandler = async ({ redirect, cookie }) => {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ['profile', 'email'],
  });
  
  cookie.set("google_oauth_state", state, {
		path: "/",
		secure: import.meta.env.PROD,
		httpOnly: true,
		maxAge: [10, 'minutes'],
		sameSite: "lax"
	})

  cookie.set("google_oauth_code_verifier", codeVerifier, {
		path: "/",
		secure: import.meta.env.PROD,
		httpOnly: true,
		maxAge: [10, 'minutes'],
		sameSite: "lax"
	})

  throw redirect(302, url.toString());
};
