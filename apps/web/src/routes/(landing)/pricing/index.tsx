import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Card, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../../configs/seo';
import { entPricing, hobbistPricing, proPricing } from './configs';

export default component$(() => {
  return (
    <>
      <Box align="between-center" height="full" width="auto" padding="4">
        <Text variant="hero" theme="gradient" weight="bold">
          Find a plan for your projects
        </Text>
        <Box gap="1" height="full" width="auto">
          <Box align="center" gap="4" direction="horizontal" height="full" width="full">
            <Card type="Hobby" price={hobbistPricing.price} desc={hobbistPricing.desc} cta={hobbistPricing.cta} features={hobbistPricing.features} />
            <Card type="Professional" price={proPricing.price} desc={proPricing.desc} cta={proPricing.cta} features={proPricing.features} />
            <Card type="Enterprise" price={entPricing.price} desc={entPricing.desc} cta={entPricing.cta} features={entPricing.features} />
          </Box>
        </Box>
      </Box>
    </>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Pricing' });
