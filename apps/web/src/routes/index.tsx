import type { DocumentHead } from '@builder.io/qwik-city';

import { component$, useSignal, $ } from '@builder.io/qwik';
import { Text, Button, Box } from '@producktivity/ui';

export default component$(() => {
  const count = useSignal(0);

  const increment = $(() => count.value++);
  const decrement = $(() => count.value--);
  const reset = $(() => (count.value = 0));

  return (
    <Box gap="1" height="full" width="full" align="center">
      <Text bold variant="title">
        🪿 Certificate Generator สวัสดี 🪿
      </Text>
      <Box gap="1" direction="horizontal">
        <Button onClick$={decrement}>-</Button>
        <Text>คุณคลิ๊กไป {count} ครั้ง</Text>
        <Button onClick$={increment}>+</Button>
      </Box>
      <Button onClick$={reset}>Reset</Button>
    </Box>
  );
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
