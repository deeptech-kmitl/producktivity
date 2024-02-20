import type { QwikIntrinsicElements } from '@builder.io/qwik';
import type { LinkProps } from '@builder.io/qwik-city';
import type { BorderSizeProps } from '../props';

export const ButtonSizes = ['small', 'base', 'large'] as const;
export type ButtonSize = (typeof ButtonSizes)[number];

export const ButtonVariants = ['primary', 'secondary', 'tertiary', 'gradient', 'error'] as const;
export type ButtonVariant = (typeof ButtonVariants)[number];

type NativeButton = QwikIntrinsicElements['button'] & LinkProps;

export interface ButtonProps extends NativeButton, BorderSizeProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
}
