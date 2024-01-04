import { component$, Slot } from '@builder.io/qwik';
import type { TextProps, TextVariant } from './text.props';

export const Text = component$<TextProps>((props) => {
  const { bold = false, variant = 'base', ...rest } = props;

  const Variants = {
    title: 'text-4xl',
    h1: 'text-3xl',
    h2: 'text-2xl',
    h3: 'text-xl',
    h4: 'text-lg',
    base: 'text-base',
  } satisfies { [K in TextVariant]: string };

  return (
    <p {...rest} class={[{ 'font-bold': bold }, Variants[variant]]}>
      <Slot />
    </p>
  );
});
