import { component$, useContext, $ } from '@builder.io/qwik';
import { Box, Navigation } from '@producktivity/ui';
import { Frame } from './context';

export default component$(() => {
  const { frame } = useContext(Frame);

  const exportObject = $(() => {
    if (!frame) return;

    console.log(frame.toObject());
  });

  return (
    <Navigation.Bar>
      <Box></Box>
      <Box>
        <Navigation.Action onClick$={exportObject}>Export</Navigation.Action>
      </Box>
    </Navigation.Bar>
  );
});
