import { component$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { Box, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../../../configs/seo';

export default component$(() => {
  const location = useLocation();

  return (
    <Box id={location.params.id}>
      <Text variant="title" weight="bold">
        Projects
      </Text>
    </Box>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Projects' });
