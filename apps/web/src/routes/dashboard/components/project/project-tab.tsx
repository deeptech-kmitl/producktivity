import { component$ } from '@builder.io/qwik';
import { Box, Text } from '@producktivity/ui';
import { ProjectPreview } from './project-preview';
import { MockDashboardTasks, TaskProps } from '../../constant/mock-data';

export const ProjectTab = component$(() => {
  return (
    <Box paddingX="4" gap="4" width="full" align="top-left">
      <Text variant="title" weight="bold">
        Recent Projects
      </Text>
      <Box gridCols="3" gap="2">
        {MockDashboardTasks.map((item: TaskProps) => (
          <ProjectPreview project={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
});
