import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    questions: [],
  }),
  actions: {
    setQuestions(quizId: string) {
      console.log(quizId);
    },
  },
});
