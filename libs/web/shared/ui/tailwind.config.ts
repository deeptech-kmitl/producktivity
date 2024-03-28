import type { Config } from 'tailwindcss';

import { join } from 'path';
import typography from '@tailwindcss/typography';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}'), './node_modules/flowbite/**/*.js'],
  darkMode: ['class', "[data-mode='dark']"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Noto Sans Thai Looped', ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          on: 'rgb(var(--on-primary) / <alpha-value>)',
          container: {
            DEFAULT: 'rgb(var(--primary-container) / <alpha-value>)',
            on: 'rgb(var(--on-primary-container) / <alpha-value>)',
          },
          inverse: 'rgb(var(--inverse-primary) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
          on: 'rgb(var(--on-secondary) / <alpha-value>)',
          container: {
            DEFAULT: 'rgb(var(--secondary-container) / <alpha-value>)',
            on: 'rgb(var(--on-secondary-container) / <alpha-value>)',
          },
        },
        tertiary: {
          DEFAULT: 'rgb(var(--tertiary) / <alpha-value>)',
          on: 'rgb(var(--on-tertiary) / <alpha-value>)',
          container: {
            DEFAULT: 'rgb(var(--tertiary-container) / <alpha-value>)',
            on: 'rgb(var(--on-tertiary-container) / <alpha-value>)',
          },
        },
        error: {
          DEFAULT: 'rgb(var(--error) / <alpha-value>)',
          on: 'rgb(var(--on-error) / <alpha-value>)',
          container: {
            DEFAULT: 'rgb(var(--error-container) / <alpha-value>)',
            on: 'rgb(var(--on-error-container) / <alpha-value>)',
          },
        },
        outline: {
          DEFAULT: 'rgb(var(--outline) / <alpha-value>)',
          variant: 'rgb(var(--outline-variant) / <alpha-value>)',
        },
        shadow: 'rgb(var(--shadow) / <alpha-value>)',
        scrim: 'rgb(var(--scrim) / <alpha-value>)',
        background: {
          DEFAULT: 'rgb(var(--background) / <alpha-value>)',
          on: 'rgb(var(--on-background) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          on: 'rgb(var(--on-surface) / <alpha-value>)',
          tint: 'rgb(var(--surface-tint) / <alpha-value>)',
          variant: {
            DEFAULT: 'rgb(var(--surface-variant) / <alpha-value>)',
            on: 'rgb(var(--on-surface-variant) / <alpha-value>)',
          },
          inverse: {
            DEFAULT: 'rgb(var(--inverse-surface) / <alpha-value>)',
            on: 'rgb(var(--inverse-on-surface) / <alpha-value>)',
          },
          dim: 'rgb(var(--surface-dim) / <alpha-value>)',
          bright: 'rgb(var(--surface-bright) / <alpha-value>)',
          container: {
            DEFAULT: 'rgb(var(--surface-container) / <alpha-value>)',
            low: 'rgb(var(--surface-container-low) / <alpha-value>)',
            lowest: 'rgb(var(--surface-container-lowest) / <alpha-value>)',
            high: 'rgb(var(--surface-container-high) / <alpha-value>)',
            highest: 'rgb(var(--surface-container-highest) / <alpha-value>)',
          },
        },
      },
      typography: {
        DEFAULT: {
          css: [
            {
              color: 'rgb(var(--on-surface))',
              maxWidth: '48rem',
              '[class~="lead"]': {
                color: 'rgb(var(--on-surface-variant))',
              },
              a: {
                color: 'rgb(var(--primary))',
              },
              'ol > li::marker': {
                color: 'rgb(var(--on-surface))',
              },
              'ul > li::marker': {
                color: 'rgb(var(--on-surface))',
              },
              dt: {
                color: 'rgb(var(--on-surface))',
              },
              hr: {
                borderColor: 'rgb(var(--on-surface))',
              },
              blockquote: {
                color: 'rgb(var(--primary))',
                borderInlineStartColor: 'rgb(var(--primary))',
              },
              h1: {
                color: 'rgb(var(--primary))',
              },
              h2: {
                color: 'rgb(var(--secondary))',
              },
              h3: {
                color: 'rgb(var(--tertiary))',
              },
              h4: {
                color: 'rgb(var(--on-surface))',
              },
              kbd: {
                color: 'rgb(var(--on-surface))',
                boxShadow: '0 0 0 1px rgb(var(--on-surface) / 10%), 0 3px 0 rgb(var(--on-surface) / 10%)',
              },
              code: {
                color: 'rgb(var(--on-surface))',
              },
              pre: {
                color: 'rgb(var(--on-surface-variant))',
                backgroundColor: 'rgb(var(--surface-variant))',
              },
              thead: {
                borderBottomColor: 'rgb(var(--outline))',
              },
              'thead th': {
                color: 'rgb(var(--primary))',
              },
              'tbody tr': {
                borderBottomColor: 'rgb(var(--outline))',
              },
              tfoot: {
                borderTopColor: 'rgb(var(--outline))',
              },
              figcaption: {
                color: 'rgb(var(--on-surface))',
              },
            },
          ],
        },
      },
    },
  },
  plugins: [typography, require('flowbite/plugin')],
} satisfies Config;
