import { Lucia } from 'lucia';
import { D1Adapter } from '@lucia-auth/adapter-sqlite';

const adapter = new D1Adapter();

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: import.meta.env.PROD
		}
	}
});

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
  }
}
