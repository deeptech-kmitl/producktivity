import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";
import { Container } from "./container";

test(`[Container Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Container />);
  expect(screen.innerHTML).toContain("Container works!");
});
