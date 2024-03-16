import { Hono } from 'hono';
import { D1Database } from '@cloudflare/workers-types';

type Bindings = {
  DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

export default app;
