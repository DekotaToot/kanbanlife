import { hexFromArgb } from '@material/material-color-utilities'
import theme from './src/utils/theme.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        md: {
          primary: {
            DEFAULT: hexFromArgb(theme.schemes.light.primary),
            container: hexFromArgb(theme.schemes.light.primaryContainer)
          },
          secondary: {
            DEFAULT: hexFromArgb(theme.schemes.light.secondary),
            container: hexFromArgb(theme.schemes.light.secondaryContainer)
          },
          tertiary: {
            DEFAULT: hexFromArgb(theme.schemes.light.tertiary),
            container: hexFromArgb(theme.schemes.light.tertiaryContainer)
          },
          error: {
            DEFAULT: hexFromArgb(theme.schemes.light.error),
            container: hexFromArgb(theme.schemes.light.errorContainer)
          },
          background: hexFromArgb(theme.schemes.light.background),
          surface: hexFromArgb(theme.schemes.light.surface),
          outline: hexFromArgb(theme.schemes.light.outline),
          dark: {
            primary: {
              DEFAULT: hexFromArgb(theme.schemes.dark.primary),
              container: hexFromArgb(theme.schemes.dark.primaryContainer)
            },
            secondary: {
              DEFAULT: hexFromArgb(theme.schemes.dark.secondary),
              container: hexFromArgb(theme.schemes.dark.secondaryContainer)
            },
            tertiary: {
              DEFAULT: hexFromArgb(theme.schemes.dark.tertiary),
              container: hexFromArgb(theme.schemes.dark.tertiaryContainer)
            },
            error: {
              DEFAULT: hexFromArgb(theme.schemes.dark.error),
              container: hexFromArgb(theme.schemes.dark.errorContainer)
            },
            background: hexFromArgb(theme.schemes.dark.background),
            surface: hexFromArgb(theme.schemes.dark.surface),
            outline: hexFromArgb(theme.schemes.dark.outline),
          }
        }
      }
    },
  },
  plugins: [],
}

