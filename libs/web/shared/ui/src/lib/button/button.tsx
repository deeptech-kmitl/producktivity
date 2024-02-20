import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { PropsBuilder } from '../props/props';
import type { ButtonProps, ButtonSize, ButtonVariant } from './button.props';

export const Button = component$<ButtonProps>((props) => {
  const { size = 'base', variant = 'primary', disabled = false, ...rest } = props;

  const currentVariant = disabled ? 'disabled' : variant;
  const cursor = disabled ? 'cursor-default' : 'cursor-pointer';

  const Sizes = {
    small: 'px-2 py-1 text-sm',
    base: 'px-4 py-2 text-lg',
    large: 'px-6 py-4 text-xl',
  } satisfies { [K in ButtonSize]: string };

  const ContainerVariants = {
    primary: 'bg-primary',
    secondary: 'ring-1 ring-outline',
    tertiary: 'bg-transparent',
    error: 'bg-error',
    gradient: 'bg-gradient-to-br from-primary to-tertiary',
    disabled: 'bg-surface-on/[.12]',
  } satisfies { [K in ButtonVariant | 'disabled']: string };

  const LabelVariants = {
    primary: 'text-primary-on',
    secondary: 'text-primary',
    tertiary: 'text-primary',
    error: 'text-error-on',
    gradient: 'text-primary-on',
    disabled: 'text-surface-on/[.38]',
  } satisfies { [K in ButtonVariant | 'disabled']: string };

  const StateLayerVariants = {
    primary: 'group-hover/button:bg-surface-variant-on/[.08] group-active/button:bg-surface-variant-on/[.10] group-focus/button:bg-surface-variant-on/[.10]',
    secondary: 'group-hover/button:bg-primary/[.08] group-active/button:bg-primary/[.10] group-focus/button:bg-primary/[.10]',
    tertiary: 'group-hover/button:bg-primary/[.08] group-active/button:bg-primary/[.10] group-focus/button:bg-primary/[.10]',
    gradient: '',
    error: 'bg-error-on/[.08]',
    disabled: 'bg-surface-on/[.12]',
  } satisfies { [K in ButtonVariant | 'disabled']: string };

  const Tag = rest.href ? Link : 'button';

  const additionalProps = new PropsBuilder(props).withSize().withPadding().withBorderRadius().build();

  return (
    <Tag {...rest} class={['relative flex group/button justify-center items-center', Sizes[size], cursor, additionalProps]}>
      <div class={['absolute inset-0 rounded-[inherit]', ContainerVariants[currentVariant]]} />
      <div class={['absolute inset-0 rounded-[inherit]', StateLayerVariants[currentVariant]]} />
      <span class={['z-10', LabelVariants[currentVariant]]}>
        <Slot />
      </span>
    </Tag>
  );
});
