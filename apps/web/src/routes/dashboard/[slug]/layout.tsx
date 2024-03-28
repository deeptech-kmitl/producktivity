import { component$, useStore, $, Slot } from '@builder.io/qwik';
import { DocumentHead, useNavigate } from '@builder.io/qwik-city';
import { Box, Button, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../../configs/seo';
import { LuArrowUpCircle, LuPlusCircle } from '@qwikest/icons/lucide';
import { PlanBadge } from '../components/plan-badge';
import { useLocation } from '@builder.io/qwik-city';

interface DashboardTabsProps {
  id: number;
  label: string;
  path: string;
}

const dashboardTabs: DashboardTabsProps[] = [
  { id: 0, label: 'Dashboard', path: 'overview' },
  { id: 1, label: 'Projects', path: 'projects' },
  { id: 2, label: 'Templates', path: 'templates' },
];

export default component$(() => {
  const loc = useLocation();
  const currentActivePath = useStore({ path: '/' });
  const nav = useNavigate();

  const handleSwitchTab = $(async (tab: string) => {
    currentActivePath.path = tab;
    await nav(`/dashboard/${tab}`);
  });

  return (
    <Box height="full-screen" width="full-screen" align="top-left">
      <Box paddingY="2" paddingX="4" width="full" direction="horizontal" align="between-center">
        <Box direction="horizontal" gap="1">
          {dashboardTabs.map((item: DashboardTabsProps) => (
            <Button rounded="full" variant={loc.params.slug === item.path ? 'primary' : 'secondary'} key={item.id} onClick$={() => handleSwitchTab(item.path)}>
              <Text theme={loc.params.slug === item.path ? 'surface' : 'secondary'}>{item.label}</Text>
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
      <Box direction="horizontal" gap="0.5" paddingX="4">
        <Text>Current Plan</Text>
        <PlanBadge planType="Professional" />
        <Button rounded="full" href="/pricing">
          <Box direction="horizontal" align="center" gap="0.5">
            <Text theme="surface">
              <LuArrowUpCircle />
            </Text>
            <Text theme="surface" variant="small">
              Upgrade
            </Text>
          </Box>
        </Button>
      </Box>
      <Slot />
    </Box>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Dashboard' });
