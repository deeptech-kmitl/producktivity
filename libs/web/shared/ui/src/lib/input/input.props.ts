import type { BorderSize, BorderSizeProps, Height, SizeProps, Width } from '../props';

export const ContainerVariants = ['primary', 'secondary', 'tertiary', 'error'] as const;
export type ContainerVariant = (typeof ContainerVariants)[number];

export interface TextInputProps extends BorderSizeProps, SizeProps {
  rounded?: BorderSize;
  width?: Width;
  height?: Height;
  variant?: ContainerVariant;
  disabled?: boolean;
  name: string;
  type: 'text' | 'email' | 'tel' | 'password' | 'url' | 'date';
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  required?: boolean;
}
