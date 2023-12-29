import type { Config } from "tailwindcss";

import { join } from "path";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [join(__dirname, "src/**/*.{js,ts,jsx,tsx,mdx}")],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      sans: ["Inter", "Noto Sans Thai Looped", ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
