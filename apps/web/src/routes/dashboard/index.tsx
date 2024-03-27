import { component$, useSignal } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Button, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../configs/seo';
import { LuPlusCircle } from '@qwikest/icons/lucide';
import { DashboardTab } from './components/dashboard-tab';
import { TemplateTab } from './components/template-tab';
import { ProjectTab } from './components/project-tab';

interface DashboardTabsProps {
  id: number;
  label: string;
}

const dashboardTabs: DashboardTabsProps[] = [
  { id: 0, label: 'Dashboard' },
  { id: 1, label: 'Projects' },
  { id: 2, label: 'Template' },
];

export default component$(() => {
  const currentActiveTabId = useSignal(0);

  return (
    <Box height="full-screen" width="full-screen" align="top-left">
      <Box padding="4" width="full" direction="horizontal" align="between-center">
        <Box direction="horizontal" gap="1">
          {dashboardTabs.map((item: DashboardTabsProps) => (
            <Button rounded="full" variant={item.id === currentActiveTabId.value ? 'primary' : 'secondary'} key={item.id} onClick$={() => (currentActiveTabId.value = item.id)}>
              <Text theme={item.id === currentActiveTabId.value ? 'surface' : 'secondary'}>{item.label}</Text>
            </Button>
          ))}
        </Box>
        <Button rounded="full">
          <Box direction="horizontal" align="center" gap="0.5">
            <Text theme="surface">
              <LuPlusCircle />
            </Text>
            <Text theme="surface">Create new project</Text>
          </Box>
        </Button>
      </Box>
      <Box paddingX="4">
        {currentActiveTabId.value === 0 && <DashboardTab />}
        {currentActiveTabId.value === 1 && <ProjectTab />}
        {currentActiveTabId.value === 2 && <TemplateTab />}
      </Box>
    </Box>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Dashboard' });
