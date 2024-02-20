import { component$ } from '@builder.io/qwik';
import { Box } from '..';
import { PropsBuilder } from '../props/props';
import type { ContainerVariant, TextInputProps } from './input.props';

export const TextInput = component$<TextInputProps>((props) => {
  const { label = '', name, required, error, variant = 'primary', disabled, ...rest } = props;

  const ContainerVariants = {
    primary: 'bg-primary-on text-primary border-primary',
    secondary: 'bg-secondary-on text-secondary border-secondary',
    tertiary: 'bg-tertiary-on text-tertiary border-tertiary',
    error: 'bg-error-on text-error border-error',
  } satisfies { [K in ContainerVariant]: string };

  const additionalProps = new PropsBuilder(props).withSize().withPadding().withBorderRadius().build();

  return (
    <Box width="auto">
      {label && (
        <label for={name}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <input {...rest} class={['border py-1 px-2', ContainerVariants[variant], additionalProps]} disabled={disabled} aria-errormessage={`${name}-error`} />
      {error && <div id={`${name}-error`}>{error}</div>}
    </Box>
  );
});
