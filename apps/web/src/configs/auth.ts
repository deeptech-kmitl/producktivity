import { Lucia, Session as LuciaSession, User as LuciaUser } from 'lucia';
import { D1Adapter } from '@lucia-auth/adapter-sqlite';
import { Google } from 'arctic';
import { Cookie } from '@builder.io/qwik-city';

export function initializeLucia(db: D1Database) {
	const adapter = new D1Adapter(db, {
		user: 'user',
		session: 'session',
	});

	const lucia = new Lucia(adapter, {
		getUserAttributes: (attributes) => {
			return {
				username: attributes.username
			};
		},
		sessionCookie: {
			attributes: {
				secure: import.meta.env.PROD,
			},
		},
	});

	return lucia;
}

export async function validateRequest(lucia: ReturnType<typeof initializeLucia>, cookie: Cookie): Promise<{ user: LuciaUser; session: LuciaSession } | { user: null; session: null }> {
	const sessionId = cookie.get(lucia.sessionCookieName)?.value ?? null;
	if (!sessionId) {
		return { user: null, session: null };
	}

	const result = await lucia.validateSession(sessionId);

	if (result.session && result.session.fresh) {
		const sessionCookie = lucia.createSessionCookie(result.session.id);
		cookie.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	}

	if (!result.session) {
		const sessionCookie = lucia.createBlankSessionCookie();
		cookie.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	}

	return result;
}

export const google = new Google(
	import.meta.env.VITE_GOOGLE_CLIENT_ID,
	import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
	import.meta.env.VITE_GOOGLE_REDIRECT_URI,
);

export async function getGoogleUserInfo(code: string, codeVerifier: string): Promise<{ data?: GoogleUser, error?: Error }> {
	try {
		const tokens = await google.validateAuthorizationCode(code, codeVerifier);
		const googleUserResponse = await fetch(import.meta.env.VITE_GOOGLE_USERINFO_URL, {
			headers: {
				Authorization: `Bearer ${tokens.accessToken}`
			},
		});

		const googleUser: GoogleUser = await googleUserResponse.json();

		return {
			data: googleUser,
		};
	} catch (e) {
		return {
			error: e as Error,
		};
	}
}

export interface Env {
	DB: D1Database;
}

export interface GoogleUser {
	sub: string;
	name: string;
	given_name: string;
	family_name: string;
	picture: string;
	email: string;
	email_verified: boolean;
}

export interface User {
	id: string;
	username: string;
	firstName: string;
	lastName: string;
	createdAt: number;
	updatedAt?: number;
}

export interface ResponseWrapper<T, E = string> {
	data: T;
	error: E;
}

export interface Provider {
	id: string;
	name: string;
	createdAt: number;
	updatedAt: number;
}

export interface Session {
	created_at: number;
}

declare module 'lucia' {
	interface Register {
		DatabaseUserAttributes: User;
		DatabaseSessionAttributes: Session;
		Auth: ReturnType<typeof initializeLucia>;
	}
}
