import { component$ } from '@builder.io/qwik';
import { Box, Navigation, Text } from '@producktivity/ui';

export default component$(() => {
  return (
    <Navigation.Bar>
      <Box>
      <Navigation.Item prefetch href="/">
          <Box direction="horizontal" gap="1">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4444 0H2.22222C1 0 0 1.2 0 2.66667V21.3333C0 22.8 1 24 2.22222 24H17.7778C19 24 20 22.8 20 21.3333V6.66667L14.4444 0ZM4.44444 5.33333H10V8H4.44444V5.33333ZM15.5556 18.6667H4.44444V16H15.5556V18.6667ZM15.5556 13.3333H4.44444V10.6667H15.5556V13.3333ZM13.3333 8V2.66667L17.7778 8H13.3333Z" fill="black" />
            </svg>
            <Text bold>Certifine</Text>
          </Box>
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
          Sign up
        </Navigation.Action>
      </Box>
    </Navigation.Bar>
  );
});
