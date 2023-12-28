import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <p>🪿 Certificate Generator สวัสดี 🪿</p>;
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
