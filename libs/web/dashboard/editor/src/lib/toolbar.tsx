import { component$, useContext, $ } from '@builder.io/qwik';
import { Box, Navigation, Text } from '@producktivity/ui';
import { Frame } from './context';
import { LuPanelTop } from '@qwikest/icons/lucide';
import { User } from './editor';

interface ToolbarProps {
  templateId: string;
  user: User;
}

export default component$(({ templateId, user }: ToolbarProps) => {
  const { frame } = useContext(Frame);

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
    });
  });

  return (
    <Navigation.Bar>
      <Box direction="horizontal" gap="0.5">
        <Text variant="h3" theme="primary">
          <LuPanelTop />
        </Text>
        <Text weight="semibold" theme="primary">
          IT KMITL Innovation Contest
        </Text>
      </Box>
      <Box>
        <Navigation.Action onClick$={saveTemplate}>Save</Navigation.Action>
      </Box>
    </Navigation.Bar>
  );
});
