import type { Props } from './props';

export const Sizes = ['auto', 'min-1/4', 'min-2/4', 'min-3/4', 'min-1/2', 'min-1/3', 'min-2/3', 'min-screen', 'full', 'full-screen', 'half', 'quarter', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '16', '18', '20', '24'] as const;
export type Size = (typeof Sizes)[number];

export type Width = Size;
export type Height = Size;

export const Widths = {
  auto: 'w-auto',
  full: 'w-full',
  'full-screen': 'w-dvw',
  half: 'w-1/2',
  quarter: 'w-1/4',
  '1': 'w-4',
  '2': 'w-8',
  '3': 'w-12',
  '4': 'w-16',
  '5': 'w-20',
  '6': 'w-24',
  '7': 'w-28',
  '8': 'w-32',
  '9': 'w-36',
  '10': 'w-40',
  '12': 'w-48',
  '16': 'w-64',
  '18': 'w-72',
  '20': 'w-80',
  '24': 'w-96',
  'min-1/4': 'min-w-1/4',
  'min-2/4': 'min-w-2/4',
  'min-3/4': 'min-w-3/4',
  'min-1/2': 'min-w-1/2',
  'min-1/3': 'min-w-1/3',
  'min-2/3': 'min-w-2/3',
  'min-screen': 'min-w-screen',
} satisfies { [K in Width]: string };

export const Heights = {
  auto: 'h-auto',
  full: 'h-full',
  'full-screen': 'h-dvh',
  half: 'h-1/2',
  quarter: 'h-1/4',
  '1': 'h-4',
  '2': 'h-8',
  '3': 'h-12',
  '4': 'h-16',
  '5': 'h-20',
  '6': 'h-24',
  '7': 'h-28',
  '8': 'h-32',
  '9': 'h-36',
  '10': 'h-40',
  '12': 'h-48',
  '16': 'h-64',
  '18': 'h-72',
  '20': 'h-80',
  '24': 'h-96',
  'min-1/4': 'min-h-1/4',
  'min-2/4': 'min-h-2/4',
  'min-3/4': 'min-h-3/4',
  'min-1/2': 'min-h-1/2',
  'min-1/3': 'min-h-1/3',
  'min-2/3': 'min-h-2/3',
  'min-screen': 'min-h-screen',
} satisfies { [K in Height]: string };

export interface SizeProps extends Props {
  width?: Width;
  height?: Height;
}

export function getSize(props: SizeProps) {
  const { width, height } = props;

  const results = [];

  if (width) results.push(Widths[width]);
  if (height) results.push(Heights[height]);

  return results;
}
