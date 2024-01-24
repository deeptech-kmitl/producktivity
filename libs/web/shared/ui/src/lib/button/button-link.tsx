import { Slot, component$ } from '@builder.io/qwik';
import type { ButtonLinkProps } from './button-link.props';
import { Link } from '@builder.io/qwik-city';

export const ButtonLink = component$<ButtonLinkProps>((props) => {
  const { href, target = '_self' } = props;

  return (
    <Link href={href} target={target} class={[]}>
      <Slot />
    </Link>
  );
});
