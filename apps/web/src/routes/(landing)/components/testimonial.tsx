import { component$ } from '@builder.io/qwik';
import { Box, Button, Text } from '@producktivity/ui';

export const Testimonial = component$(() => {
  return (
    <Box gap="1" width="full" align="center" paddingY="10">
      <Text weight="bold" variant="hero" theme="gradient">
        What our customer say
      </Text>
      <Box gridCols="3" gap="4" paddingY="4">
        {[...Array(9)].map((_, index) => (
          <Box key={index} align="between-center" shadow="md" width="20" variant="surface" padding="2" height="auto" rounded="md">
            <img src="https://cdn-icons-png.flaticon.com/512/1165/1165815.png" width={64} height={64}></img>
            <Box paddingY="1">
              <Text theme="primary">"The certificate generator is so easy to use and the results are amazing!"</Text>
            </Box>
            <Text weight="semibold">- John Doe</Text>
          </Box>
        ))}
      </Box>
      <Button rounded="base">See more</Button>
    </Box>
  );
});
