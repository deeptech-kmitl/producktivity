import type { Props } from './props';

export const BoxGrids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as const;
export type BoxGrid = (typeof BoxGrids)[number];

export const BoxGridDirections = ['col', 'row'] as const;
export type BoxGridDirection = (typeof BoxGridDirections)[number];

export const GridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-3',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
} satisfies { [K in BoxGrid]: string };

export const GridRows = {
  1: 'grid-rows-1',
  2: 'grid-rows-2',
  3: 'grid-rows-3',
  4: 'grid-rows-3',
  5: 'grid-rows-5',
  6: 'grid-rows-6',
  7: 'grid-rows-7',
  8: 'grid-rows-8',
  9: 'grid-rows-9',
  10: 'grid-rows-10',
  11: 'grid-rows-11',
  12: 'grid-rows-12',
} satisfies { [K in BoxGrid]: string };

export interface GridProps extends Props {
  gridCols?: BoxGrid;
  gridRows?: BoxGrid;
}
export function getGrid(props: GridProps) {
  const { gridCols, gridRows } = props;

  const results = [];

  if (gridCols) gridCols && results.push(`${GridCols[gridCols]} grid`);
  else if (gridRows) results.push(`${GridRows[gridRows]} grid`);

  return results;
}
