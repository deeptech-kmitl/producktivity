import { component$ } from '@builder.io/qwik';
import { Box } from '..';
import { PropsBuilder } from '../props/props';
import type { ContainerVariant, TextInputProps } from './input.props';

export const TextInput = component$<TextInputProps>((props) => {
  const { label = '', name, required, error, variant = 'primary', disabled, ...rest } = props;

  const ContainerVariants = {
    primary: 'text-primary border-primary focus:ring-primary/[.20]',
    secondary: 'text-secondary border-secondary focus:ring-secondary/[.20]',
    tertiary: 'text-tertiary border-tertiary focus:ring-tertiary/[.20]',
    error: 'text-error border-error focus:ring-error/[.20]',
  } satisfies { [K in ContainerVariant]: string };

  const additionalProps = new PropsBuilder(props).withSize().withPadding().withBorderRadius().build();

  return (
    <Box width="auto">
      {label && (
        <label for={name}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <input {...rest} class={['border py-2 px-3 ring-1 ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset', ContainerVariants[variant], additionalProps]} disabled={disabled} aria-errormessage={`${name}-error`} />
      {error && <div id={`${name}-error`}>{error}</div>}
    </Box>
  );
});
