import { Box, Button, Text } from '@producktivity/ui';
import { component$ } from '@builder.io/qwik';

export const CTA = component$(() => {
  return (
    <Box gap="2" height="quarter" width="full" align="center" paddingY="8">
      <Text weight="bold" variant="hero" theme="gradient" paddingY="1">
        Ready to get started?
      </Text>
      <Button rounded="base">Create Your Certificate</Button>
    </Box>
  );
});
