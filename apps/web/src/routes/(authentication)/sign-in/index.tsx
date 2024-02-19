import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Text, Box, Button } from '@producktivity/ui';
import { generateSeoConfig } from '../../../configs/seo';

export default component$(() => {
  return (
    <>
      <Box width="full" height="full" style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
        <Box gap="1" width="full" height="full">
          <Text variant="title" bold style={{ alignSelf: 'center' }}>
            SIGN IN
          </Text>
          <Text variant="h3" style={{ alignSelf: 'center' }}>
            Sign in to your account
          </Text>
          <Box width="full" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box width="half">
              <label>E-mail</label>
              <input width="full" type="text" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '5px', paddingLeft: '10px', width: '100%' }} />
            </Box>
          </Box>
          <Box width="full" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box width="half">
              <label>Password</label>
              <input width="full" type="password" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '5px', paddingLeft: '10px', width: '100%' }} />
            </Box>
          </Box>

          <Box gap="1" width="full" align="center">
            <Text variant="base">Forget your password?</Text>
            <Button href="/sign-in">Sign In</Button>
          </Box>

          <Box width="full" align="center">
            <Text variant="base">----- Or sign up with -----</Text>
          </Box>

          <Box width="full" align="center">
            <Button variant="secondary">
              <img width="40" height="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" />
            </Button>
          </Box>
        </Box>

        <Box gap="1" width="full" height="full" align="center">
          <Text variant="title" bold>
            Welcome to Produck!
          </Text>
          <Text variant="h3">Don’t have an account?</Text>
          <Button href="/sign-up">Sign up</Button>
        </Box>
      </Box>
    </>
  );
});

export const head: DocumentHead = generateSeoConfig({ title: 'Sign up' });
