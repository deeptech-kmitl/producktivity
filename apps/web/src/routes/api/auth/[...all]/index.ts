import { Auth } from '@auth/core';
import { RequestHandler } from '@builder.io/qwik-city';

const auth = async (request: Request) => await Auth(request, {
  providers: []
});

export const onRequest: RequestHandler = async ({ request, send }) => {
  send(await auth(request));
};
