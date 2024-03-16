import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroImageTools, icon()],
  output: "server",
  adapter: vercel(),
});
