import { Box, Button, Text } from '@producktivity/ui';
import { component$ } from '@builder.io/qwik';
import { LuArrowUpRight } from '@qwikest/icons/lucide';

export const Hero = component$(() => {
  return (
    <Box direction="horizontal" height="full">
      <Box gap="1" width="3/4" align="center">
        <iframe src="https://lottie.host/embed/d4291adc-a4e7-4d9e-b81e-54e7a390dc69/VJVzblxTgI.json" height={700} width={500} />
      </Box>
      <Box direction="vertical" align="between-start" width="full" height="full" paddingY="6">
        <Box gap="1" height="half" width="full" align="left">
          <Text variant="hero" theme="gradient" weight="bold">
            Welcome to
          </Text>
          <Text variant="hero" theme="gradient" weight="bold">
            Certificate Generators
          </Text>
          <Box direction="horizontal" gap="0.5">
            <Text variant="h4" theme="secondary">
              Create and customize your own certificate in just a few clicks.
            </Text>
            <Button href="sign-up" variant="surface">
              <Box direction="horizontal" gap="0.5">
                <Text class="font-semibold">Get Started</Text>
                <Text>
                  <LuArrowUpRight />
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
        <Box variant="secondary" padding="2" width="2/3" align="left" rounded="base" gap="1">
          <Text weight="semibold" variant="h2" theme="primary">
            Empower your achievements with personalized certificates
          </Text>
          <Text theme="secondary">
            Whether you&apos;re celebrating academic accomplishments, professional milestones, or personal triumphs, <span class="font-semibold">Certified</span> is here to help you commemorate them in style.
          </Text>
        </Box>
      </Box>
    </Box>
  );
});
