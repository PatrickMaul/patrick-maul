import Vue from "@vitejs/plugin-vue";
import { defineConfig, configDefaults } from "vitest/config";
import path from "path";

export default defineConfig({
  plugins: [Vue()],

  test: {
    coverage: {
      all: true,
      include: ["src/"],
      provider: "c8", // or 'istanbul'
      exclude: [
        ...configDefaults.exclude,
        "**/*.vue?vue&type=template&lang.js",
        "**/*.vue?vue&type=template&scoped=*&lang.js",
        "src/main.js",
        "**/*/__tests__/",
        "src/router/",
        "src/stores/",
      ],
    },
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "**/*.vue?vue&type=template&lang.js"],
    globals: true,
  },
  resolve: {
    alias: [
      {
        find: "@",
        // eslint-disable-next-line no-undef
        replacement: path.resolve(__dirname, "/src"),
      },
    ],
  },
});
