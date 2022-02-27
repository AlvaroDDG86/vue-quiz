import { defineStore } from "pinia";
import { QuizService } from "@/services/quiz.service";

export const useQuizStore = defineStore("counter", {
state: () => ({
    quizzes: [],
    questions: [],
  }),
  actions: {
    getQuizzes() {
      QuizService.getQuizzes().then((res: any) => {
        this.quizzes = res
      });
    },
    setQuestions(quizId: string) {
      QuizService.getQuizzes().then((res: any) => {
        console.log(res);
      });
    },
  },
});
