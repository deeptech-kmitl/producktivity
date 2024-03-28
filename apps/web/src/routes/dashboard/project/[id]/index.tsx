import { component$, useSignal } from '@builder.io/qwik';
import { Box, Button, Text } from '@producktivity/ui';
import { LuPenLine } from '@qwikest/icons/lucide';
import { DashboardTable } from '../../components/dashboard-table';
import { MockDashboardTasks, TaskProps } from '../../constant/mock-data';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();
  const currentProject = useSignal<TaskProps>();

  const findCurrentProject = () => {
    const tempArr = MockDashboardTasks.filter((v) => {
      return v.id === parseInt(loc.params.id);
    });
    currentProject.value = tempArr[0];
  };

  findCurrentProject();

  return (
    <Box padding="4" align="top-left" width="full" gap="2">
      <Button href="/dashboard/projects" rounded="full" variant="secondary">
        <Text theme="secondary">Back</Text>
      </Button>
      <Box width="full" align="center" gap="2">
        <Box direction="horizontal" gap="1" align="left" width="full">
          <Text variant="title" weight="bold">
            {currentProject.value?.title}
          </Text>
          <Text variant="h1" theme="secondary">
            <LuPenLine />
          </Text>
        </Box>
        <Box padding="3" variant="surface" rounded="md">
          <img src="https://i0.wp.com/vat.or.th/wp-content/uploads/2021/03/placeholder.png?ssl=1" />
        </Box>
      </Box>
      <Box width="full" gap="2">
        <Text variant="title" weight="bold">
          History
        </Text>
        <Box width="full" paddingX="4" paddingY="2" variant="surface" rounded="md">
          <DashboardTable data={MockDashboardTasks} />
        </Box>
        <Box width="full" align="right">
          <Button rounded="md">Generate New</Button>
        </Box>
      </Box>
    </Box>
  );
});
