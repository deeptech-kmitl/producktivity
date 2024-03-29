import { component$, $, useSignal, useOnDocument } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Editor } from '@producktivity/web-dashboard-editor';

export default component$(() => {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const template = useSignal<{ data: Record<string, any> }>();

  const getGenerateData = $(async () => {
    const query = new URLSearchParams({
      id: location.params.id,
    });

    const response = await fetch(`${import.meta.env.VITE_API_URL}/generates/data?${query.toString()}`, {
      headers: {
        'Access-Control-Allow-Origin': import.meta.env.VITE_API_URL,
      },
    });

    template.value = await response.json();
  });

  useOnDocument('load', $(async () => {
    await getGenerateData();
  }));

  if (!template.value) return <p>loading</p>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Editor id={location.params.id} withoutSidebar withoutToolbar initialTemplate={template.value.data as Record<string, any>} />;
});
