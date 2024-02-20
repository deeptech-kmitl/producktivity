import type { QwikIntrinsicElements } from '@builder.io/qwik';
import type { PaddingProps } from '../props';

export const TextVariants = ['hero', 'title', 'h1', 'h2', 'h3', 'h4', 'base'] as const;
export type TextVariant = (typeof TextVariants)[number];

export const ThemeVariants = ['primary', 'secondary', 'tertiary', 'error', 'on-primary', 'on-secondary', 'on-tertiary', 'on-error', 'on-primary-container', 'on-secondary-container', 'on-tertiary-container', 'on-error-container', 'surface', 'surface-dim', 'surface-bright', 'gradient'] as const;
export type ThemeVariant = (typeof ThemeVariants)[number];

export const WeightVariants = ['thin', 'normal', 'light', 'extralight', 'medium', 'semibold', 'bold', 'black'] as const;
export type WeightVariant = (typeof WeightVariants)[number];

type NativeParagraph = QwikIntrinsicElements['p'] & QwikIntrinsicElements['span'];

export interface TextProps extends NativeParagraph, PaddingProps {
  variant?: TextVariant;
  theme?: ThemeVariant;
  weight?: WeightVariant;
  span?: boolean;
}
