import { QuizType } from "./../models/quiz-type.model";
import { defineStore } from "pinia";
import { QuizService } from "@/services/quiz.service";
import { Question } from "@/models/question.model";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    quizzes: <QuizType[]>[],
    quizSelected: <QuizType>{},
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
    setQuizType(quizType: QuizType) {
      this.quizSelected = quizType;
    },
    getOptionsByQuestionId(questionId: number) {
      QuizService.getOptionsByQuestionId(this.quizSelected.id, questionId).then(
        (res: any) => {
          this.questions.forEach((question) => {
            if (question.id === questionId) {
              question.options = [...res];
            }
          });
        }
      );
    },
  },
  getters: {
    isQuizPartial: (state) =>
      state.questions.every((question) => question.answer !== null),
  },
});
