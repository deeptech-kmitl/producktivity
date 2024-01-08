import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import { isDev } from '@builder.io/qwik/build';

import styles from '@producktivity/ui/style.css?inline';

export default component$(() => {
  useStyles$(isDev ? styles : '');

  return (
    <QwikCityProvider>
      <RouterOutlet />
    </QwikCityProvider>
  );
});
