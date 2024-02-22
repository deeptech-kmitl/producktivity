import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { BorderRadius } from '../props';
import { TextInput } from './input';
import { ContainerVariants, type TextInputProps } from './input.props';

const meta = {
  component: TextInput,
  title: 'TextInput',
  argTypes: {
    variant: {
      description: 'TextInput container variant',
      options: ContainerVariants,
      control: { type: 'inline-radio' },
    },
    rounded: {
      description: 'TextInput container border radius',
      options: BorderRadius,
      control: { type: 'radio' },
    },
    disabled: {
      description: 'TextInput container variant',
      control: 'boolean',
    },
    required: {
      description: 'TextInput container required',
      control: 'boolean',
    },
    label: {
      description: 'TextInput container label',
      control: { type: 'text' },
    },
    placeholder: {
      description: 'TextInput container placeholder',
      control: { type: 'text' },
    },
    name: {
      description: 'TextInput container name',
      control: { type: 'text' },
    },
    type: {
      description: 'TextInput type',
      control: { type: 'radio', options: ['email', 'tel', 'password', 'url', 'date'] },
    },
    error: {
      description: 'TextInput container error',
      control: { type: 'text' },
    },
  },
} satisfies Meta<TextInputProps>;

type Story = StoryObj<TextInputProps>;

export default meta;

export const Primary = {
  args: {
    name: 'name',
    label: 'Name',
    variant: 'primary',
    disabled: false,
    type: 'text',
    placeholder: 'John Doe',
    value: '',
    required: true,
  },
  render: (props) => <TextInput {...props} />,
} satisfies Story;

export const Secondary = {
  args: {
    name: 'middleName',
    label: 'Middle Name',
    variant: 'secondary',
    disabled: false,
    type: 'text',
    placeholder: 'Abigail',
    value: '',
    required: true,
    rounded: 'base',
  },
  render: (props) => <TextInput {...props} />,
} satisfies Story;
