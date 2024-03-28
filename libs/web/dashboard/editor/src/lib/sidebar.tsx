import { component$, useContext, $ } from '@builder.io/qwik';
import { Box, Button } from '@producktivity/ui';
import { Frame } from './context';
import { Textbox, Rect, Circle, FabricImage } from 'fabric';

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

  const addImage = $(async (e: Event) => {
    const target = e.currentTarget as HTMLInputElement;
    const file = target?.files?.[0];

    if (!file) return;

    const fileType = file.type;
    if (!(fileType === 'image/png' || fileType === 'image/svg+xml')) return;

    const url = URL.createObjectURL(file);
    const imageObject = await FabricImage.fromURL(url);
    imageObject.scaleToWidth(180);
    imageObject.scaleToHeight(180);
    frame.add(imageObject);
    frame.renderAll();
  });

  const addImageHandler = $(() => {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = 'image/*';
    inputElement.addEventListener('change', async (e) => await addImage(e));
    inputElement.click();
  });

  return (
    <Box width="half" height="full" variant="surface" direction="horizontal">
      <Box width="full" height="full" align="top" direction="vertical" gap="1">
        <Button onClick$={addText}>Add Text</Button>
        <Button onClick$={addSquare}>Add Square</Button>
        <Button onClick$={addCircle}>Add Circle</Button>
        <Button onClick$={addImageHandler}>Add Image</Button>
      </Box>
    </Box>
  );
});
