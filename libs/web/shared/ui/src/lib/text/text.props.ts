import type { QwikIntrinsicElements } from '@builder.io/qwik';

export const TextVariants = ['hero', 'title', 'h1', 'h2', 'h3', 'h4', 'base'] as const;
export type TextVariant = (typeof TextVariants)[number];

export const ThemeVariants = ['base', 'gradient'] as const;
export type ThemeVariant = (typeof ThemeVariants)[number];

type NativeParagraph = QwikIntrinsicElements['p'] & QwikIntrinsicElements['span'];

export interface TextProps extends NativeParagraph {
  bold?: boolean;
  variant?: TextVariant;
  themeVariant?: ThemeVariant;
  span?: boolean;
}
