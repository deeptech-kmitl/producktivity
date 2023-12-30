import { component$, Slot, type QwikIntrinsicElements } from "@builder.io/qwik";

export const Button = component$<ButtonProps>((props) => {
  const {
    size = "base",
    variant = "primary",
    shape = "base",
    disabled = false,
    ...rest
  } = props;

  const Sizes = {
    small: "px-2 py-1 text-sm",
    base: "px-4 py-2 text-lg",
    large: "px-6 py-4 text-xl",
  } satisfies { [K in ButtonSize]: string };

  const Variants = {
    primary: "bg-primary text-primary-on",
    secondary: "bg-secondary text-secondary-on",
    tertiary: "bg-tertiary text-tertiary-on",
    error: "bg-error text-error-on",
    disabled: "bg-surface-on/[.12] text-surface-on/[.38] cursor-default",
  } satisfies { [K in ButtonVariant | "disabled"]: string };

  const Shapes = {
    base: "rounded-lg",
    rounded: "rounded-full",
  } satisfies { [K in ButtonShape]: string };

  return (
    <button
      {...rest}
      class={[
        Sizes[size],
        Variants[disabled ? "disabled" : variant],
        Shapes[shape],
      ]}
    >
      <Slot />
    </button>
  );
});

export type ButtonSize = "small" | "base" | "large";
export type ButtonVariant = "primary" | "secondary" | "tertiary" | "error";
export type ButtonShape = "base" | "rounded";

type NativeButton = QwikIntrinsicElements["button"];

interface ButtonProps extends NativeButton {
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  disabled?: boolean;
}
