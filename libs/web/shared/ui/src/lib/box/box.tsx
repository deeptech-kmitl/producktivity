import { Slot, component$ } from '@builder.io/qwik';
import type { BoxAlignment, BoxBorder, BoxDirection, BoxGap, BoxProps, BoxVariant, BoxWidth } from './box.props';

export const Box = component$<BoxProps>((props) => {
  const { variant = 'base', width = 'auto', height = 'auto', align = 'left', direction = 'vertical', gap = 'none', border = 'none', ...rest } = props;

  const Variants = {
    primary: 'bg-primary-container text-primary-container-on',
    secondary: 'bg-secondary-container text-secondary-container-on',
    tertiary: 'bg-tertiary-container text-tertiary-container-on',
    error: 'bg-error-container text-error-container-on',
    surface: 'bg-surface-container text-surface-container-on',
    base: 'bg-transparent text-surface-on',
  } satisfies { [K in BoxVariant]: string };

  const Widths = {
    auto: 'w-auto',
    full: 'w-full',
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
  } satisfies { [K in BoxWidth]: string };

  const Heights = {
    auto: 'h-auto',
    full: 'h-full',
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
  } satisfies { [K in BoxWidth]: string };

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

  const Borders = {
    none: 'rounded-none',
    full: 'rounded-full',
    '1': 'rounded',
    '2': 'rounded-md',
    '3': 'rounded-lg',
    '4': 'rounded-xl',
    '5': 'rounded-2xl',
    '6': 'rounded-3xl',
  } satisfies { [K in BoxBorder]: string };

  return (
    <div {...rest} class={['flex', Directions[direction], Variants[variant], Widths[width], Heights[height], Alignments[align], Gaps[gap], Borders[border]]}>
      <Slot />
    </div>
  );
});
