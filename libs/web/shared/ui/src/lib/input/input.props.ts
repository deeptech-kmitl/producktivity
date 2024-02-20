import type { BorderSizeProps, SizeProps } from '../props';

export const ContainerVariants = ['primary', 'secondary', 'tertiary', 'error'] as const;
export type ContainerVariant = (typeof ContainerVariants)[number];

export interface TextInputProps extends BorderSizeProps, SizeProps {
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
