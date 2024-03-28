import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import type { SelectInputProps } from './select.props';
import { InputError, InputLabel } from '../input';
import { Box } from '../box';

export const UISelect = component$<SelectInputProps>(({ value, options, label, error, ...props }: SelectInputProps) => {
  const { name, required, placeholder } = props;

  const values = useSignal<string[]>();
  useTask$(({ track }) => {
    track(() => value);
    values.value = Array.isArray(value) ? value : value && typeof value === 'string' ? [value] : [];
  });

  return (
    <Box width="full">
      <InputLabel name={name} label={label} required={required} />
      <div class="relative flex items-center w-full">
        <select {...props} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" id={name} aria-invalid={!!error} aria-errormessage={`${name}-error`}>
          <option value="" disabled hidden selected={!value}>
            {placeholder}
          </option>
          {options.map(({ id, name }) => (
            <option key={id} value={id} selected={values.value?.includes(id)}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <InputError name={name} error={error} />
    </Box>
  );
});
