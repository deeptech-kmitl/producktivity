import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Button, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../configs/seo';

export default component$(() => {
  return (
    <Box>
      <Box direction="horizontal" height="full" paddingY="5">
        <Box gap="1" width="min-1/3" align="left">
          <iframe src="https://lottie.host/embed/d4291adc-a4e7-4d9e-b81e-54e7a390dc69/VJVzblxTgI.json" height={700} width={500} />
        </Box>
        <Box direction="vertical" align="between-start" height="full" paddingY="6">
          <Box gap="1" height="half" width="full" align="left">
            <Text variant="hero" theme="gradient" weight="bold">
              Welcome to Certificate Generators
            </Text>
            <Text variant="h4" theme="secondary">
              Create and customize your own certificate in just a few clicks.
            </Text>
            <Button variant="gradient" rounded="full" prefetch href="/sign-up">
              Get Started
            </Button>
          </Box>
          <Box variant="secondary" padding="2" width="half" align="left" rounded="base" gap="1">
            <Text weight="semibold" variant="h2">
              Empower your achievements with personalized certificates
            </Text>
            <Text>
              Whether you&apos;re celebrating academic accomplishments, professional milestones, or personal triumphs, <span class="font-semibold">Certified</span> is here to help you commemorate them in style.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box gap="1" width="full" align="center">
        <Text>How it works?</Text>
      </Box>
      <Box gap="1" width="full" align="center" paddingY="10">
        <Text weight="bold" variant="hero" theme="gradient">
          What our customer say
        </Text>
        <Box gridCols="3" gap="4" paddingY="4">
          {[...Array(9)].map((_, index) => (
            <Box key={index} align="between-center" shadow="md" width="20" variant="surface" padding="2" height="auto" rounded="md">
              <img src="https://cdn-icons-png.flaticon.com/512/1165/1165815.png" width={64} height={64}></img>
              <Box paddingY="1">
                <Text theme="primary">"The certificate generator is so easy to use and the results are amazing!"</Text>
              </Box>
              <Text weight="semibold">- John Doe</Text>
            </Box>
          ))}
        </Box>
        <Button rounded="base">See more</Button>
      </Box>
      <Box gap="2" height="quarter" width="full" align="center" paddingY="8">
        <Text weight="bold" variant="hero" theme="gradient" paddingY="1">
          Ready to get started?
        </Text>
        <Button rounded="base">Create Your Certificate</Button>
      </Box>
    </Box>
  );
});

export const head: DocumentHead = generateSeoConfig();
