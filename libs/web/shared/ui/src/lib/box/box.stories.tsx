import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { Box } from './box';
import { BoxVariants, type BoxProps, BoxSizes } from './box.props';

const meta = {
  component: Box,
  title: 'Box',
  argTypes: {
    variant: {
      description: 'Box variant',
      options: BoxVariants,
      control: { type: 'inline-radio' },
    },
    width: {
      description: 'Box width',
      options: BoxSizes,
      control: { type: 'inline-radio' },
    },
    height: {
      description: 'Box height',
      options: BoxSizes,
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<BoxProps>;

type Story = StoryObj<BoxProps>;

export default meta;

export const Primary = {
  args: {
    variant: 'secondary',
    width: '10',
    height: '10',
  },
  render: (props) => (
    <div class="h-dvh">
      <Box {...props} />
    </div>
  ),
} satisfies Story;
