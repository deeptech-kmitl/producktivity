import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";
import { Typography } from "./typography";

test(`[Typography Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Typography />);
  expect(screen.innerHTML).toContain("Typography works!");
});
