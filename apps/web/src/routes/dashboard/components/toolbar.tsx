import { component$, useContext, $ } from '@builder.io/qwik';
import { Box, Navigation } from '@producktivity/ui';
import { Frame } from './context';
import { useUser } from '../../layout';

export default component$(() => {
  const { frame } = useContext(Frame);
  const name = 'B';
  const userSignal = useUser();

  const saveTemplate = $(async () => {
    if (!frame) return;

    await fetch(`${import.meta.env.VITE_API_URL}/templates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        userId: userSignal.value,
        data: {},
      }),
    });
  });

  return (
    <Navigation.Bar>
      <Box></Box>
      <Box>
        <Navigation.Action onClick$={saveTemplate}>Save</Navigation.Action>
      </Box>
    </Navigation.Bar>
  );
});
