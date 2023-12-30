import type { DocumentHead } from "@builder.io/qwik-city";

import { component$, useSignal, $ } from "@builder.io/qwik";
import { Typography, Button } from "@producktivity/ui";

export default component$(() => {
  const count = useSignal(0);

  const increment = $(() => count.value++);

  return (
    <>
      <div>
        <Typography bold variant="title">
          🪿 Certificate Generator สวัสดี 🪿
        </Typography>
        <Button onClick$={increment}>Increment</Button>
        <Typography>คุณคลิ๊กไป {count} ครั้ง</Typography>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Certificate Generator",
  meta: [
    {
      name: "description",
      content: "A complete certificate generator",
    },
  ],
};
