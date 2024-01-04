import type { QwikIntrinsicElements } from '@builder.io/qwik';

export const TextVariants = ['title', 'h1', 'h2', 'h3', 'h4', 'base'] as const;
export type TextVariant = (typeof TextVariants)[number];

type NativeParagraph = QwikIntrinsicElements['p'];

export interface TextProps extends NativeParagraph {
  bold?: boolean;
  variant?: TextVariant;
}
