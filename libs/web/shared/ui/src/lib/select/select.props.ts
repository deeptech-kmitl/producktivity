import type { QRL } from '@builder.io/qwik';
import type { BorderSizeProps, SizeProps } from '../props';

export interface TemplateSelectProps {
  id: string;
  userId: string;
  name: string;
  createdAt?: number;
  updatedAt?: number;
}

export interface SelectInputProps extends BorderSizeProps, SizeProps {
  disabled?: boolean;
  ref: QRL<(element: HTMLSelectElement) => void>;
  name: string;
  value: string | string[] | null | undefined;
  onInput$: (event: Event, element: HTMLSelectElement) => void;
  onChange$: (event: Event, element: HTMLSelectElement) => void;
  onBlur$: (event: Event, element: HTMLSelectElement) => void;
  options: TemplateSelectProps[];
  multiple?: boolean;
  size?: number;
  placeholder?: string;
  required?: boolean;
  class?: string;
  label?: string;
  error?: string;
}
