import { defineConfig } from "astro/config";
// import AutoImport from 'astro-auto-import';
import mdx from "@astrojs/mdx";

// import sitemap from "@astrojs/sitemap";
import lottie from "astro-integration-lottie";

// https://astro.build/config
export default defineConfig({
  integrations: [
    lottie(),
    // AutoImport({
    //   imports: [
    //     // Add your Note component to the auto-imports:
    //     './src/components/BaseBlogImage.astro',
    //   ],
    // }),
    mdx(),
  ],
});
