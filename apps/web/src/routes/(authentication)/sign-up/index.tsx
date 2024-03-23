import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Button, Text, TextInput } from '@producktivity/ui';
import { generateSeoConfig } from '../../../configs/seo';

export default component$(() => {
  return (
    <>
      <Box width="full" height="full" style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
        <Box gap="1" width="full" height="full" align="center" variant="gradient">
          <Text variant="title" weight="bold" theme="surface">
            Welcome to Produck!
          </Text>
          <Text variant="h3" theme="surface">
            Already have account?
          </Text>
          <Button href="/sign-in" variant="surface" rounded="base">
            Sign in
          </Button>
        </Box>

        <Box width="full" height="full" align="center" gap="1">
          <Text variant="title" weight="bold" style={{ alignSelf: 'center' }}>
            CREATE ACCOUNT
          </Text>
          <Text variant="h4" theme="secondary">
            Register your account
          </Text>

          <Box align="center" gap="1">
            <TextInput width="24" type="text" name="name" label="Name" rounded="full" required />
            <TextInput width="24" type="email" name="e-mail" label="E-mail" rounded="full" required />
            <TextInput width="24" type="password" name="password" label="Password" rounded="full" required />
          </Box>

          <Box gap="1" width="full" align="center">
            <Button href="/sign-in" rounded="base">
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Sign up' });
