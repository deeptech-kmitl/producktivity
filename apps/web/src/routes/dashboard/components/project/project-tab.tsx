import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Box, Text } from '@producktivity/ui';
import { ProjectPreview } from './project-preview';
import { useUser } from '../../../layout';

interface dataProjectProps {
  data: Project[];
}

export const ProjectTab = component$(() => {
  const userSignal = useUser();
  const projectList = useSignal<dataProjectProps>({ data: [] });

  useTask$(async () => {
    const temp = await fetch(`${import.meta.env.VITE_API_URL}/projects?userId=${userSignal.value.id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    projectList.value = await temp.json();
  });

  return (
    <Box paddingX="4" gap="4" width="full" height="full" align="top-left">
      <Text variant="title" weight="bold">
        Recent Projects
      </Text>
      <Box gridCols="3" gap="2">
        {projectList.value.data.map((item: Project) => (
          <ProjectPreview project={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
});
