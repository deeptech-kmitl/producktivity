import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Text, Box, Button } from '@producktivity/ui';
import { generateSeoConfig } from '../../../configs/seo';

export default component$(() => {
  return (
    <>
      <Box gap="1">
        <Text variant="title" bold>
          Welcome back
        </Text>
        <Button href="/sign-up">Sign up</Button>
      </Box>
    </>
  );
});

export const head: DocumentHead = generateSeoConfig();
