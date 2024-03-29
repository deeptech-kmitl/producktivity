import { component$, useSignal, useOnDocument, $ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { Editor } from '@producktivity/web-dashboard-editor';
import { generateSeoConfig } from '../../../../configs/seo';
import { useUser } from '../../../layout';

export default component$(() => {
  const location = useLocation();
  const userSignal = useUser();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentProject = useSignal<{ data: Record<string, any> }>();
  const tmp = useSignal<Template>();

  useOnDocument(
    'load',
    $(async () => {
      const dataQuery = new URLSearchParams({
        userId: userSignal.value.id,
        id: location.params.id,
      });
      const temp = await fetch(`${import.meta.env.VITE_API_URL}/templates/data?${dataQuery.toString()}`);
      const query = new URLSearchParams({
        userId: userSignal.value.id,
      });
      const templateMetadataRequest = await fetch(`${import.meta.env.VITE_API_URL}/templates?${query.toString()}`);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const templateMetadata = (await templateMetadataRequest.json()) as { data: Template[] };
      const template = templateMetadata.data.find((t) => t.id === location.params.id);

      currentProject.value = await temp.json();
      tmp.value = template;
    }),
  );

  if (!currentProject.value?.data) return <p>loading...</p>;

  return <Editor id={location.params.id} user={userSignal.value} currentInfo={tmp.value} initialTemplate={currentProject.value.data} />;
});

export const head: DocumentHead = generateSeoConfig({ title: 'Editor' });
