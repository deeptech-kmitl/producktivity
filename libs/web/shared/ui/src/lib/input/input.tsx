import { component$ } from '@builder.io/qwik';
import { Box } from '..';
import { PropsBuilder } from '../props/props';
import type { ContainerVariant, TextInputProps } from './input.props';

export const TextInput = component$<TextInputProps>((props) => {
  const { label = '', name, required, error, variant = 'primary', disabled, ...rest } = props;

  const ContainerVariants = {
    primary: 'text-primary focus:ring-primary',
    secondary: 'text-secondary focus:ring-secondary',
    tertiary: 'text-tertiary focus:ring-tertiary',
    error: 'text-error border-error focus:ring-error',
  } satisfies { [K in ContainerVariant]: string };

  const additionalProps = new PropsBuilder(props).withSize().withPadding().withBorderRadius().build();

  return (
    <Box width="auto">
      {label && (
        <label for={name}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <input {...rest} class={['border border-gray-200 px-3.5 py-2 ring-1 ring-gray-100/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset', ContainerVariants[variant], additionalProps]} disabled={disabled} aria-errormessage={`${name}-error`} />
      {error && (
        <div id={`${name}-error`} class="text-error text-sm">
          {error}
        </div>
      )}
    </Box>
  );
});
