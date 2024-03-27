import { component$ } from '@builder.io/qwik';
import { Button, Box, Text } from '@producktivity/ui';

interface AuthButtonProps {
  label: string;
}

export default component$((props: AuthButtonProps) => {
  return (
    <Button variant="surface">
      <Box width="full" direction="horizontal" gap="1">
        <Text>{props.label}</Text>
        <img width="30" height="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" />
      </Box>
    </Button>
  );
});
