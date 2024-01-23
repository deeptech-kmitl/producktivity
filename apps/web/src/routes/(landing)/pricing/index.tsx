import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Text, Box } from '@producktivity/ui';
import { generateSeoConfig } from '../../../configs/seo';

export default component$(() => {
  return (
    <>
      <Box gap="1">
        <Text variant="title" bold>
          Pricing
        </Text>
      </Box>
    </>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Pricing' });
