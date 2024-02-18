import { component$, useContext, $ } from '@builder.io/qwik';
import { Box, Button } from '@producktivity/ui';
import { Frame } from './context';
import { Textbox, Rect } from 'fabric';

export default component$(() => {
  const { frame } = useContext(Frame);

  if (!frame) return;

  const addText = $(() => {
    const text = new Textbox('Hello', {
      top: frame.height / 2,
      left: frame.width / 2,
      originY: 'center',
      originX: 'center',
      borderScaleFactor: 2,
      cornerColor: 'white',
      transparentCorners: false,
    });

    frame.add(text);
  });

  const addSquare = $(() => {
    const square = new Rect({
      width: 100,
      height: 100,
      top: frame.height / 2,
      left: frame.width / 2,
      originY: 'center',
      originX: 'center',
      borderScaleFactor: 2,
      cornerColor: 'white',
      transparentCorners: false,
    });

    frame.add(square);
  });

  return (
    <Box width="half" height="full" variant="surface" direction="horizontal">
      <Box width="full" height="full" align="top" direction="vertical">
        <Button onClick$={addText}>Add Text</Button>
        <Button onClick$={addSquare}>Add Square</Button>
      </Box>
    </Box>
  );
});
