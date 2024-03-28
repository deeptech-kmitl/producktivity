import { $, component$ } from '@builder.io/qwik';
import { Box, Button, Text } from '@producktivity/ui';

export default component$(() => {
  const switchTheme = $((theme: 'light' | 'dark') => (document.documentElement.dataset.mode = theme));

  const toLightMode = $(() => switchTheme('light'));
  const toDarkMode = $(() => switchTheme('dark'));

  return (
    <Box width="full" align="between-center" direction="horizontal" paddingX="2" paddingY="0.5">
      <Text theme="secondary">&copy; 2023-2024 Produckians</Text>
      <Button variant="surface" href="/privacy">
          <Text theme="secondary">Privacy</Text>
      </Button>
      <Button variant="surface" href="/terms">
          <Text theme="secondary">Terms</Text>
      </Button>
      <Box direction="horizontal" gap="2">
        <Button onClick$={toDarkMode} variant="tertiary">
          <Text theme="tertiary">Dark</Text>
        </Button>
        <Button onClick$={toLightMode} variant="tertiary">
          <Text theme="tertiary">Light</Text>
        </Button>
      </Box>
    </Box>
  );
});
