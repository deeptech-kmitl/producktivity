import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Card, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../../configs/seo';
import { entPricing, hobbistPricing, proPricing } from './configs';

export default component$(() => {
  return (
    <>
      <Box paddingTop="6">
        <Text variant="hero" themeVariant="gradient" bold>
          Find a plan for your projects
        </Text>
      </Box>
      <Box gap="1" height="full" width="auto" paddingX="4" paddingY="2">
        <Box align="center" gap="4" direction="horizontal" height="full" width="full">
          <Card type="Hobby" price={hobbistPricing.price} desc={hobbistPricing.desc} cta={hobbistPricing.cta} features={hobbistPricing.features} />
          <Card type="Professional" price={proPricing.price} desc={proPricing.desc} cta={proPricing.cta} features={proPricing.features} />
          <Card type="Enterprise" price={entPricing.price} desc={entPricing.desc} cta={entPricing.cta} features={entPricing.features} />
        </Box>
      </Box>
    </>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Pricing' });
