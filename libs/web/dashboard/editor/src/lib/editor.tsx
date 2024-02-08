import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Box } from '@producktivity/ui';
import { Canvas, Rect } from 'fabric';
import Sidebar from './sidebar';

export default component$((props: Props) => {
  const editorRef = useSignal<HTMLCanvasElement>();
  const containerRef = useSignal<HTMLDivElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    if (!editorRef.value || !containerRef.value) return;

    const frame = new Canvas(editorRef.value, {
      width: containerRef.value.clientWidth,
      height: containerRef.value.clientHeight,
    });

    const rect = new Rect({
      width: 100,
      height: 100,
      backgroundColor: 'green',
    });

    frame.add(rect);

    frame.renderAll();

    cleanup(() => frame.dispose());
  });

  return (
    <Box width="full" height="full" direction="horizontal">
      <Sidebar />
      <Box width="full" height="full" align="center">
        <Box ref={containerRef} style={{ height: 420, width: 595 }} variant="primary">
          <canvas id="editor" ref={editorRef} style={{ width: '100%', height: '100%' }} />
        </Box>
      </Box>
    </Box>
  );
});

interface Props {
  id: string;
}
