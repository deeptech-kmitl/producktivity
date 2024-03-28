import { component$, useContext, $ } from '@builder.io/qwik';
import { Box, Button } from '@producktivity/ui';
import { Frame } from './context';
import { Textbox, Rect, Circle } from 'fabric';

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

  const addCircle = $(() => {
    const circle = new Circle({
      width: 100,
      height: 100,
      top: frame.height / 2,
      left: frame.width / 2,
      originY: 'center',
      originX: 'center',
      borderScaleFactor: 2,
      radius: 75,
    });

    frame.add(circle);
  });

  // TODO: image import
  const addImage = $(() => {
    // const fileType = e.target.files[0].type;
    // const url = URL.createObjectURL(e.target.files[0]);

    // if (fileType === 'image/png') { //check if png
    //   fabric.Image.fromURL(url, function(img) {
    //     img.set({
    //       width: 180,
    //       height: 180
    //     });
    //     canvas.add(img);
    //   });
    // } else if (fileType === 'image/svg+xml') { //check if svg
    //   fabric.loadSVGFromURL(url, function(objects, options) {
    //     var svg = fabric.util.groupSVGElements(objects, options);
    //     svg.scaleToWidth(180);
    //     svg.scaleToHeight(180);
    //     canvas.add(svg);
    //   });
    // }
  });

  return (
    <Box width="half" height="full" variant="surface" direction="horizontal">
      <Box width="full" height="full" align="top" direction="vertical" gap="1">
        <Button onClick$={addText}>Add Text</Button>
        <Button onClick$={addSquare}>Add Square</Button>
        <Button onClick$={addCircle}>Add Circle</Button>
        <Button onClick$={addImage}>Add Image</Button>
      </Box>
    </Box>
  );
});
