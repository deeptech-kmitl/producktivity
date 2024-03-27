import { component$ } from '@builder.io/qwik';
import { Button } from '@producktivity/ui';

type PlanType = 'Professional' | 'Enterprise' | 'Hobby';

interface PlanBadgeProps {
  planType: PlanType;
}

export const PlanBadge = component$((badge: PlanBadgeProps) => {
  return (
    <Button rounded="full" variant={badge.planType === 'Professional' ? 'badge-primary' : badge.planType === 'Enterprise' ? 'badge-tertiary' : 'badge-secondary'}>
      {badge.planType}
    </Button>
  );
});
