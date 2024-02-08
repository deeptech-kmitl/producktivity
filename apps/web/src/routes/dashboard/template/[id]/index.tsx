import { component$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { Editor } from '@producktivity/web-dashboard-editor';
import { generateSeoConfig } from '../../../../configs/seo';

export default component$(() => {
  const location = useLocation();

  return <Editor id={location.params.id} />;
});

export const head: DocumentHead = generateSeoConfig({ title: 'Editor' });
