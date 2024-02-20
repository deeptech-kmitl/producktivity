import type { QwikIntrinsicElements } from '@builder.io/qwik';
import type { BorderSizeProps, PaddingProps, SizeProps } from '../props';

export const BoxVariants = ['surface', 'primary', 'secondary', 'tertiary', 'error', 'base'] as const;
export type BoxVariant = (typeof BoxVariants)[number];

export const BoxAlignments = ['top-left', 'top', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom', 'bottom-right', 'between-center'] as const;
export type BoxAlignment = (typeof BoxAlignments)[number];

export const BoxDirections = ['horizontal', 'vertical'] as const;
export type BoxDirection = (typeof BoxDirections)[number];

export const BoxGaps = ['none', '0.5', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '16', '18', '20', '24'] as const;
export type BoxGap = (typeof BoxGaps)[number];

export const BoxGridDirections = ['col', 'row'] as const;
export type BoxGridDirection = (typeof BoxGridDirections)[number];

export const BoxGrids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as const;
export type BoxGrid = (typeof BoxGrids)[number];

export const BoxShadows = ['sm', 'md', 'lg', 'none'] as const;
export type BoxShadow = (typeof BoxShadows)[number];

type NativeDiv = QwikIntrinsicElements['div'];

export interface BoxProps extends NativeDiv, PaddingProps, SizeProps, BorderSizeProps {
  variant?: BoxVariant;
  align?: BoxAlignment;
  direction?: BoxDirection;
  gap?: BoxGap;
  grid?: BoxGrid;
  gridDirection?: BoxGridDirection;
  shadow?: BoxShadow;
}
