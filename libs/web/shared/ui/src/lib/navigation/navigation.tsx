import { Slot, component$ } from '@builder.io/qwik';
import { Box, Button } from '../';
import type { NavigationActionProps, NavigationItemProps } from './navigation.props';

export const NavigationBar = component$(() => {
  return (
    <Box direction="horizontal" gap="1" width="full" variant="surface" align="between-center" paddingY="1" paddingX="2" class="backdrop-blur-sm">
      <Slot />
    </Box>
  );
});

export const NavigationItem = component$((props: NavigationItemProps) => {
  return (
    <Button {...props} size="small" variant="tertiary">
      <Slot />
    </Button>
  );
});

export const NavigationAction = component$((props: NavigationActionProps) => {
  return (
    <Button {...props} size="small" rounded="base" variant="primary">
      <Slot />
    </Button>
  );
});

export const Navigation = {
  Bar: NavigationBar,
  Item: NavigationItem,
  Action: NavigationAction,
};
