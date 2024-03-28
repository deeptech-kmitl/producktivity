import { Slot, component$ } from '@builder.io/qwik';
import { PropsBuilder } from '../props/props';
import type { BoxAlignment, BoxDirection, BoxProps, BoxVariant } from './box.props';

export const Box = component$<BoxProps>((props) => {
  const { variant = 'base', align = 'left', direction = 'vertical', ...rest } = props;

  const Variants = {
    primary: 'bg-primary-container text-primary-container-on',
    secondary: 'bg-secondary-container text-secondary-container-on',
    tertiary: 'bg-tertiary-container text-tertiary-container-on',
    error: 'bg-error-container text-error-container-on',
    surface: 'bg-surface-container/[.60] text-surface-container-on',
    gradient: 'bg-gradient-to-br from-primary to-tertiary',
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
    'between-start': 'items-start justify-between',
    'between-end': 'items-end justify-between',
  } satisfies { [K in BoxAlignment]: string };

  const Directions = {
    horizontal: 'flex-row',
    vertical: 'flex-col',
  } satisfies { [K in BoxDirection]: string };

  const additionalProps = new PropsBuilder(props).withSize().withPadding().withMargin().withBorderRadius().withGrid().withGap().withShadow().build();

  return (
    <div {...rest} class={['flex', Directions[direction], Variants[variant], Alignments[align], additionalProps]}>
      <Slot />
    </div>
  );
});
