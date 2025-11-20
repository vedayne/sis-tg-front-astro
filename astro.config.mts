// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import node from '@astrojs/node'

import svelte from '@astrojs/svelte'

export default defineConfig({
  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [ tailwindcss() ],
  },

  integrations: [ icon(), svelte() ],

  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
})
