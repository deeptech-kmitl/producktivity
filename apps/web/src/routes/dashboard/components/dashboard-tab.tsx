import { component$ } from '@builder.io/qwik';
import { Box, Text } from '@producktivity/ui';
import { Credit } from './credit';
import { DashboardTable } from './dashboard-table';
import { MockDashboardTasks } from '../constant/mock-data';

export const DashboardTab = component$(() => {
  return (
    <Box height="full-screen" paddingX="4" direction="horizontal" width="full" align="top">
      <Box paddingX="4" paddingY="2" width="3/4" variant="surface" rounded="md">
        <Box direction="horizontal" width="full" align="between-center">
          <Box>
            <Text variant="title" weight="bold">
              Last Tasks
            </Text>
            <Text theme="secondary">{MockDashboardTasks ? MockDashboardTasks.length : 0} Total</Text>
          </Box>
          <Box direction="horizontal" gap="1">
            <Box align="center">
              <Text variant="title" weight="medium" theme="primary">
                {MockDashboardTasks.filter((task) => task.status === 'success').length}
              </Text>
              <Text theme="primary">Done</Text>
            </Box>
            <Box align="center">
              <Text variant="title" weight="medium" theme="secondary">
                {MockDashboardTasks.filter((task) => task.status === 'in progress').length}
              </Text>
              <Text theme="secondary">In Progress</Text>
            </Box>
            <Box align="center">
              <Text variant="title" weight="medium" theme="error">
                {MockDashboardTasks.filter((task) => task.status === 'failed').length}
              </Text>
              <Text theme="error">Failed</Text>
            </Box>
          </Box>
        </Box>
        <DashboardTable data={MockDashboardTasks} />
      </Box>
      <Box paddingX="4" width="quarter">
        <Credit />
      </Box>
    </Box>
  );
});
