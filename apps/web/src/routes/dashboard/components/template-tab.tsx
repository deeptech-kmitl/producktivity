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
    <Box width="full" height="full">
      <Box paddingX="4" paddingY="1">
        <Text variant="title" weight="bold">
          Recent Templates
        </Text>
        <Box width="full" paddingY="2" gridCols="3" gap="2">
          {MockTemplate.map((template) => (
            <Button variant="surface" rounded="md" key={template.id} href={`/dashboard/template/${template.id}`}>
              <Box gap="0.5">
                <img src={template.img} alt={template.title}></img>
                <Text paddingY="0.5" variant="h3" weight="semibold">
                  {template.title}
                </Text>

                <Text variant="small" theme="secondary">
                  Last Edit {new Date(template.lastEdit).toLocaleDateString('en-GB')}
                </Text>
              </Box>
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
});
