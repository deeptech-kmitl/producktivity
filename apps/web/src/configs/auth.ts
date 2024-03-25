import { Lucia } from 'lucia';
import { D1Adapter } from '@lucia-auth/adapter-sqlite';
import { Google } from 'arctic';

export function initializeLucia(db: D1Database) {
	const adapter = new D1Adapter(db, {
		user: 'user',
		session: 'session',
	});

	const lucia = new Lucia(adapter, {
		sessionCookie: {
			attributes: {
				secure: import.meta.env.PROD,
			},
		},
	});

	return lucia;
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
		}
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
	first_name: string;
	last_name: string;
	created_at: number;
	updated_at?: number;
	deleted_at?: number;
}

export interface Session {
	id: string;
	user_id: string;
	expires_at: number;
	created_at: number;
	updated_at?: number;
	deleted_at?: number;
}

declare module "lucia" {
	interface Register {
		DatabaseUserAttributes: User;
		DatabaseSessionAttributes: Session;
		Auth: ReturnType<typeof initializeLucia>;
	}
}
