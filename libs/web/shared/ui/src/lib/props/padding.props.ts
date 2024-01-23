import type { Props } from './props';

export const PaddingSizes = ['none', '0.5', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] as const;
export type PaddingSize = (typeof PaddingSizes)[number];

export interface PaddingProps extends Props {
  paddingLeft?: PaddingSize;
  paddingRight?: PaddingSize;
  paddingTop?: PaddingSize;
  paddingBottom?: PaddingSize;
  paddingX?: PaddingSize;
  paddingY?: PaddingSize;
  padding?: PaddingSize;
}

export const PaddingTops = {
  none: 'pt-0',
  '0.5': 'pt-2',
  '1': 'pt-4',
  '2': 'pt-8',
  '3': 'pt-12',
  '4': 'pt-16',
  '5': 'pt-20',
  '6': 'pt-24',
  '7': 'pt-28',
  '8': 'pt-32',
  '9': 'pt-36',
  '10': 'pt-40',
} satisfies { [K in PaddingSize]: string };

export const PaddingBottoms = {
  none: 'pb-0',
  '0.5': 'pb-2',
  '1': 'pb-4',
  '2': 'pb-8',
  '3': 'pb-12',
  '4': 'pb-16',
  '5': 'pb-20',
  '6': 'pb-24',
  '7': 'pb-28',
  '8': 'pb-32',
  '9': 'pb-36',
  '10': 'pb-40',
} satisfies { [K in PaddingSize]: string };

export const PaddingLefts = {
  none: 'pl-0',
  '0.5': 'pl-2',
  '1': 'pl-4',
  '2': 'pl-8',
  '3': 'pl-12',
  '4': 'pl-16',
  '5': 'pl-20',
  '6': 'pl-24',
  '7': 'pl-28',
  '8': 'pl-32',
  '9': 'pl-36',
  '10': 'pl-40',
} satisfies { [K in PaddingSize]: string };

export const PaddingRights = {
  none: 'pr-0',
  '0.5': 'pr-2',
  '1': 'pr-4',
  '2': 'pr-8',
  '3': 'pr-12',
  '4': 'pr-16',
  '5': 'pr-20',
  '6': 'pr-24',
  '7': 'pr-28',
  '8': 'pr-32',
  '9': 'pr-36',
  '10': 'pr-40',
} satisfies { [K in PaddingSize]: string };

export const PaddingHorizontals = {
  none: 'px-0',
  '0.5': 'px-2',
  '1': 'px-4',
  '2': 'px-8',
  '3': 'px-12',
  '4': 'px-16',
  '5': 'px-20',
  '6': 'px-24',
  '7': 'px-28',
  '8': 'px-32',
  '9': 'px-36',
  '10': 'px-40',
} satisfies { [K in PaddingSize]: string };

export const PaddingVerticals = {
  none: 'py-0',
  '0.5': 'py-2',
  '1': 'py-4',
  '2': 'py-8',
  '3': 'py-12',
  '4': 'py-16',
  '5': 'py-20',
  '6': 'py-24',
  '7': 'py-28',
  '8': 'py-32',
  '9': 'py-36',
  '10': 'py-40',
} satisfies { [K in PaddingSize]: string };

export const Paddings = {
  none: 'p-0',
  '0.5': 'p-2',
  '1': 'p-4',
  '2': 'p-8',
  '3': 'p-12',
  '4': 'p-16',
  '5': 'p-20',
  '6': 'p-24',
  '7': 'p-28',
  '8': 'p-32',
  '9': 'p-36',
  '10': 'p-40',
} satisfies { [K in PaddingSize]: string };

// TODO: clean this function
export function getPadding(props: PaddingProps) {
  const { padding, paddingX, paddingY, paddingLeft, paddingRight, paddingTop, paddingBottom } = props;

  const results = [];

  if (padding) results.push(Paddings[padding]);
  else {
    if (paddingX) results.push(PaddingHorizontals[paddingX]);
    else {
      if (paddingLeft) results.push(PaddingLefts[paddingLeft]);
      if (paddingRight) results.push(PaddingRights[paddingRight]);
    }
    if (paddingY) results.push(PaddingVerticals[paddingY]);
    else {
      if (paddingTop) results.push(PaddingTops[paddingTop]);
      if (paddingBottom) results.push(PaddingBottoms[paddingBottom]);
    }
  }

  return results;
}
