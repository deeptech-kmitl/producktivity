import { component$ } from '@builder.io/qwik';
import { Box } from '@producktivity/ui';

export default component$(() => {
  return (
    <Box width="half" height="full" variant="surface" direction="horizontal">
      <Box width="full" height="full" align="top" direction="vertical">
        {/* <Text>Hello {props.id}</Text> */}
      </Box>
    </Box>
  );
});
