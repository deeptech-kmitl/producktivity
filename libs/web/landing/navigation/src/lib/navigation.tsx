import { component$, useComputed$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Box, Navigation, Text } from '@producktivity/ui';

interface NavItemProps {
  id: number;
  label: string;
  link: string;
}

const NavItems: NavItemProps[] = [
  {
    id: 0,
    label: 'Pricing',
    link: '/pricing',
  },
  {
    id: 1,
    label: 'Contact',
    link: '/contact',
  },
];

export default component$(() => {
  const loc = useLocation();

  const currentActivePath = useComputed$(() => {
    console.log(loc.url.pathname);
    return loc.url.pathname;
  });

  return (
    <Navigation.Bar>
      <Box>
        <Navigation.Item prefetch href="/">
          <Text weight="semibold" variant="h3">
            Certifine
          </Text>
        </Navigation.Item>
      </Box>
      <Box direction="horizontal" gap="1">
        {NavItems.map((item: NavItemProps) => (
          <Navigation.Item prefetch key={item.id} href={item.link}>
            <Text weight={currentActivePath.value === item.link ? 'semibold' : 'normal'}>{item.label}</Text>
          </Navigation.Item>
        ))}
      </Box>
      <Navigation.Action prefetch href="/sign-up" size="large">
        Sign up
      </Navigation.Action>
    </Navigation.Bar>
  );
});
