import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  security: {
    checkOrigin: false,
  },
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
    tailwind(),
  ],
});
