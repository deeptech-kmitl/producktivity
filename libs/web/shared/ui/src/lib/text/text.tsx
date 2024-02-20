import { component$, Slot } from '@builder.io/qwik';
import type { TextProps, TextVariant, ThemeVariant, WeightVariant } from './text.props';

export const Text = component$<TextProps>((props) => {
  const { variant = 'base', span, theme = 'base', weight = 'normal', ...rest } = props;

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
    base: 'text-[#333]',
    primary: 'text-[#5FAEE6]',
    secondary: 'text-[#89BEA7]',
    gradient: 'bg-clip-text bg-gradient-to-br from-[#5FAEE6] to-[#89BEA7] text-transparent',
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

  return (
    <Tag {...rest} class={[Variants[variant], WeightVariants[weight], theme ? ThemeVariants[theme] : 'text-[#333]']}>
      <Slot />
    </Tag>
  );
});
