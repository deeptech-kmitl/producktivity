import { Slot, component$ } from '@builder.io/qwik';
import type { BoxAlignment, BoxBorder, BoxDirection, BoxGap, BoxProps, BoxVariant } from './box.props';
import { Props } from '../props/props';

export const Box = component$<BoxProps>((props) => {
  const { variant = 'base', align = 'left', direction = 'vertical', gap = 'none', border = 'none', ...rest } = props;

  const Variants = {
    primary: 'bg-primary-container text-primary-container-on',
    secondary: 'bg-secondary-container text-secondary-container-on',
    tertiary: 'bg-tertiary-container text-tertiary-container-on',
    error: 'bg-error-container text-error-container-on',
    surface: 'bg-surface-container text-surface-container-on',
    base: 'bg-transparent text-surface-on',
  } satisfies { [K in BoxVariant]: string };

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

  const additionalProps = new Props(props).withSize().withPadding().build();

  return (
    <div {...rest} class={['flex', Directions[direction], Variants[variant], Alignments[align], Gaps[gap], Borders[border], additionalProps]}>
      <Slot />
    </div>
  );
});
