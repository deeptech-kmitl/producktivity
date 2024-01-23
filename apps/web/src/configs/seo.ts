import { DocumentHead } from '@builder.io/qwik-city';

interface Config {
  title?: string;
  description?: string;
}

export const DefaultSeoTitle = 'Certifine: Certificate Platform';
export const DefaultSeoDescription = 'Certifine, a complete solution for your certificate needs.';

export function generateSeoConfig(config?: Config): DocumentHead {
  const title = getTitle(DefaultSeoTitle, config?.title);
  const description = getDescription(DefaultSeoDescription, config?.description);

  return {
    title: title,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ],
  } satisfies DocumentHead;
}

function getTitle(defaultTitle: string, title?: string) {
  return title ? `${title} - ${defaultTitle}` : defaultTitle;
}

function getDescription(defaultDescription: string, description?: string) {
  return description ? description : defaultDescription;
}
