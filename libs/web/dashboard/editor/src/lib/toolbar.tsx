import { component$, useContext, $ } from '@builder.io/qwik';
import { Box, Navigation, Text } from '@producktivity/ui';
import { Frame } from './context';
import { LuPanelTop } from '@qwikest/icons/lucide';
import { User } from './editor';
import { useNavigate } from '@builder.io/qwik-city';

interface ToolbarProps {
  templateId: string;
  user: User;
  templateName: string;
}

export default component$(({ templateId, templateName, user }: ToolbarProps) => {
  const { frame } = useContext(Frame);
  const nav = useNavigate();

  const saveTemplate = $(async () => {
    if (!frame) return;

    await fetch(`${import.meta.env.VITE_API_URL}/templates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `new-${new Date().toLocaleDateString()}-${user.username}}`,
        userId: user.id,
        data: frame.toObject(),
      }),
    }).then(() => {
      nav('/dashboard/templates');
    });
  });

  return (
    <Navigation.Bar>
      <Box direction="horizontal" gap="0.5">
        <Text variant="h3" theme="primary">
          <LuPanelTop />
        </Text>
        <Text weight="semibold" theme="primary">
          {templateName}
        </Text>
      </Box>
      <Box>
        <Navigation.Action onClick$={saveTemplate}>Save</Navigation.Action>
      </Box>
    </Navigation.Bar>
  );
});
