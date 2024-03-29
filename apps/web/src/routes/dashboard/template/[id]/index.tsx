import { component$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { Editor } from '@producktivity/web-dashboard-editor';
import { generateSeoConfig } from '../../../../configs/seo';
import { useUser } from '../../../layout';

export default component$(() => {
  const location = useLocation();
  const userSignal = useUser();

  return <Editor id={location.params.id} user={userSignal.value} />;
});

export const head: DocumentHead = generateSeoConfig({ title: 'Editor' });
