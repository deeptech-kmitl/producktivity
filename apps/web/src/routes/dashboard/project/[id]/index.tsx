import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Box, Button, Text } from '@producktivity/ui';
import { LuPenLine } from '@qwikest/icons/lucide';
import { DashboardTable } from '../../components/dashboard/dashboard-table';
import { MockDashboardTasks } from '../../constant/mock-data';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import { useUser } from '../../../layout';
import { EditProjectModal } from '../../components/project/edit-project-modal';
import { InitialValues } from '@modular-forms/qwik';

interface dataProjectProps {
  data: Project[];
}

interface EditProjectProps {
  projectName: string;
}

export const useEditProjectFormLoader = routeLoader$<InitialValues<EditProjectProps>>(() => ({
  projectName: '',
}));

export default component$(() => {
  const loc = useLocation();
  const showSig = useSignal(false);
  const currentProject = useSignal<Project>();
  const userSignal = useUser();
  const projectList = useSignal<dataProjectProps>({ data: [] });

  useTask$(async () => {
    const temp = await fetch(`${import.meta.env.VITE_API_URL}/projects?userId=${userSignal.value.id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    projectList.value = await temp.json();
  });

  const findCurrentProject = () => {
    const tempArr = projectList.value.data.filter((v) => {
      return v.id === loc.params.id;
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
            {currentProject.value?.name}
          </Text>
          <Button onClick$={() => (showSig.value = true)} variant="surface">
            <LuPenLine />
          </Button>
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
      <EditProjectModal currentName={currentProject.value?.name} currentId={currentProject.value?.id} showModal={showSig} />
    </Box>
  );
});
