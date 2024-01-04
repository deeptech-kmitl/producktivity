import type { QwikIntrinsicElements } from '@builder.io/qwik';

export const BoxVariants = ['surface', 'primary', 'secondary', 'tertiary', 'error'] as const;
export type BoxVariant = (typeof BoxVariants)[number];

export const BoxSizes = ['full', 'half', 'quarter', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '16', '18', '20', '24'] as const;
export type BoxSize = (typeof BoxSizes)[number];

export type BoxWidth = BoxSize;
export type BoxHeight = BoxSize;

type NativeDiv = QwikIntrinsicElements['div'];

export interface BoxProps extends NativeDiv {
  variant?: BoxVariant;
  width?: BoxWidth;
  height?: BoxHeight;
}
