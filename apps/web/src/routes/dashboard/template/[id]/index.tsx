import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { Editor } from '@producktivity/web-dashboard-editor';
import { generateSeoConfig } from '../../../../configs/seo';
import { useUser } from '../../../layout';

export default component$(() => {
  const location = useLocation();
  const userSignal = useUser();
  const currentProject = useSignal<Template>({ id: '', name: '', userId: '', createdAt: 0 });

  useTask$(async () => {
    const temp = await fetch(`${import.meta.env.VITE_API_URL}/templates/data?userId=${userSignal.value.id}&id=${currentProject.value?.id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    currentProject.value = await temp.json();
  });

  return <Editor id={location.params.id} user={userSignal.value} currentInfo={currentProject.value} />;
});

export const head: DocumentHead = generateSeoConfig({ title: 'Editor' });
