import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Box, Button, Text } from '@producktivity/ui';
import { generateSeoConfig } from '../../../configs/seo';
import AuthButton from '../components/auth-button';
import { LuArrowLeft } from '@qwikest/icons/lucide';

export default component$(() => {
  return (
    <Box gap="5" width="full" height="full" align="center">
      <Box align="center" gap="1">
        <Text variant="title" weight="semibold">
          Welcome to Certifined
        </Text>
        <Text theme="secondary">Please sign in to proceed</Text>
      </Box>
      <AuthButton label="Sign in with" />
      <Box direction="horizontal" gap="2">
        <Button variant="surface" href="/">
          <Box direction="horizontal" gap="1">
            <Text theme="secondary">
              <LuArrowLeft />
            </Text>
            <Text theme="secondary">Back to page</Text>
          </Box>
        </Button>
        <Button variant="surface" href="/sign-up">
          <Text theme="secondary">Sign up</Text>
        </Button>
      </Box>
    </Box>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Sign up' });
