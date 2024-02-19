import { component$ } from '@builder.io/qwik';
import { Box, Button } from '@producktivity/ui';

export default component$((item: PricingCard) => {
  return (
    <Box border="1" width="20" height={item.type === 'Professional' ? 'auto' : '24'} class="flex bg-secondary-container" variant="secondary" align="between-center" padding="2">
      <div class="w-full">
        <p class="text-2xl font-bold">{item.type}</p>
        <p class="text-4xl font-bold">{item.price}</p>
        <p>{item.desc}</p>
      </div>
      <div>
        <p>
          All in <span class="font-semibold">type</span> includes:
        </p>
        <ul>
          {item.features.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Button>{item.cta}</Button>
    </Box>
  );
});
