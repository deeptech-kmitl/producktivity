import { Box, Button, Text } from '@producktivity/ui';
import { component$ } from '@builder.io/qwik';
import { LuArrowRightCircle } from '@qwikest/icons/lucide';

export const CTA = component$(() => {
  return (
    <Box paddingX="10" paddingY="4" width="full">
      <Box gap="2" width="full" align="center" paddingY="6" variant="primary" rounded="lg">
        <Text theme="primary" variant="title" weight="bold">
          Start your journey with us
        </Text>
        <Text theme="primary">See all advantages of our application</Text>
        <Button rounded="base" variant="tertiary" href="/pricing">
          <Box direction="horizontal" gap="0.5" align="center">
            <Text theme="primary">Continue</Text>
            <Text theme="primary">
              <LuArrowRightCircle />
            </Text>
          </Box>
        </Button>
      </Box>
    </Box>
  );
});
