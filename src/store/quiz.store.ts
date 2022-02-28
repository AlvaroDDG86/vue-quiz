import { defineStore } from "pinia";
import { QuizService } from "@/services/quiz.service";
import { Question } from "@/models/question.model";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    quizzes: [],
    questions: <Question[]>[
      {
        id: 29543,
        title: "What is the highest number used in a Sudoku puzzle?",
      },
    ],
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
    getQuestionsByQuestionId(questionId: number) {
      QuizService.getQuestionsByQuestionId(questionId).then((res: any) => {
        this.questions.forEach((question) => {
          if (question.id === questionId) {
            question.options = [...res];
          }
        });
      });
    },
  },
});
