import type { Props } from './props';

export const BoxGaps = ['none', '0.5', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '16', '18', '20', '24'] as const;
export type BoxGap = (typeof BoxGaps)[number];

const Gaps = {
  none: 'gap-0',
  '0.5': 'gap-2',
  '1': 'gap-4',
  '2': 'gap-8',
  '3': 'gap-12',
  '4': 'gap-16',
  '5': 'gap-20',
  '6': 'gap-24',
  '7': 'gap-28',
  '8': 'gap-32',
  '9': 'gap-36',
  '10': 'gap-40',
  '12': 'gap-48',
  '16': 'gap-64',
  '18': 'gap-72',
  '20': 'gap-80',
  '24': 'gap-96',
} satisfies { [K in BoxGap]: string };

export interface GapProps extends Props {
  gap?: BoxGap;
}

export function getGap(props: GapProps) {
  const { gap } = props;

  const results = [];

  if (gap) results.push(Gaps[gap]);

  return results;
}
