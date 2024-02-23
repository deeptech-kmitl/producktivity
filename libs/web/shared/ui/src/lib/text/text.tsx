import { component$, Slot } from '@builder.io/qwik';
import { PropsBuilder } from '../props/props';
import type { TextProps, TextVariant, ThemeVariant, WeightVariant } from './text.props';

export const Text = component$<TextProps>((props) => {
  const { variant = 'base', span, theme = 'primary', weight = 'normal', ...rest } = props;

  const Variants = {
    hero: 'text-6xl',
    title: 'text-4xl',
    h1: 'text-3xl',
    h2: 'text-2xl',
    h3: 'text-xl',
    h4: 'text-lg',
    base: 'text-base',
  } satisfies { [K in TextVariant]: string };

  const ThemeVariants = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    error: 'text-error',
    surface: 'text-surface',
    'surface-dim': 'text-surface-dim',
    'surface-bright': 'text-surface-bright',
    'on-primary': 'on-text-primary',
    'on-secondary': 'on-text-secondary',
    'on-tertiary': 'on-text-tertiary',
    'on-error': 'on-text-error',
    'on-primary-container': 'on-text-primary-container',
    'on-secondary-container': 'on-text-secondary-container',
    'on-tertiary-container': 'on-text-tertiary-container',
    'on-error-container': 'on-text-error-container',
    gradient: 'bg-clip-text bg-gradient-to-br from-primary to-tertiary text-transparent',
  } satisfies { [K in ThemeVariant]: string };

  const WeightVariants = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    black: 'font-black',
  } satisfies { [K in WeightVariant]: string };

  const Tag = span ? 'span' : 'p';

  const additionalProps = new PropsBuilder(props).withSize().withPadding().build();

  return (
    <Tag {...rest} class={[Variants[variant], WeightVariants[weight], ThemeVariants[theme], additionalProps]}>
      <Slot />
    </Tag>
  );
});
