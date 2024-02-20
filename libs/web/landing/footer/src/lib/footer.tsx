import { $, component$ } from '@builder.io/qwik';
import { Box, Button, Text } from '@producktivity/ui';

export default component$(() => {
  const switchTheme = $((theme: 'light' | 'dark') => (document.documentElement.dataset.mode = theme));

  const toLightMode = $(() => switchTheme('light'));
  const toDarkMode = $(() => switchTheme('dark'));

  return (
    <Box width="full" align="between-center" direction="horizontal" paddingX="2" paddingY="0.5">
      <Text theme="secondary">&copy; 2023-2024 Produckians</Text>
      <Box direction="horizontal" gap="2">
        <Button onClick$={toDarkMode} variant="tertiary" shape="rounded">
          Dark
        </Button>
        <Button onClick$={toLightMode} variant="tertiary" shape="rounded">
          Light
        </Button>
      </Box>
    </Box>
  );
});
