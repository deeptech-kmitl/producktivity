import { Slot, component$ } from '@builder.io/qwik';
import type { BoxProps, BoxVariant, BoxWidth } from './box.props';

export const Box = component$<BoxProps>((props) => {
  const { variant = 'surface', width = 'full', height = 'full', ...rest } = props;

  const Variants = {
    primary: 'bg-primary-container text-primary-container-on',
    secondary: 'bg-secondary-container text-secondary-container-on',
    tertiary: 'bg-tertiary-container text-tertiary-container-on',
    error: 'bg-error-container text-error-container-on',
    surface: 'bg-surface-container text-surface-container-on',
  } satisfies { [K in BoxVariant]: string };

  const Widths = {
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

  return (
    <div {...rest} class={[Variants[variant], Widths[width], Heights[height]]}>
      <Slot />
    </div>
  );
});
