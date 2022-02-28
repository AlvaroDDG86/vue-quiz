import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
  }),
  actions: {
    setUser(name: string) {
      this.name = name;
    },
  },
});
