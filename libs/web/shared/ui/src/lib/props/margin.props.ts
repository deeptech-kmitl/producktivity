import type { Props } from './props';

export const MarginSizes = ['none', '0.5', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] as const;
export type MarginSize = (typeof MarginSizes)[number];

export interface MarginProps extends Props {
  marginLeft?: MarginSize;
  marginRight?: MarginSize;
  marginTop?: MarginSize;
  marginBottom?: MarginSize;
  marginX?: MarginSize;
  marginY?: MarginSize;
  margin?: MarginSize;
}

export const MarginTops = {
  none: 'mt-0',
  '0.5': 'mt-2',
  '1': 'mt-4',
  '2': 'mt-8',
  '3': 'mt-12',
  '4': 'mt-16',
  '5': 'mt-20',
  '6': 'mt-24',
  '7': 'mt-28',
  '8': 'mt-32',
  '9': 'mt-36',
  '10': 'mt-40',
} satisfies { [K in MarginSize]: string };

export const MarginBottoms = {
  none: 'mb-0',
  '0.5': 'mb-2',
  '1': 'mb-4',
  '2': 'mb-8',
  '3': 'mb-12',
  '4': 'mb-16',
  '5': 'mb-20',
  '6': 'mb-24',
  '7': 'mb-28',
  '8': 'mb-32',
  '9': 'mb-36',
  '10': 'mb-40',
} satisfies { [K in MarginSize]: string };

export const MarginLefts = {
  none: 'ml-0',
  '0.5': 'ml-2',
  '1': 'ml-4',
  '2': 'ml-8',
  '3': 'ml-12',
  '4': 'ml-16',
  '5': 'ml-20',
  '6': 'ml-24',
  '7': 'ml-28',
  '8': 'ml-32',
  '9': 'ml-36',
  '10': 'ml-40',
} satisfies { [K in MarginSize]: string };

export const MarginRights = {
  none: 'mr-0',
  '0.5': 'mr-2',
  '1': 'mr-4',
  '2': 'mr-8',
  '3': 'mr-12',
  '4': 'mr-16',
  '5': 'mr-20',
  '6': 'mr-24',
  '7': 'mr-28',
  '8': 'mr-32',
  '9': 'mr-36',
  '10': 'mr-40',
} satisfies { [K in MarginSize]: string };

export const MarginHorizontals = {
  none: 'mx-0',
  '0.5': 'mx-2',
  '1': 'mx-4',
  '2': 'mx-8',
  '3': 'mx-12',
  '4': 'mx-16',
  '5': 'mx-20',
  '6': 'mx-24',
  '7': 'mx-28',
  '8': 'mx-32',
  '9': 'mx-36',
  '10': 'mx-40',
} satisfies { [K in MarginSize]: string };

export const MarginVerticals = {
  none: 'my-0',
  '0.5': 'my-2',
  '1': 'my-4',
  '2': 'my-8',
  '3': 'my-12',
  '4': 'my-16',
  '5': 'my-20',
  '6': 'my-24',
  '7': 'my-28',
  '8': 'my-32',
  '9': 'my-36',
  '10': 'my-40',
} satisfies { [K in MarginSize]: string };

export const Margins = {
  none: 'm-0',
  '0.5': 'm-2',
  '1': 'm-4',
  '2': 'm-8',
  '3': 'm-12',
  '4': 'm-16',
  '5': 'm-20',
  '6': 'm-24',
  '7': 'm-28',
  '8': 'm-32',
  '9': 'm-36',
  '10': 'm-40',
} satisfies { [K in MarginSize]: string };

// TODO: clean this function
export function getMargin(props: MarginProps) {
  const { margin, marginX, marginY, marginLeft, marginRight, marginTop, marginBottom } = props;

  const results = [];

  if (margin) results.push(Margins[margin]);
  else {
    if (marginX) results.push(MarginHorizontals[marginX]);
    else {
      if (marginLeft) results.push(MarginLefts[marginLeft]);
      if (marginRight) results.push(MarginRights[marginRight]);
    }
    if (marginY) results.push(MarginVerticals[marginY]);
    else {
      if (marginTop) results.push(MarginTops[marginTop]);
      if (marginBottom) results.push(MarginBottoms[marginBottom]);
    }
  }

  return results;
}
