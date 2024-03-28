import { Component, component$ } from '@builder.io/qwik';
import { createColumnHelper, getCoreRowModel, flexRender, useQwikTable } from '@tanstack/qwik-table';
import { Box, Button, Text } from '@producktivity/ui';
// import { Link } from '@builder.io/qwik-city';
import { TaskProps, TaskMemberProps, TaskStatus } from '../../constant/mock-data';

const columnHelper = createColumnHelper<TaskProps>();

function getTaskDetail(row: string) {
  return (
    // <Link style={{ textDecoration: 'underline' }} href={`/dashboard/project/${row.split(' ').join('-').toLowerCase()}`}>
    //   {row}
    // </Link>
    <Text>{row}</Text>
  );
}

function getTaskMember(row: TaskMemberProps[]) {
  return <p>{row.length}</p>;
}

function getTaskStatus(row: TaskStatus) {
  return (
    <Button rounded="md" variant={row === 'success' ? 'badge-success' : row === 'failed' ? 'badge-error' : 'badge-info'}>
      {row}
    </Button>
  );
}

const columns = [
  columnHelper.accessor('title', {
    header: () => 'Project',
    cell: (info) => getTaskDetail(info.getValue()),
  }),
  columnHelper.accessor('member', {
    header: () => 'Member',
    cell: (info) => getTaskMember(info.getValue()),
    sortingFn: 'alphanumeric',
  }),
  columnHelper.accessor('status', {
    header: () => 'Status',
    cell: (info) => getTaskStatus(info.getValue()),
  }),
  columnHelper.accessor('createdWhen', {
    header: () => 'Task Created',
    cell: (info) => info.getValue().toLocaleString(),
    sortingFn: 'datetime',
  }),
  columnHelper.accessor('finishedWhen', {
    header: () => 'Task Finished',
    cell: (info) => (info.getValue() ? info.getValue()?.toLocaleString() : 'not finished'),
    sortingFn: 'datetime',
  }),
];

interface DashboardTableProps {
  data: TaskProps[];
}

export const DashboardTable: Component<DashboardTableProps> = component$(({ data }: DashboardTableProps) => {
  const table = useQwikTable({
    columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    enableSorting: true,
  });

  return (
    <Box width="full" paddingTop="2" paddingLeft="3">
      <table class="w-full table-fixed text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} scope="col">
                  <Box align="between-start">{flexRender(header.column.columnDef.header, header.getContext())}</Box>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} class="py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
});
