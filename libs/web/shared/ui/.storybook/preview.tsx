import type {
  Parameters,
  Preview,
  QwikRenderer,
} from "storybook-framework-qwik";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

import "../src/styles.css";

export const parameters = {
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  options: {
    showRoots: true,
  },
} satisfies Parameters;

const preview = {
  decorators: [
    withThemeByDataAttribute<QwikRenderer<unknown>>({
      attributeName: "data-mode",
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
} satisfies Preview;

export default preview;
