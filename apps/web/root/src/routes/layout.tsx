import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  const YearInSeconds = 60 * 60 * 24 * 365;

  const cacheControlOptions = {
    public: true,
    maxAge: 5,
    sMaxAge: 10,
    staleWhileRevalidate: YearInSeconds,
  };

  cacheControl(cacheControlOptions);

  cacheControl(cacheControlOptions, 'CDN-Cache-Control');
};

export default component$(() => {
  return (
    <>
      <Slot />
    </>
  );
});
