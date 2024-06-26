import { component$ } from '@builder.io/qwik';
import { Box, Button, Text } from '@producktivity/ui';
import { LuHeadphones } from '@qwikest/icons/lucide';

const MockCredit: CreditProps = {
  totalCredit: 20,
  latestUpdate: new Date('03-14-2024'),
};

export interface CreditProps {
  totalCredit: number;
  latestUpdate: Date;
}
export const Credit = component$(() => {
  return (
    <Box width="full" variant="surface" rounded="md">
      <Box width="full" padding="2" gap="2" align="between-center">
        <Text variant="h2" weight="bold">
          Available Credit(s)
        </Text>
        <Text variant="title" weight="semibold">
          {MockCredit.totalCredit}
        </Text>
        <Box width="full" align="between-center" gap="1">
          <Button rounded="full" variant="badge-tertiary">
            <Box width="full" direction="horizontal" gap="0.5">
              <Text variant="small" theme="tertiary">
                <LuHeadphones />
              </Text>
              <Text variant="small" theme="tertiary">
                Contact Sales
              </Text>
            </Box>
          </Button>
          <Text theme="secondary" variant="small">
            Last Topup: {MockCredit.latestUpdate.toLocaleDateString()}
          </Text>
        </Box>
      </Box>
    </Box>
  );
});
