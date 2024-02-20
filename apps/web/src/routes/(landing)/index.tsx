import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Button, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../configs/seo';

export default component$(() => {
  return (
    <div style={{ overflowY: 'auto', width: '100vw' }}>
      <Box gap="1" height="half" width="full" align="center">
        <Text variant="hero" theme="gradient" weight="bold">
          Welcome to Certificate Generators
        </Text>
        <Text variant="h4" theme="secondary">
          Create and customize your own certificate in just a few clicks.
        </Text>
        <Button variant="gradient" rounded prefetch href="/sign-up">
          Get Started
        </Button>
      </Box>
      <Box gap="1" height="quarter" width="full" align="bottom" paddingBottom="1">
        <Text>How it works?</Text>
      </Box>
      <Box gap="1" height="full" width="full" align="center" paddingTop="10">
        <Text weight="bold" variant="hero" theme="gradient" paddingY="0.5">
          What our customer say
        </Text>
        <Box gridDirection="col" grid="3" gap="4" paddingY="4">
          {[...Array(9)].map((_, index) => (
            <Box key={index} align="between-center" shadow="md" width="20" variant="surface" padding="2" height="auto" border="2">
              <img src="https://cdn-icons-png.flaticon.com/512/1165/1165815.png" width={64} height={64}></img>
              <Box paddingY="1">
                <Text theme="primary">"The certificate generator is so easy to use and the results are amazing!"</Text>
              </Box>
              <Text weight="semibold">- John Doe</Text>
            </Box>
          ))}
        </Box>
        <Button>See more</Button>
      </Box>
      <Box gap="2" height="full" align="center">
        <Text weight="bold" variant="hero" theme="gradient" paddingY="0.5">
          Ready to get started?
        </Text>
        <Button>Create Your Certificate</Button>
      </Box>
    </div>
  );
});

export const head: DocumentHead = generateSeoConfig();
