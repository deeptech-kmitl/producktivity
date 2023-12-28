import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <p>Produck's Certificate Generator</p>;
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
