import { component$ } from '@builder.io/qwik';
import { createColumnHelper, getCoreRowModel, flexRender, useQwikTable } from '@tanstack/qwik-table';
import { TaskMemberProps, TaskProps, TaskStatus } from './dashboard-tab';
import { Box, Button } from '@producktivity/ui';
import { LuArrowDownAZ, LuArrowUpAZ } from '@qwikest/icons/lucide';
import { Link } from '@builder.io/qwik-city';

const columnHelper = createColumnHelper<TaskProps>();

function getTaskDetail(row: string) {
  return (
    <Link style={{ color: '#3040c9', textDecoration: 'underline' }} href={`/dashboard/project/${row.split(' ').join('-').toLowerCase()}`}>
      {row}
    </Link>
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

export const DashboardTable = component$(({ data }: DashboardTableProps) => {
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
                  <Box align="between-start">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: <LuArrowUpAZ />,
                      desc: <LuArrowDownAZ />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </Box>
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
