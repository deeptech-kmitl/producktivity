import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Box, Text } from '@producktivity/ui';
import { useUser } from '../../layout';
import { TemplatePreview } from './template.preview';

interface dataTemplateProps {
  data: Template[];
}

export const TemplateTab = component$(() => {
  const userSignal = useUser();
  const templateList = useSignal<dataTemplateProps>({ data: [] });

  useTask$(async () => {
    const temp = await fetch(`${import.meta.env.VITE_API_URL}/templates?userId=${userSignal.value.id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    templateList.value = await temp.json();
  });

  return (
    <Box paddingX="4" gap="4" width="full" height="full" align="top-left">
      <Text variant="title" weight="bold">
        Recent Templates
      </Text>
      <Box gridCols="3" gap="2">
        {templateList.value.data.map((item: Template) => (
          <TemplatePreview template={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
});
