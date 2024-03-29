import { Fragment, component$, useComputed$, $ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { Box, Button, Navigation, Text } from '@producktivity/ui';
import { LuWorkflow } from '@qwikest/icons/lucide';

interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  createdAt: number;
  updatedAt?: number;
}

interface NavItemProps {
  id: number;
  isRequireAuth: boolean;
  label: string;
  link: string;
}

const NavItems: NavItemProps[] = [
  {
    id: 0,
    label: 'Pricing',
    link: '/pricing',
    isRequireAuth: false,
  },
  {
    id: 1,
    label: 'Dashboard',
    link: '/dashboard/overview',
    isRequireAuth: true,
  },
];

interface NavigationProps {
  user: User;
}

export default component$(({ user }: NavigationProps) => {
  const loc = useLocation();
  const navigator = useNavigate();

  const currentActivePath = useComputed$(() => {
    return loc.url.pathname;
  });

  const signOut = $(async () => {
    await fetch('/api/auth/sign-out', { method: 'POST' });
    await navigator('/');
  });

  return (
    <Navigation.Bar>
      <Box>
        <Navigation.Item prefetch href="/">
          <Box direction="horizontal" gap="0.5">
            <Text variant="h2" theme="primary">
              <LuWorkflow />
            </Text>
            <Text weight="semibold" variant="h3" theme="primary">
              Certifine
            </Text>
          </Box>
        </Navigation.Item>
      </Box>
      <Box direction="horizontal" gap="1">
        {NavItems.map((item: NavItemProps) => (
          <Navigation.Item prefetch key={item.id} href={item.link}>
            {user ? (
              <Text theme="primary" weight={currentActivePath.value === item.link ? 'semibold' : 'normal'}>
                {item.label}
              </Text>
            ) : (
              <Fragment>
                {!item.isRequireAuth && (
                  <Text weight={currentActivePath.value === item.link ? 'semibold' : 'normal'} theme="primary">
                    {item.label}
                  </Text>
                )}
              </Fragment>
            )}
          </Navigation.Item>
        ))}
      </Box>
      {!user && (
        <Navigation.Action prefetch href="/sign-up" size="large">
          <Text theme="surface">Sign up</Text>
        </Navigation.Action>
      )}
      {user.username && (
        <Box direction="horizontal" gap="1">
          <Text>{user.username}</Text>
          <Button rounded="md" prefetch onClick$={signOut}>
            <Text theme="surface">Sign out</Text>
          </Button>
        </Box>
      )}
    </Navigation.Bar>
  );
});
