import { Box } from '@producktivity/ui';
import { DashboardTab } from '../components/dashboard/dashboard-tab';
import { ProjectTab } from '../components/project/project-tab';
import { TemplateTab } from '../components/template-tab';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { ProjectFormProps } from '../components/project/create-project-modal';
import { type InitialValues } from '@modular-forms/qwik';

export const useFormLoader = routeLoader$<InitialValues<ProjectFormProps>>(() => ({
  projectName: '',
  templateId: '',
}));

export default component$(() => {
  const loc = useLocation();

  return (
    <Box marginY="2" width="full" height="full">
      {loc.params.slug === 'overview' && <DashboardTab />}
      {loc.params.slug === 'projects' && <ProjectTab />}
      {loc.params.slug === 'templates' && <TemplateTab />}
    </Box>
  );
});
