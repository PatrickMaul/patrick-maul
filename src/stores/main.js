import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    themeLight: true,
  }),
  getters: {
    isLight() {
      return this.themeLight;
    },
  },
  actions: {
    toggleTheme() {
      this.themeLight = !this.themeLight;
    },
  },
});
