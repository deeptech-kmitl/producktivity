import { component$, useContext, $ } from '@builder.io/qwik';
import { Box, Button } from '@producktivity/ui';
import { Frame } from './context';
import { Textbox, Rect, Circle, FabricImage } from 'fabric';
import { LuBaseline, LuCircle, LuImage, LuSquare } from '@qwikest/icons/lucide';

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
    <Box paddingX="1" height="full" variant="surface" direction="horizontal">
      <Box width="full" height="full" align="top" direction="vertical" gap="1">
        <Button rounded="md" onClick$={addText} variant="surface">
          <LuBaseline />
        </Button>
        <Button variant="surface" onClick$={addSquare}>
          <LuSquare />
        </Button>
        <Button variant="surface" onClick$={addCircle}>
          <LuCircle />
        </Button>
        <Button variant="surface" onClick$={addImageHandler}>
          <LuImage />
        </Button>
      </Box>
    </Box>
  );
});
