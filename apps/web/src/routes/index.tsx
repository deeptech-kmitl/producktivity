import type { DocumentHead } from "@builder.io/qwik-city";

import { component$, useSignal, $ } from "@builder.io/qwik";
import { Typography, Button } from "@producktivity/ui";

export default component$(() => {
  const count = useSignal(0);

  const increment = $(() => count.value++);
  const decrement = $(() => count.value--);
  const reset = $(() => count.value = 0);

  return (
    <>
      <div>
        <Typography bold variant="title">
          🪿 Certificate Generator สวัสดี 🪿
        </Typography>
        <Button onClick$={increment}>Increment</Button>
        <Button onClick$={decrement}>Decrement</Button>
        <Typography>คุณคลิ๊กไป {count} ครั้ง</Typography>
        <Button onClick$={reset}>Reset</Button>
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
