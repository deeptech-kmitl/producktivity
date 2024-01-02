import type { Meta, StoryObj } from "storybook-framework-qwik";
import {
  Button,
  ButtonSizes,
  type ButtonProps,
  ButtonVariants,
} from "./button";

const meta = {
  component: Button,
  title: "Button",
  argTypes: {
    disabled: {
      description: "Button disabled",
      control: { type: "boolean" },
    },
    size: {
      description: "Button size",
      options: ButtonSizes,
      control: { type: "inline-radio" },
    },
    variant: {
      description: "Button variant",
      options: ButtonVariants,
      control: { type: "inline-radio" },
    },
    rounded: {
      description: "Button rounded",
      control: { type: "boolean" },
    }
  },
} satisfies Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export default meta;

export const Primary = {
  args: {
    disabled: false,
    size: "base",
    variant: "primary",
    rounded: false,
  },
  render: (props) => <Button {...props}>Getting Started</Button>,
} satisfies Story;
