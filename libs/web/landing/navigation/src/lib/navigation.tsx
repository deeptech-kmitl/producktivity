import { component$ } from '@builder.io/qwik';
import { Box, Navigation, Text } from '@producktivity/ui';

export default component$(() => {
  return (
    <Navigation.Bar>
      <Box direction="horizontal" gap="1">
        <Navigation.Item prefetch href="/">
          <Box direction="horizontal" gap="1">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4444 0H2.22222C1 0 0 1.2 0 2.66667V21.3333C0 22.8 1 24 2.22222 24H17.7778C19 24 20 22.8 20 21.3333V6.66667L14.4444 0ZM4.44444 5.33333H10V8H4.44444V5.33333ZM15.5556 18.6667H4.44444V16H15.5556V18.6667ZM15.5556 13.3333H4.44444V10.6667H15.5556V13.3333ZM13.3333 8V2.66667L17.7778 8H13.3333Z" fill="black" />
            </svg>
            <Text bold>Certgen</Text>
          </Box>
        </Navigation.Item>
        <Navigation.Item prefetch href="/pricing">
          <Text>Pricing</Text>
        </Navigation.Item>
        <Navigation.Item prefetch href="/contact">
          <Text>Templates</Text>
        </Navigation.Item>
        <Navigation.Item prefetch href="/dashboard">
          <Text>Dashboard</Text>
        </Navigation.Item>
      </Box>

      <Box direction="horizontal" gap="1">
        <Navigation.Action prefetch href="/sign-up">
          Sign in
        </Navigation.Action>
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 1.5V3.40909M11.5 20.5909V22.5M4.07364 4.57361L5.42909 5.92906M17.5709 18.0709L18.9264 19.4263M1 12H2.90909M20.0909 12H22M4.07364 19.4263L5.42909 18.0709M17.5709 5.92906L18.9264 4.57361M16.2727 12C16.2727 14.6359 14.1359 16.7727 11.5 16.7727C8.86409 16.7727 6.72727 14.6359 6.72727 12C6.72727 9.36409 8.86409 7.22727 11.5 7.22727C14.1359 7.22727 16.2727 9.36409 16.2727 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </Box>
    </Navigation.Bar>
  );
});
