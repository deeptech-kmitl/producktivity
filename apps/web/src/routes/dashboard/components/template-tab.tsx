import { component$ } from '@builder.io/qwik';
import { Box, Text, Button } from '@producktivity/ui';

export interface TemplateProps {
  id: number;
  title: string;
  lastEdit: Date;
  img: string;
}
const MockTemplate: TemplateProps[] = [
  {
    id: 0,
    title: 'Green Certificate',
    lastEdit: new Date('02-11-2024'),
    img: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9970/live/9e4ab180-fd11-11ed-b2aa-9935735a579c.png',
  },
  {
    id: 1,
    title: 'Royal Blue Certificate',
    lastEdit: new Date('03-11-2024'),
    img: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9970/live/9e4ab180-fd11-11ed-b2aa-9935735a579c.png',
  },
  {
    id: 2,
    title: 'Navy Blue and Gold Certificate',
    lastEdit: new Date('04-11-2024'),
    img: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9970/live/9e4ab180-fd11-11ed-b2aa-9935735a579c.png',
  },
  {
    id: 3,
    title: 'Navy Blue and Gold Certificate',
    lastEdit: new Date('04-11-2024'),
    img: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9970/live/9e4ab180-fd11-11ed-b2aa-9935735a579c.png',
  },
];

export const TemplateTab = component$(() => {
  return (
    <Box height="full" paddingX="4" gap="4" width="full" align="top-left">
      <Text variant="title" weight="bold">
        Recent Templates
      </Text>
      <Box gridCols="3" gap="2">
        {MockTemplate.map((template) => (
          <Button variant="surface" rounded="md" key={template.id} href={`/dashboard/template/${template.id}`}>
            <Box gap="0.5">
              <Box padding="3" variant="surface" rounded="md">
                <img src={template.img} width="500" height="500" alt={template.title}></img>
              </Box>
              <Text paddingY="0.5" variant="h3" weight="semibold">
                {template.title}
              </Text>

              <Text variant="small" theme="secondary">
                Last Edit {template.lastEdit.toLocaleDateString()}
              </Text>
            </Box>
          </Button>
        ))}
      </Box>
    </Box>
  );
});
