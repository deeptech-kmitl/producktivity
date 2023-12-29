import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Typography, Button } from "@producktivity/ui";

export default component$(() => {
  const count = useSignal(0);

  return (
    <div>
      <Typography bold variant="title">🪿 Certificate Generator สวัสดี 🪿</Typography>
      <Button onClick$={() => count.value++}>Click me</Button>
      <Typography>คุณคลิ๊กไป {count} ครั้ง</Typography>
    </div>
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
