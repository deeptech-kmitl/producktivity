import { component$, useServerData, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import { isDev } from '@builder.io/qwik/build';

import styles from '@producktivity/ui/style.css?inline';

export default component$(() => {
  useStyles$(isDev ? styles : '');

  const nonce = useServerData<string | undefined>('nonce');

  return (
    <QwikCityProvider>
      <p>{nonce}</p>
      <RouterOutlet />
    </QwikCityProvider>
  );
});
