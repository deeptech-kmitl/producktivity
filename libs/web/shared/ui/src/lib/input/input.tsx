import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Box } from '..';
import { PropsBuilder } from '../props/props';
import type { ContainerVariant, TextInputProps } from './input.props';
import { isBrowser } from '@builder.io/qwik/build';

type InputLabelProps = {
  name: string;
  label?: string;
  required?: boolean;
};

export const InputLabel = component$(({ name, label, required }: InputLabelProps) => (
  <>
    {label && (
      <label for={name}>
        {label} {required && <span class="ml-1 text-red-600 dark:text-red-400">*</span>}
      </label>
    )}
  </>
));

export const TextInput = component$<TextInputProps>((props) => {
  const { label, required = true, name, error, variant = 'primary', disabled, ...rest } = props;

  const ContainerVariants = {
    primary: 'text-primary focus:ring-primary',
    secondary: 'text-secondary focus:ring-secondary',
    tertiary: 'text-tertiary focus:ring-tertiary',
    error: 'text-error border-error focus:ring-error',
  } satisfies { [K in ContainerVariant]: string };

  const additionalProps = new PropsBuilder(props).withSize().withPadding().withBorderRadius().build();

  return (
    <Box width="full">
      <InputLabel name={name} label={label} required={required} />
      <input {...rest} class={['border border-gray-200 px-3.5 py-2 ring-1 ring-gray-100/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset w-full', ContainerVariants[variant], additionalProps]} disabled={disabled} aria-errormessage={`${name}-error`} />
      {error && (
        <div id={`${name}-error`} class="text-error text-sm">
          {error}
        </div>
      )}
    </Box>
  );
});

type InputErrorProps = {
  name: string;
  error?: string;
};

export const InputError = component$(({ name, error }: InputErrorProps) => {
  const frozenError = useSignal<string>();

  useTask$(({ track, cleanup }) => {
    const nextError = track(() => error);
    if (isBrowser && !nextError) {
      const timeout = setTimeout(() => (frozenError.value = nextError), 200);
      cleanup(() => clearTimeout(timeout));
    } else {
      frozenError.value = nextError;
    }
  });

  return (
    <div class={!error ? 'block' : 'hidden'}>
      <div class="pt-4 text-sm text-red-500 dark:text-red-400 md:text-base lg:pt-5 lg:text-lg" id={`${name}-error`}>
        {frozenError.value}
      </div>
    </div>
  );
});
