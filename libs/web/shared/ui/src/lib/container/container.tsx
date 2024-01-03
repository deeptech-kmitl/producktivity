import { Slot, component$ } from '@builder.io/qwik';

export const Container = component$(() => {
  return (
    <div>
      <Slot />
    </div>
  );
});
