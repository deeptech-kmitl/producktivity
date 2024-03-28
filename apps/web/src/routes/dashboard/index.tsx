import { component$, $ } from '@builder.io/qwik';
import { DocumentHead, useNavigate } from '@builder.io/qwik-city';
import { Button, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../configs/seo';
import { useUser } from '../layout';

export default component$(() => {
  const userSignal = useUser();
  const navigator = useNavigate();
  const signOut = $(async () => {
    await fetch('/api/auth/sign-out', { method: 'POST', });

    await navigator('/');
  });

  return (
    <>
      <p>{ userSignal.value ? userSignal.value.username : 'unauthorize' }</p>
      <Button onClick$={signOut}>Sign Out</Button>
      <Text variant="title" weight="bold">
        Dashboard
      </Text>
    </>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Dashboard' });
