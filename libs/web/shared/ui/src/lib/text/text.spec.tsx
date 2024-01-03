import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Text } from './text';

test('[Text Component]: Should render', async () => {
  const { screen, render } = await createDOM();
  await render(<Text />);
  expect(screen.innerHTML).toContain('Typography works!');
});
