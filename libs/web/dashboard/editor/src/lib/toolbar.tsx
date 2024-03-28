import { component$, useContext, $ } from '@builder.io/qwik';
import { Box, Navigation, Text } from '@producktivity/ui';
import { Frame } from './context';
import { LuPanelTop } from '@qwikest/icons/lucide';

export default component$(() => {
  const { frame } = useContext(Frame);

  const saveTemplate = $(() => {
    if (!frame) return;

    console.log(frame.toObject());
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
