import { component$ } from '@builder.io/qwik';
import { Box, Text } from '@producktivity/ui';

interface FeatureProps {
  id: number;
  title: string;
  content: string;
}

const Features: FeatureProps[] = [
  {
    id: 0,
    title: 'Table View',
    content: 'Plan and organize projects, able to follow up with status and view data in a table',
  },
  {
    id: 1,
    title: 'Task',
    content: 'Efficiently manage tasks with our intuitive task management system, ensuring nothing falls through the cracks.',
  },
  {
    id: 2,
    title: 'Generator',
    content: 'Create reports effortlessly with our powerful generator tool, streamlining your workflow.',
  },
];

export const Feature = component$(() => {
  return (
    <Box paddingY="4" width="full" align="center" gap="4">
      <Text variant="title" weight="semibold">
        All the tools your team needs
      </Text>
      <Text weight="light">Easy to organize, plan and deliver tasks of all size</Text>
      <Box gridCols="3" padding="4" gap="2">
        {Features.map((item: FeatureProps) => (
          <Box key={item.id} variant="secondary" padding="2" rounded="lg" gap="2">
            <Text variant="h2" weight="medium">
              {item.title}
            </Text>
            <Box>
              <Text>{item.content}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
});
