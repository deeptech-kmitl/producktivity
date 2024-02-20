import { Slot, component$ } from '@builder.io/qwik';
import { PropsBuilder } from '../props/props';
import type { BoxAlignment, BoxDirection, BoxGap, BoxGrid, BoxProps, BoxShadow, BoxVariant } from './box.props';

export const Box = component$<BoxProps>((props) => {
  const { variant = 'base', align = 'left', direction = 'vertical', gap = 'none', gridDirection, grid = '1', shadow = 'none', ...rest } = props;

  const Variants = {
    primary: 'bg-primary-container text-primary-container-on',
    secondary: 'bg-secondary-container text-secondary-container-on',
    tertiary: 'bg-tertiary-container text-tertiary-container-on',
    error: 'bg-error-container text-error-container-on',
    surface: 'bg-surface-container/[.60] text-surface-container-on',
    gradient: 'bg-gradient-to-br from-primary to-tertiary',
    base: 'bg-transparent text-surface-on',
  } satisfies { [K in BoxVariant]: string };

  const GridCols = {
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

  const GridRows = {
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

  const Alignments = {
    'top-left': 'items-start justify-start',
    'top': direction === 'horizontal' ? 'items-start justify-center' : 'items-center justify-start',
    'top-right': direction === 'horizontal' ? 'items-start justify-end' : 'justify-start items-end',
    'left': direction === 'horizontal' ? 'items-center justify-start' : 'justify-center items-start',
    'center': 'items-center justify-center',
    'right': direction === 'horizontal' ? 'items-center justify-end' : 'justify-center items-end',
    'bottom-left': direction === 'horizontal' ? 'items-end justify-start' : 'items-start justify-end',
    'bottom': direction === 'horizontal' ? 'items-end justify-center' : 'justify-end items-center',
    'bottom-right': 'items-end justify-end',
    'between-center': 'items-center justify-between',
  } satisfies { [K in BoxAlignment]: string };

  const Directions = {
    horizontal: 'flex-row',
    vertical: 'flex-col',
  } satisfies { [K in BoxDirection]: string };

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

  const Shadows = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  } satisfies { [K in BoxShadow]: string };

  const additionalProps = new PropsBuilder(props).withSize().withPadding().build();

  return (
    <div {...rest} class={[gridDirection ? 'grid' : 'flex', Directions[direction], Variants[variant], Alignments[align], Gaps[gap], gridDirection === 'row' ? GridRows[grid] : GridCols[grid], Shadows[shadow], additionalProps]}>
      <Slot />
    </div>
  );
});
