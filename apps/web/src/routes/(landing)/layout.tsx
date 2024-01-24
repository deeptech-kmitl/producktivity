import { component$, Slot } from '@builder.io/qwik';
import { Box } from '@producktivity/ui';
import { Navigation } from '@producktivity/web-landing-navigation';

export default component$(() => {
  return (
    <Box height="full" width="full" align="top">
      <Navigation />
      <Slot />
    </Box>
  );
});
