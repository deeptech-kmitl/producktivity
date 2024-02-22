import { $, Slot, component$, useOnWindow } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { isDev } from '@builder.io/qwik/build';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  if (isDev) return;

  const WeekInSeconds = 60 * 60 * 24 * 7;

  const cacheControlOptions = {
    public: true,
    maxAge: 5,
    sMaxAge: 10,
    staleWhileRevalidate: WeekInSeconds,
  };

  cacheControl(cacheControlOptions);

  cacheControl(cacheControlOptions, 'CDN-Cache-Control');
};

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
