import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Button, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../configs/seo';

export default component$(() => {
  return (
    <Box>
      <Box gap="1" height="min-screen" width="full" align="center">
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
      <Box gap="1" width="full" height="half" align="top" paddingBottom="1">
        <Text>How it works?</Text>
      </Box>
      <Box gap="1" width="full" align="center" paddingY="10">
        <Text weight="bold" variant="hero" theme="gradient">
          What our customer say
        </Text>
        <Box gridDirection="col" grid="3" gap="4" paddingY="4">
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
