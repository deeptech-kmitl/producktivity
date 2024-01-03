import { component$, Slot, type QwikIntrinsicElements } from '@builder.io/qwik';

export const Button = component$<ButtonProps>((props) => {
  const {
    size = 'base',
    variant = 'primary',
    rounded = false,
    disabled = false,
    ...rest
  } = props;

  const Sizes = {
    small: 'px-2 py-1 text-sm',
    base: 'px-4 py-2 text-lg',
    large: 'px-6 py-4 text-xl',
  } satisfies { [K in ButtonSize]: string };

  const Variants = {
    primary: 'bg-primary text-primary-on',
    secondary: 'bg-secondary text-secondary-on',
    tertiary: 'bg-tertiary text-tertiary-on',
    error: 'bg-error text-error-on',
    disabled: 'bg-surface-on/[.12] text-surface-on/[.38] cursor-default',
  } satisfies { [K in ButtonVariant | 'disabled']: string };

  const Shapes = {
    base: 'rounded-md',
    rounded: 'rounded-full',
  } satisfies { [K in ButtonShape]: string };

  return (
    <button
      {...rest}
      class={[
        Sizes[size],
        Variants[disabled ? 'disabled' : variant],
        Shapes[rounded ? 'rounded' : 'base'],
      ]}
    >
      <Slot />
    </button>
  );
});

export const ButtonSizes = [ 'small', 'base', 'large' ] as const;
export type ButtonSizeTuple = typeof ButtonSizes;
export type ButtonSize = ButtonSizeTuple[number];

export const ButtonVariants = ['primary', 'secondary', 'tertiary', 'error'] as const;
export type ButtonVariantTuple = typeof ButtonVariants;
export type ButtonVariant = ButtonVariantTuple[number];

export const ButtonShape = ['base', 'rounded'] as const;
export type ButtonShapeTuple = typeof ButtonShape;
export type ButtonShape = ButtonShapeTuple[number];

type NativeButton = QwikIntrinsicElements['button'];

export interface ButtonProps extends NativeButton {
  size?: ButtonSize;
  variant?: ButtonVariant;
  rounded?: boolean;
  disabled?: boolean;
}
