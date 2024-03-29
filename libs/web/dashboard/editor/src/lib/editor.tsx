import { NoSerialize, component$, noSerialize, useContextProvider, useSignal, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { Box } from '@producktivity/ui';
import { Canvas } from 'fabric';
import Sidebar from './sidebar';
import Toolbar from './toolbar';
import { Frame } from './context';

export default component$((props: Props) => {
  const editorRef = useSignal<HTMLCanvasElement>();
  const containerRef = useSignal<HTMLDivElement>();
  const frameStore = useStore<{ frame: NoSerialize<Canvas> }>({ frame: undefined });

  useContextProvider(Frame, frameStore);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async ({ cleanup }) => {
    if (!editorRef.value || !containerRef.value) return;

    const frame = new Canvas(editorRef.value, {
      width: containerRef.value.clientWidth,
      height: containerRef.value.clientHeight,
    });

    if (props.initialTemplate) {
      console.log(props.initialTemplate);
      await frame.loadFromJSON(JSON.stringify(props.initialTemplate), () => {
        frame.renderAll();
      });

      console.log(frame.toObject());
    }

    frameStore.frame = noSerialize(frame);
    frame.renderAll();

    cleanup(() => frame.dispose());
  });

  return (
    <Box width="full" height="full" direction="vertical">
      {!props.withoutToolbar && <Toolbar />}
      <Box width="full" height="full" direction="horizontal">
        {!props.withoutSidebar && <Sidebar />}
        <Box width="full" height="full" align="center">
          <Box ref={containerRef} style={{ height: 420, width: 595 }} variant="primary">
            <canvas id="editor" ref={editorRef} style={{ width: '100%', height: '100%' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

interface Props {
  id: string;
  withoutSidebar?: boolean;
  withoutToolbar?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialTemplate?: Record<string, any>;
}
