import { component$ } from '@builder.io/qwik';
import type { PackageVariant, PricingCard } from './card.props';

export const Card = component$((item: PricingCard) => {
  const currentVariant = item.type;

  const TextVariant = {
    Hobby: 'text-primary',
    Professional: 'text-tertiary',
    Enterprise: 'text-secondary',
  } satisfies { [K in PackageVariant]: string };

  const ButtonVariant = {
    Hobby: 'text-primary bg-primary-on border-primary hover:bg-primary hover:text-primary-on',
    Professional: 'bg-tertiary text-tertiary-on hover:bg-tertiary/[.80]',
    Enterprise: 'text-secondary bg-secondary-on border-secondary hover:bg-secondary hover:text-secondary-on',
  } satisfies { [K in PackageVariant]: string };

  return (
    <div class={['bg-primary-on relative shadow-md rounded-md grid grid-row-10 justify-between p-4 w-1/4 max-w-1/4 items-center', item.type === 'Professional' ? 'border-4 border-tertiary h-4/5 max-h-4/5' : 'h-3/5 max-h-3/5']}>
      <span class={['justify-self-center px-2 py-1 text-tertiary-on bg-tertiary rounded-md absolute -top-4 font-semibold text-xl text-center', currentVariant === 'Professional' ? 'block' : 'hidden']}>MOST POPULAR</span>
      <div class="w-full row-span-3">
        <p class={['text-2xl font-bold', TextVariant[currentVariant]]}>{item.type}</p>
        <p class={['text-4xl font-bold', TextVariant[currentVariant]]}>{item.price}</p>
        <p>{item.desc}</p>
      </div>
      <div class="w-full flex flex-col items-start row-span-6">
        <p>
          All in <span class="font-semibold">{item.type}</span> includes:
        </p>
        {item.features.map((item: string) => (
          <p key={item} class="px-2">
            &middot; {item}
          </p>
        ))}
      </div>
      <button class={['self-end w-full py-2 rounded-sm border transition-all font-semibold', ButtonVariant[currentVariant]]}>{item.cta}</button>
    </div>
  );
});
