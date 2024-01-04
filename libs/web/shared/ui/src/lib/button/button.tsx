import { component$, Slot } from '@builder.io/qwik';
import type { ButtonProps, ButtonShape, ButtonSize, ButtonVariant } from './button.props';

export const Button = component$<ButtonProps>((props) => {
  const { size = 'base', variant = 'primary', rounded = false, disabled = false, ...rest } = props;

  const currentVariant = disabled ? 'disabled' : variant;
  const cursor = disabled ? 'cursor-default' : 'cursor-pointer';
  const shape = rounded ? 'rounded' : 'base';

  const Sizes = {
    small: 'px-2 py-1 text-sm',
    base: 'px-4 py-2 text-lg',
    large: 'px-6 py-4 text-xl',
  } satisfies { [K in ButtonSize]: string };

  const ContainerVariants = {
    primary: 'bg-primary',
    secondary: 'ring-1 ring-outline',
    tertiary: 'bg-tertiary',
    error: 'bg-error',
    disabled: 'bg-surface-on/[.12]',
  } satisfies { [K in ButtonVariant | 'disabled']: string };

  const LabelVariants = {
    primary: 'text-primary-on',
    secondary: 'text-primary',
    tertiary: 'text-tertiary-on',
    error: 'text-error-on',
    disabled: 'text-surface-on/[.38]',
  } satisfies { [K in ButtonVariant | 'disabled']: string };

  const StateLayerVariants = {
    primary: 'group-hover/button:bg-surface-variant-on/[.08] group-active/button:bg-surface-variant-on/[.10] group-focus/button:bg-surface-variant-on/[.10]',
    secondary: 'group-hover/button:bg-primary/[.08] group-active/button:bg-primary/[.10] group-focus/button:bg-primary/[.10]',
    tertiary: 'bg-tertiary-on/[.08]',
    error: 'bg-error-on/[.08]',
    disabled: 'bg-surface-on/[.12]',
  } satisfies { [K in ButtonVariant | 'disabled']: string };

  const Shapes = {
    base: 'rounded-md',
    rounded: 'rounded-full',
  } satisfies { [K in ButtonShape]: string };

  return (
    <button {...rest} class={['relative flex group/button justify-center items-center', Sizes[size], Shapes[shape], cursor]}>
      <div class={['absolute inset-0 rounded-[inherit]', ContainerVariants[currentVariant]]} />
      <div class={['absolute inset-0 rounded-[inherit]', StateLayerVariants[currentVariant]]} />
      <span class={['z-10', LabelVariants[currentVariant]]}>
        <Slot />
      </span>
    </button>
  );
});
