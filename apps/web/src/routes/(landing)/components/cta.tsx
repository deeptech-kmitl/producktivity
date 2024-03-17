import { Box, Button, Text } from '@producktivity/ui';
import { component$ } from '@builder.io/qwik';
import { LuArrowRightCircle } from '@qwikest/icons/lucide';

export const CTA = component$(() => {
  return (
    <Box paddingX="10" paddingY="4" width="full">
      <Box gap="2" width="full" align="center" paddingY="6" variant="primary" rounded="md">
        <Text weight="bold" variant="hero" theme="primary">
          Start your journey with us
        </Text>
        <Text>See all advantages of our application</Text>
        <Button rounded="base" variant="tertiary" href="/pricing">
          <Box direction="horizontal" gap="0.5" align="center">
            <Text>Continue</Text>
            <Text>
              <LuArrowRightCircle />
            </Text>
          </Box>
        </Button>
      </Box>
    </Box>
  );
});
