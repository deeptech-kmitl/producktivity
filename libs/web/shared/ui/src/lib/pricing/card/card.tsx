import { component$ } from '@builder.io/qwik';
import type { PackageVariant, PricingCard } from './card.props';

export const Card = component$((item: PricingCard) => {
  const currentVariant = item.type;

  const TextVariant = {
    Hobby: 'text-blue-400',
    Professional: 'text-violet-500',
    Enterprise: 'text-orange-500',
  } satisfies { [K in PackageVariant]: string };

  const ButtonVariant = {
    Hobby: 'text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white',
    Professional: 'bg-violet-500 text-white hover:bg-violet-400',
    Enterprise: 'text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white',
  } satisfies { [K in PackageVariant]: string };

  return (
    <div class={['shadow-md rounded-md grid grid-row-10 justify-between p-4 w-2/5 max-w-2/5', item.type === 'Professional' ? 'border-2 border-violet-600 h-4/5' : 'h-3/5']}>
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
      <button class={['w-full rounded-sm border transition-all font-semibold', ButtonVariant[currentVariant]]}>{item.cta}</button>
    </div>
  );
});
