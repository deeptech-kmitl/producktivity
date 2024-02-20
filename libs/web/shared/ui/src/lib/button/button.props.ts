import type { QwikIntrinsicElements } from '@builder.io/qwik';
import type { LinkProps } from '@builder.io/qwik-city';

export const ButtonSizes = ['small', 'base', 'large'] as const;
export type ButtonSize = (typeof ButtonSizes)[number];

export const ButtonVariants = ['primary', 'secondary', 'tertiary', 'gradient', 'error'] as const;
export type ButtonVariant = (typeof ButtonVariants)[number];

export const ButtonShape = ['base', 'rounded'] as const;
export type ButtonShape = (typeof ButtonShape)[number];

type NativeButton = QwikIntrinsicElements['button'] & LinkProps;

export interface ButtonProps extends NativeButton {
  size?: ButtonSize;
  variant?: ButtonVariant;
  rounded?: boolean;
  disabled?: boolean;
}
