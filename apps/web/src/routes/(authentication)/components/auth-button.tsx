import { component$, $ } from '@builder.io/qwik';
import { Button, Box, Text } from '@producktivity/ui';
import { useNavigate } from '@builder.io/qwik-city';

interface AuthButtonProps {
  label: string;
}

export default component$((props: AuthButtonProps) => {
  const navigator = useNavigate();
  const signInWithGoogle = $(async () => await navigator('/api/auth/google'));

  return (
    <Button variant="surface" onClick$={signInWithGoogle}>
      <Box width="full" direction="horizontal" gap="1">
        <img width="30" height="30" src="/assets/google.svg" />
        <Text>{props.label}</Text>
      </Box>
    </Button>
  );
});
