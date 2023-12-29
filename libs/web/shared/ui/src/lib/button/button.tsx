import { component$, Slot, type ButtonHTMLAttributes } from "@builder.io/qwik";
import { clsx } from "clsx";

export const Button = component$(
  ({
    size = "base",
    variant = "primary",
    shape = "base",
    ...props
  }: ButtonProps) => {
    return (
      <button
        class={clsx(Sizes[size], Variants[variant], Shapes[shape])}
        {...props}
      >
        <Slot />
      </button>
    );
  }
);

export const Sizes = {
  small: "px-2 py-1 text-sm",
  base: "px-4 py-2 text-lg",
  large: "px-6 py-4 text-xl",
};

export const Variants = {
  primary: "bg-primary text-primary-on",
  secondary: "bg-secondary text-secondary-on",
  tertiary: "bg-tertiary text-tertiary-on",
  error: "bg-error text-error-on",
  disabled: "bg-surface-on/[.12] text-surface-on/[.38] cursor-default",
};

export const Shapes = {
  base: "rounded-lg",
  rounded: "rounded-full",
};

export type ButtonSize = keyof typeof Sizes;
export type ButtonVariant = Exclude<keyof typeof Variants, "disabled">;
export type ButtonShape = keyof typeof Shapes;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
}
