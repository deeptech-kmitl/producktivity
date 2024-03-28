import { Fragment, component$, useComputed$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Box, Navigation, Text } from '@producktivity/ui';
import { LuWorkflow } from '@qwikest/icons/lucide';

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

interface sessionProps {
  username: string;
}

export default component$(() => {
  const loc = useLocation();

  const session: sessionProps = {
    username: 'JackiesxD',
  };

  const currentActivePath = useComputed$(() => {
    return loc.url.pathname;
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
            {session.username !== '' ? (
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
      <Navigation.Action prefetch href="/sign-up" size="large">
        Sign up
      </Navigation.Action>
    </Navigation.Bar>
  );
});
