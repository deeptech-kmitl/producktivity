import { component$ } from '@builder.io/qwik';
import { Box, Button, Text } from '@producktivity/ui';
import { TaskProps } from '../constant/mock-data';

interface ProjectPreviewProps {
  project: TaskProps;
}

export const ProjectPreview = component$(({ project }: ProjectPreviewProps) => {
  return (
    <Button variant="surface" href={`/dashboard/project/${project.id}`}>
      <Box gap="1">
        <Box padding="3" variant="surface" rounded="md">
          <img src="https://i0.wp.com/vat.or.th/wp-content/uploads/2021/03/placeholder.png?ssl=1" />
        </Box>
        <Text variant="h3" weight="semibold">
          {project.title}
        </Text>
        <Text variant="small" theme="secondary">
          {project.createdWhen.toLocaleDateString()}
        </Text>
      </Box>
    </Button>
  );
});
