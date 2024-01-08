import type { DocumentHead } from '@builder.io/qwik-city';

import { component$ } from '@builder.io/qwik';
import { FragmentPlaceholder } from '@producktivity/util-fragment';

export default component$(() => {
  return <FragmentPlaceholder name="landing" />;
});

export const head: DocumentHead = {
  title: 'Certificate Generator',
  meta: [
    {
      name: 'description',
      content: 'A complete certificate generator',
    },
  ],
};
