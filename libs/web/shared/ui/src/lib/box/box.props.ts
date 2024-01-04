import type { QwikIntrinsicElements } from '@builder.io/qwik';

export const BoxVariants = ['surface', 'primary', 'secondary', 'tertiary', 'error', 'base'] as const;
export type BoxVariant = (typeof BoxVariants)[number];

export const BoxSizes = ['auto', 'full', 'half', 'quarter', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '16', '18', '20', '24'] as const;
export type BoxSize = (typeof BoxSizes)[number];

export type BoxWidth = BoxSize;
export type BoxHeight = BoxSize;

export const BoxAlignments = ['top-left', 'top', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom', 'bottom-right'] as const;
export type BoxAlignment = (typeof BoxAlignments)[number];

export const BoxDirections = ['horizontal', 'vertical'] as const;
export type BoxDirection = (typeof BoxDirections)[number];

export const BoxGaps = ['none', '0.5', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '16', '18', '20', '24'] as const;
export type BoxGap = (typeof BoxGaps)[number];

export const BoxBorders = ['none', 'full', '1', '2', '3', '4', '5', '6'] as const;
export type BoxBorder = (typeof BoxBorders)[number];

type NativeDiv = QwikIntrinsicElements['div'];

export interface BoxProps extends NativeDiv {
  variant?: BoxVariant;
  width?: BoxWidth;
  height?: BoxHeight;
  align?: BoxAlignment;
  direction?: BoxDirection;
  gap?: BoxGap;
  border?: BoxBorder;
}
