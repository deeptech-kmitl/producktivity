import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../../configs/seo';

export default component$(() => {
  return (
    <>
      <Text variant="title" weight="bold">
        Projects
      </Text>
    </>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Projects' });
