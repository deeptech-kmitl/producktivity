import { component$, Slot } from '@builder.io/qwik';
import { Box } from '@producktivity/ui';
import { Footer } from '@producktivity/web-landing-footer';
import { Navigation } from '@producktivity/web-landing-navigation';
import { useUser } from '../layout';

export default component$(() => {
  const userSignal = useUser();
  console.log('loggin', userSignal.value);

  return (
    <Box height="full" width="full" align="top">
      <Navigation user={userSignal.value} />
      <Slot />
      <Footer />
    </Box>
  );
});
