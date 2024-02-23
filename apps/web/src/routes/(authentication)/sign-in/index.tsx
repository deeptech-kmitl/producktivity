import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Button, Text, TextInput } from '@producktivity/ui';
import { generateSeoConfig } from '../../../configs/seo';

export default component$(() => {
  return (
    <>
      <Box width="full" height="full" direction="horizontal">
        <Box gap="1" width="full" height="full" align="center">
          <Text variant="title" weight="bold">
            SIGN IN
          </Text>
          <Text variant="h4" theme="secondary">
            Sign in to your account
          </Text>
          <Box align="center" gap="1">
            <TextInput width="24" type="email" name="e-mail" label="E-mail" rounded="full" required />
            <TextInput width="24" type="password" name="password" label="Password" rounded="full" required />
          </Box>

          <Box gap="1" width="full" align="center">
            <Text theme="tertiary">Forgot your password?</Text>
            <Button href="/sign-in" rounded="base">
              Sign Up
            </Button>
          </Box>

          <Box width="full" align="center">
            <Text theme="tertiary">Or sign up with</Text>
          </Box>

          <Box width="full" align="center">
            <Button variant="secondary">
              <img width="40" height="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" />
            </Button>
          </Box>
        </Box>

        <Box gap="1" width="full" height="full" align="center" variant="gradient">
          <Text variant="title" weight="bold" theme="surface">
            Welcome to Produck!
          </Text>
          <Text variant="h3" theme="surface">
            Don&apos;t have an account?
          </Text>
          <Button href="/sign-up" variant="surface" rounded="base">
            Sign up
          </Button>
        </Box>
      </Box>
    </>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Sign up' });
