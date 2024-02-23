import type { Props } from './props';

export const BoxShadows = ['sm', 'md', 'lg', 'none'] as const;
export type BoxShadow = (typeof BoxShadows)[number];

const Shadows = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
} satisfies { [K in BoxShadow]: string };

export interface ShadowProps extends Props {
  shadow?: BoxShadow;
}

export function getShadow(props: ShadowProps) {
  const { shadow } = props;

  const results = [];

  if (shadow) results.push(Shadows[shadow]);

  return results;
}
