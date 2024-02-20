import { component$, Slot } from '@builder.io/qwik';
import type { TextProps, TextVariant, ThemeVariant } from './text.props';

export const Text = component$<TextProps>((props) => {
  const { bold = false, variant = 'base', span, themeVariant = 'base', ...rest } = props;

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
    base: '',
    gradient: 'bg-clip-text bg-gradient-to-br from-[#5FAEE6] to-[#89BEA7] text-transparent',
  } satisfies { [K in ThemeVariant]: string };

  const Tag = span ? 'span' : 'p';

  return (
    <Tag {...rest} class={[{ 'font-bold': bold }, Variants[variant], ThemeVariants[themeVariant]]}>
      <Slot />
    </Tag>
  );
});
