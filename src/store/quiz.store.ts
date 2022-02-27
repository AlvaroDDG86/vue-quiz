import { defineStore } from "pinia";
import { QuizService } from "@/services/quiz.service";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    quizzes: [],
    questions: [],
  }),
  actions: {
    getQuizzes() {
      QuizService.getQuizzes().then((res: any) => {
        this.quizzes = res;
      });
    },
    getQuizById(quizId: number) {
      QuizService.getQuizById(quizId).then((res: any) => {
        this.questions = res;
      });
    },
  },
});
