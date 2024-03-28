import { component$ } from '@builder.io/qwik';
import { Box, Text } from '@producktivity/ui';
import { Credit } from './credit';
import { DashboardTable } from './dashboard-table';

export interface TaskMemberProps {
  name: string;
}

export type TaskStatus = 'in progress' | 'failed' | 'success';

export interface TaskProps {
  id: number;
  title: string;
  status: TaskStatus;
  member: TaskMemberProps[];
  createdWhen: Date;
  finishedWhen?: Date;
}

const MockDashboardTasks: TaskProps[] = [
  {
    id: 0,
    title: 'KMITL Volunteering',
    status: 'failed',
    createdWhen: new Date('02-11-2024'),
    member: [
      {
        name: 'Boonpongkrong Narongrich',
      },
    ],
    finishedWhen: new Date('02-11-2024'),
  },
  {
    id: 0,
    title: 'KMITL Adhoc Staff',
    status: 'failed',
    createdWhen: new Date('02-17-2024'),
    member: [
      {
        name: 'Sainan Anannarongdech',
      },
    ],
    finishedWhen: new Date('11-02-2024'),
  },
  {
    id: 2,
    title: 'IT Open house participants',
    status: 'success',
    createdWhen: new Date('03-21-2024'),
    member: [
      {
        name: 'Rafah Pipatpong',
      },
      {
        name: 'Sainan Anannarongdech',
      },
      {
        name: 'Boonpradab Narongrich',
      },
    ],
    finishedWhen: new Date('03-21-2024'),
  },
  {
    id: 3,
    title: 'Tobe IT Bootcamp',
    status: 'in progress',
    createdWhen: new Date(),
    member: [
      {
        name: 'Thitipat Pipatpong',
      },
      {
        name: 'Boonnarong Kiatnakin',
      },
    ],
  },
  {
    id: 4,
    title: 'Tobe IT Staff',
    status: 'in progress',
    createdWhen: new Date(),
    member: [
      {
        name: 'Boonnarong Kiatnakin',
      },
    ],
  },
];

export const DashboardTab = component$(() => {
  return (
    <Box paddingX="4" direction="horizontal" width="full" align="top">
      <Box paddingX="4" paddingY="2" width="3/4" variant="surface">
        <Box direction="horizontal" width="full" align="between-center">
          <Box>
            <Text variant="title" weight="bold">
              Last Tasks
            </Text>
            <Text theme="secondary">{MockDashboardTasks ? MockDashboardTasks.length : 0} Total</Text>
          </Box>
          <Box direction="horizontal" gap="1">
            <Box align="center">
              <Text variant="title" weight="medium">
                {MockDashboardTasks.filter((task) => task.status === 'success').length}
              </Text>
              <Text theme="secondary">Done</Text>
            </Box>
            <Box align="center">
              <Text variant="title" weight="medium">
                {MockDashboardTasks.filter((task) => task.status === 'in progress').length}
              </Text>
              <Text theme="secondary">In Progress</Text>
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
