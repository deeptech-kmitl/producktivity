import type { Props } from './props';

export const BorderSizes = ['none', 'full', 'base', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const;
export type BorderSize = (typeof BorderSizes)[number];

export interface BorderSizeProps extends Props {
  rounded?: BorderSize;
}

export const BorderRadius = {
  none: 'rounded-none',
  full: 'rounded-full',
  base: 'rounded',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
} satisfies { [K in BorderSize]: string };

export function getBorderRadius(props: BorderSizeProps) {
  const results = [];

  if (props.rounded) results.push(BorderRadius[props.rounded]);

  return results;
}
