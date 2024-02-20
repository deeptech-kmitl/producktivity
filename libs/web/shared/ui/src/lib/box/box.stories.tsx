import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { Box } from './box';
import { BoxAlignments, BoxDirections, BoxGaps, BoxVariants, type BoxProps } from './box.props';

const meta = {
  component: Box,
  title: 'Box',
  argTypes: {
    variant: {
      description: 'Box variant',
      options: BoxVariants,
      control: { type: 'inline-radio' },
    },
    // width: {
    //   description: 'Box width',
    //   options: BoxSizes,
    //   control: { type: 'inline-radio' },
    // },
    // height: {
    //   description: 'Box height',
    //   options: BoxSizes,
    //   control: { type: 'inline-radio' },
    // },
    align: {
      description: 'Box alignment',
      options: BoxAlignments,
      control: { type: 'inline-radio' },
    },
    direction: {
      description: 'Box direction',
      options: BoxDirections,
      control: { type: 'inline-radio' },
    },
    gap: {
      description: 'Box gap',
      options: BoxGaps,
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<BoxProps>;

type Story = StoryObj<BoxProps>;

export default meta;

export const Primary = {
  args: {
    variant: 'surface',
    width: '24',
    height: '24',
    align: 'center',
    direction: 'vertical',
    gap: '0.5',
  },
  render: (props) => (
    <div class="h-dvh">
      <Box {...props}>
        <p>Mercury</p>
        <p>Venus</p>
        <p>Earth</p>
        <p>Mars</p>
        <p>Jupyter</p>
      </Box>
    </div>
  ),
} satisfies Story;
