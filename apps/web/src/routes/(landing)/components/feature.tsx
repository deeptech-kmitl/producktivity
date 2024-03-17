import { JSXOutput, component$ } from '@builder.io/qwik';
import { Box, Text } from '@producktivity/ui';
import { LuListTodo, LuTable2, LuWorkflow } from '@qwikest/icons/lucide';

interface FeatureProps {
  id: number;
  title: string;
  content: string;
  icon: JSXOutput;
}

const Features: FeatureProps[] = [
  {
    id: 0,
    title: 'Table View',
    content: 'Plan and organize projects, able to follow up with status and view data in a table',
    icon: <LuTable2 />,
  },
  {
    id: 1,
    title: 'Task',
    content: 'Efficiently manage tasks with our intuitive task management system, ensuring nothing falls through the cracks.',
    icon: <LuListTodo />,
  },
  {
    id: 2,
    title: 'Generator',
    content: 'Create reports effortlessly with our powerful generator tool, streamlining your workflow.',
    icon: <LuWorkflow />,
  },
];

export const Feature = component$(() => {
  return (
    <Box paddingY="4" width="full" align="center" gap="4">
      <Text variant="title" weight="semibold">
        All the tools your team needs
      </Text>
      <Text weight="light">Easy to organize, plan and deliver tasks of all size</Text>
      <Box gridCols="3" paddingY="4" paddingX="10" gap="2">
        {Features.map((item: FeatureProps) => (
          <Box key={item.id} variant="surface" padding="2" rounded="lg" gap="2" direction="vertical" align="top-left">
            <Box direction="horizontal" gap="1">
              <Box variant="primary" padding="1" shadow="sm" rounded="full">
                <Text variant="h3">{item.icon}</Text>
              </Box>
              <Text variant="h2" weight="medium">
                {item.title}
              </Text>
            </Box>
            <Box>
              <Text>{item.content}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
});
