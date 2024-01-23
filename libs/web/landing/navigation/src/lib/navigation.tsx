import { component$ } from '@builder.io/qwik';
import { Box, Navigation } from '@producktivity/ui';

export default component$(() => {
  return (
    <Navigation.Bar>
      <Box>
        <Navigation.Item prefetch href="/">
          Home
        </Navigation.Item>
      </Box>
      <Box direction="horizontal" gap="1">
        <Navigation.Item prefetch href="/pricing">
          Pricing
        </Navigation.Item>
        <Navigation.Item prefetch href="/contact">
          Contact
        </Navigation.Item>
        <Navigation.Action prefetch href="/sign-up">
          Get Started for free
        </Navigation.Action>
      </Box>
    </Navigation.Bar>
  );
});
