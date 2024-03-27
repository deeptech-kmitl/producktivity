import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../configs/seo';
import { LuChevronDown } from '@qwikest/icons/lucide';
import { Hero } from './components/hero';
import { CTA } from './components/cta';
import { Feature } from './components/feature';

export default component$(() => {
  return (
    <Box>
      <Hero />
      <Box gap="1" width="full" align="center">
        <Text>How it works?</Text>
        <Text>
          <LuChevronDown />
        </Text>
      </Box>
      <Feature />
      <CTA />
    </Box>
  );
});

export const head: DocumentHead = generateSeoConfig();
