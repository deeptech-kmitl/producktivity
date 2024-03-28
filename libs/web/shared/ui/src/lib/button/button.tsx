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
    surface: 'bg-surface',
    disabled: 'bg-surface-on/[.12]',
    'badge-primary': 'bg-primary/[.15] px-2 py-1 border border-primary',
    'badge-secondary': 'bg-secondary/[.15] px-2 py-1 border border-secondary',
    'badge-tertiary': 'bg-tertiary/[.15] px-2 py-1 border border-tertiary',
    'badge-success': 'bg-green-200/[0.4] dark:bg-green-500',
    'badge-error': 'bg-error/[0.2]',
    'badge-info': 'bg-blue-200/[0.4] dark:bg-blue-500',
  } satisfies { [K in ButtonVariant | 'disabled']: string };

  const LabelVariants = {
    primary: 'text-primary-on',
    secondary: 'text-secondary-on',
    tertiary: 'text-tertiary-on',
    error: 'text-error-on',
    gradient: 'text-primary-on',
    surface: 'text-surface-on',
    disabled: 'text-surface-on/[.38]',
    'badge-primary': 'text-primary font-medium text-sm',
    'badge-secondary': 'text-secondary font-medium text-sm',
    'badge-tertiary': 'text-tertiary font-medium text-sm',
    'badge-success': 'text-green-600 dark:text-green-200 font-medium text-sm',
    'badge-error': 'text-error font-medium text-sm',
    'badge-info': 'text-blue-600 dark:text-blue-200 font-medium text-sm',
  } satisfies { [K in ButtonVariant | 'disabled']: string };

  const StateLayerVariants = {
    primary: 'group-hover/button:bg-surface-variant-on/[.08] group-active/button:bg-surface-variant-on/[.10] group-focus/button:bg-surface-variant-on/[.10]',
    secondary: 'group-hover/button:bg-primary/[.08] group-active/button:bg-primary/[.10] group-focus/button:bg-primary/[.10]',
    tertiary: 'group-hover/button:bg-primary/[.08] group-active/button:bg-primary/[.10] group-focus/button:bg-primary/[.10]',
    surface: 'group-hover/button:bg-surface-on/[.08] group-active/button:bg-surface-on/[.10] group-focus/button:bg-surface-on/[.10]',
    gradient: '',
    error: 'bg-error-on/[.08]',
    disabled: 'bg-surface-on/[.12]',
    'badge-primary': '',
    'badge-secondary': '',
    'badge-tertiary': '',
    'badge-success': '',
    'badge-error': '',
    'badge-info': '',
  } satisfies { [K in ButtonVariant | 'disabled']: string };

  const Tag = rest.href ? Link : 'button';

  const additionalProps = new PropsBuilder(props).withSize().withPadding().withBorderRadius().build();

  return (
    <Tag {...rest} class={['relative flex group/button rounded justify-center items-center', Sizes[size], cursor, additionalProps]}>
      <div class={['absolute inset-0 rounded-[inherit]', ContainerVariants[currentVariant]]} />
      <div class={['absolute inset-0 rounded-[inherit]', StateLayerVariants[currentVariant]]} />
      <span class={['z-10', LabelVariants[currentVariant]]}>
        <Slot />
      </span>
    </Tag>
  );
});
