import { component$ } from '@builder.io/qwik';
import { createColumnHelper, getCoreRowModel, flexRender, useQwikTable } from '@tanstack/qwik-table';
import { TaskMemberProps, TaskProps, TaskStatus } from './dashboard-tab';
import { Box, Button } from '@producktivity/ui';

const columnHelper = createColumnHelper<TaskProps>();

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
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('member', {
    header: () => 'Member',
    cell: (info) => getTaskMember(info.getValue()),
  }),
  columnHelper.accessor('status', {
    header: () => 'Status',
    cell: (info) => getTaskStatus(info.getValue()),
  }),
  columnHelper.accessor('createdWhen', {
    header: () => 'Task Created',
    cell: (info) => info.getValue().toISOString().split('T')[0],
  }),
  columnHelper.accessor('finishedWhen', {
    header: () => 'Task Finished',
    cell: (info) => (info !== null ? 'finished' : ''),
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
    <Box width="full" padding="2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          <Box width="full" paddingY="1">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    <Box width="full" align="between-center" paddingY="1">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Box>
                  </td>
                ))}
              </tr>
            ))}
          </Box>
        </tbody>
      </table>
    </Box>
  );
});
