import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    site: 'https://seopinto.github.io/minimalist-portfolio-json/',
    base: '/minimalist-portfolio-json/',
    output: 'static',
    outDir: './docs',

    build: {
        assets: 'astro'
      }
});
