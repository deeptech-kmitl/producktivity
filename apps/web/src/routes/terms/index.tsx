import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../configs/seo';
import { Navigation } from '@producktivity/web-landing-navigation';
import { Footer } from '@producktivity/web-landing-footer';

export default component$(() => {
  return (
    <Box align="center" height="full">
      <Navigation />

      <Box width="full" height="full" variant="gradient" style={{ display: 'flex', flexDirection: 'row' }}>
        <Box gap="1" width="full" height="full" align="center" variant="gradient">
          <Text variant="title" weight="bold" theme="surface">
            Terms of Service
          </Text>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Terms of Service' });
