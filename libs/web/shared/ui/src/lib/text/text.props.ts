import type { QwikIntrinsicElements } from '@builder.io/qwik';

export const TextVariants = ['hero', 'title', 'h1', 'h2', 'h3', 'h4', 'base'] as const;
export type TextVariant = (typeof TextVariants)[number];

export const ThemeVariants = ['primary', 'secondary', 'tertiary', 'error', 'gradient'] as const;
export type ThemeVariant = (typeof ThemeVariants)[number];

export const WeightVariants = ['thin', 'normal', 'light', 'extralight', 'medium', 'semibold', 'bold', 'black'] as const;
export type WeightVariant = (typeof WeightVariants)[number];

type NativeParagraph = QwikIntrinsicElements['p'] & QwikIntrinsicElements['span'];

export interface TextProps extends NativeParagraph {
  variant?: TextVariant;
  theme?: ThemeVariant;
  weight?: WeightVariant;
  span?: boolean;
}
