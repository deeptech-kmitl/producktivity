import { component$, Slot } from '@builder.io/qwik';
import { Box } from '@producktivity/ui';

export default component$(() => {
  return (
    <Box paddingY="1" prose>
      <Slot />
    </Box>
  );
});
