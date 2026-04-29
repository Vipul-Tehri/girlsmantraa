// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://Vipul-Tehri.github.io",
  base: "/girlsmantraa",
  integrations: [tailwind(), react()],
//   security: {
//     csp: true,
//   },
});
