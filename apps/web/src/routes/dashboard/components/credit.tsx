import { Component, component$ } from '@builder.io/qwik';
import { Box, Button, Text } from '@producktivity/ui';
import { LuCar } from '@qwikest/icons/lucide';

const MockCredit: CreditProps = {
  totalCredit: 20,
  latestUpdate: new Date('03-14-2024'),
};

export interface CreditProps {
  totalCredit: number;
  latestUpdate: Date;
}
export const Credit: Component<CreditProps> = component$(() => {
  return (
    <Box width="full" variant="surface" rounded="md">
      <Box width="full" padding="2" gap="2" align="between-center">
        <Text variant="h2" weight="bold">
          Available Credit(s)
        </Text>
        <Text variant="title" weight="semibold">
          {MockCredit.totalCredit}
        </Text>
        <Box width="full" direction="horizontal" align="between-center">
          <Text theme="secondary" variant="small">
            Last Topup: {MockCredit.latestUpdate.toLocaleDateString()}
          </Text>
          <Button rounded="full" variant="badge-tertiary">
            <Box width="full" direction="horizontal" gap="0.5">
              <Text variant="small" theme="tertiary">
                <LuCar />
              </Text>
              <Text variant="small" theme="tertiary">
                Top Up
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
});
