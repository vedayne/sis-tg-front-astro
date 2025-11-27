// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import node from '@astrojs/node'

import svelte from '@astrojs/svelte'

import react from '@astrojs/react';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [ tailwindcss() ],
  },

  integrations: [icon(), svelte(), react()],

  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
})
