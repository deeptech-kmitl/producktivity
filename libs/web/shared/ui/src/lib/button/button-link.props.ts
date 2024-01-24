import type { QwikIntrinsicElements } from '@builder.io/qwik';

export const ButtonVariants = ['primary', 'secondary', 'tertiary', 'error'] as const;
export type ButtonVariant = (typeof ButtonVariants)[number];

type NativeButtonLink = QwikIntrinsicElements['a'];

export interface ButtonLinkProps extends NativeButtonLink {
  variant?: ButtonVariant;
}
