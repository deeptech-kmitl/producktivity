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

export const MockDashboardTasks: TaskProps[] = [
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
    id: 1,
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

export interface ProjectProps {
  id: number;
  title: string;
  latestUpdate: Date;
}
