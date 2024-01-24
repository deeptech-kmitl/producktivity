import { Slot, component$ } from '@builder.io/qwik';
import { Button, Box } from '../';
import type { NavigationActionProps, NavigationItemProps } from './navigation.props';

export const NavigationBar = component$(() => {
  return (
    <Box direction="horizontal" gap="1" width="full" variant="surface" align="between-center" paddingY="1" paddingX="2">
      <Slot />
    </Box>
  );
});

export const NavigationItem = component$((props: NavigationItemProps) => {
  return (
    <Button {...props} variant="tertiary">
      <Slot />
    </Button>
  );
});

export const NavigationAction = component$((props: NavigationActionProps) => {
  return (
    <Button {...props}>
      <Slot />
    </Button>
  );
});

export const Navigation = {
  Bar: NavigationBar,
  Item: NavigationItem,
  Action: NavigationAction,
};
