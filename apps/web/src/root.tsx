import { component$, useServerData, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import { RouterHead } from './components/base';

import styles from '@producktivity/ui/style.css?inline';
import { initFlowbite } from 'flowbite';

import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

export default component$(() => {
  useStyles$(styles);

  useVisibleTask$(() => {
    initFlowbite();
  });

  const nonce = useServerData<string | undefined>('nonce');

  return (
    <QwikCityProvider>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+Thai+Looped:wght@400;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+Thai+Looped:wght@400;700&display=swap" media="print" onLoad$={(_, element) => (element.media = 'all')} />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+Thai+Looped:wght@400;700&display=swap" />
        </noscript>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body>
        <RouterOutlet />
        <ServiceWorkerRegister nonce={nonce} />
      </body>
    </QwikCityProvider>
  );
});
