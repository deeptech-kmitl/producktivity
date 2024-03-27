import { component$, Slot } from '@builder.io/qwik';
import { Box } from '@producktivity/ui';

export default component$(() => {
  return (
    <Box align="center" height="full">
      <Slot />
    </Box>
  );
});
