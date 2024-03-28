import { $, Slot, component$, useOnWindow } from '@builder.io/qwik';
import { routeLoader$, type RequestHandler } from '@builder.io/qwik-city';
// import { isDev } from '@builder.io/qwik/build';
import { verifyRequestOrigin } from 'lucia';
import { Env, User, initializeLucia } from '../configs/auth';

export const useUser = routeLoader$(({ sharedMap }) => {
  return sharedMap.get('user') as User;
});

export const onRequest: RequestHandler = async ({ platform, next, cookie, method, headers, sharedMap }) => {
  const { DB } = platform.env as Env;
  const lucia = initializeLucia(DB);

  if (method === 'POST') {
    const originHeader = headers.get('Origin');
    const hostHeader = headers.get('Host');

    if (!originHeader || !hostHeader || !verifyRequestOrigin(originHeader, [hostHeader])) {
      // throw error(403, 'Forbidden');
      return await next();
    }
  }

  const sessionId = cookie.get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) {
    sharedMap.set('user', null);
    sharedMap.set('session', null);

    return await next();
  }

  const { session, user } = await lucia.validateSession(sessionId);

  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookie.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  }

  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie();
    cookie.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  }

  sharedMap.set('user', user);
  sharedMap.set('session', session);

  return await next();
};

// export const onGet: RequestHandler = async ({ cacheControl }) => {
//   if (isDev) return;

//   const WeekInSeconds = 60 * 60 * 24 * 7;

//   const cacheControlOptions = {
//     public: true,
//     maxAge: 5,
//     sMaxAge: 10,
//     staleWhileRevalidate: WeekInSeconds,
//   };

//   cacheControl(cacheControlOptions);

//   cacheControl(cacheControlOptions, 'CDN-Cache-Control');
// };

export default component$(() => {
  useOnWindow(
    'load',
    $(() => {
      function setTheme(event: MediaQueryList | MediaQueryListEvent) {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && event.matches)) {
          document.documentElement.dataset.mode = 'dark';
        } else {
          document.documentElement.dataset.mode = 'light';
        }
      }

      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(darkModeMediaQuery);

      darkModeMediaQuery.onchange = setTheme;
    }),
  );

  return <Slot />;
});
