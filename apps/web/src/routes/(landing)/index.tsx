import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Text, Button, Box } from '@producktivity/ui';
import { generateSeoConfig } from '../../configs/seo';

export default component$(() => {
  return (
    <>
      <Box gap="1" height="full" width="full" align="top" paddingTop="2">
        <Text bold variant="hero">
          Certificate builder for all your needs
        </Text>
        <Text>Create certificates for your online courses, webinars, workshops, and more.</Text>
        <Box direction="horizontal" gap="1">
          <Button prefetch href="/sign-up">
            Get Started
          </Button>
          <Button variant="secondary" prefetch href="/pricing">
            Pricing & FAQ
          </Button>
        </Box>
      </Box>
    </>
  );
});

export const head: DocumentHead = generateSeoConfig();
