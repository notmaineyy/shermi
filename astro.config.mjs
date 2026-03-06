import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [tailwindcss()],
  site: 'https://shermaineang.com', // ✏️ update with your domain
});