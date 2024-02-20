import type { QwikIntrinsicElements } from '@builder.io/qwik';
import type { BorderSizeProps, PaddingProps, SizeProps } from '../props';
import type { GapProps } from '../props/gap.props';
import type { GridProps } from '../props/grid.props';
import type { ShadowProps } from '../props/shadow.props';

export const BoxVariants = ['surface', 'primary', 'secondary', 'tertiary', 'error', 'base', 'gradient'] as const;
export type BoxVariant = (typeof BoxVariants)[number];

export const BoxAlignments = ['top-left', 'top', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom', 'bottom-right', 'between-center'] as const;
export type BoxAlignment = (typeof BoxAlignments)[number];

export const BoxDirections = ['horizontal', 'vertical'] as const;
export type BoxDirection = (typeof BoxDirections)[number];

type NativeDiv = QwikIntrinsicElements['div'];

export interface BoxProps extends NativeDiv, PaddingProps, SizeProps, BorderSizeProps, ShadowProps, GapProps, GridProps {
  variant?: BoxVariant;
  align?: BoxAlignment;
  direction?: BoxDirection;
}
