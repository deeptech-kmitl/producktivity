import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Text, Box, Button } from '@producktivity/ui';
import { generateSeoConfig } from '../../../configs/seo';

export default component$(() => {
  return (
    <>
      <Box gap="1">
        <Text variant="title" bold>
          Create an account
        </Text>
        <Button href="/sign-in">Log in</Button>
      </Box>
    </>
  );
});

export const head: DocumentHead = generateSeoConfig();
