import { component$, SSRStreamBlock, SSRStream } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';
import { isDev } from '@builder.io/qwik/build';
import { Fragment, fragments } from './fragments';

interface Props {
  name: Fragment;
}

export const FragmentPlaceholder = component$<Props>((props) => {
  const { name } = props;
  const decoder = new TextDecoder();

  return (
    <SSRStreamBlock>
      <SSRStream>
        {async (streamWriter) => {
          const fragment = await fetchFragment(name);
          const reader = fragment.getReader();
          let fragmentChunk = await reader.read();
          while (!fragmentChunk.done) {
            streamWriter.write(decoder.decode(fragmentChunk.value));
            fragmentChunk = await reader.read();
          }
        }}
      </SSRStream>
    </SSRStreamBlock>
  );
});

export const fetchFragment = server$(async (fragmentName: Fragment) => {
  const url = new URL(
    isDev
      ? `http://localhost:${3001 + fragments.indexOf(fragmentName)}`
      : import.meta.env.VITE_ROOT_FRAGMENT_URL,
  );

  if (!isDev) {
    url.hostname = `${fragmentName}.${url.hostname}`;
  }

  if (url) {
    url.searchParams.set('base', `/_fragment/${fragmentName}/`);
  }

  const response = await fetch(url, {
    headers: {
      accept: 'text/html',
      'Access-Control-Allow-Origin': '*',
    },
  });

  if (response.body === null) {
    throw new Error(`Response from "${fragmentName}" request is null.`);
  }

  return response.body;
});
