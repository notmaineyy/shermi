import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [tailwind()],

  // ✏️ update with your domain
  site: 'https://shermaineang.com',

  output: 'server',
  adapter: cloudflare()
});