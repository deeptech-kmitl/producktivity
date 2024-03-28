import { Box } from '@producktivity/ui';
import { DashboardTab } from '../components/dashboard-tab';
import { ProjectTab } from '../components/project-tab';
import { TemplateTab } from '../components/template-tab';
import { useLocation } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const loc = useLocation();

  return (
    <Box marginY="2" width="full">
      {loc.params.slug === 'overview' && <DashboardTab />}
      {loc.params.slug === 'projects' && <ProjectTab />}
      {loc.params.slug === 'templates' && <TemplateTab />}
    </Box>
  );
});
