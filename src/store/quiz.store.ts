import { Answer } from "./../models/answer.model";
import { QuizType } from "./../models/quiz-type.model";
import { defineStore } from "pinia";
import { QuizService } from "@/services/quiz.service";
import { Question } from "@/models/question.model";
import { QuizResume } from "@/models/quiz-resume.model";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    quizzes: <QuizType[]>[],
    quizSelected: <QuizType>{},
    questions: <Question[]>[],
    resume: <QuizResume>{},
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
          this.questions.forEach((question: Question) => {
            if (question.id === questionId) {
              question.options = [...res];
            }
          });
        }
      );
    },
    setAnswer(questionId: number, answer: Answer) {
      this.questions.forEach((question: Question) => {
        if (question.id === questionId) {
          question.answer = answer;
        }
      });
    },
    getAnswerQuestionByIndex(index: number) {
      return QuizService.getAnswerQuestionByIndex(
        this.quizSelected.id,
        index,
        this.questions
      ).then((res) => {
        return res;
      });
    },
    getResume() {
      return QuizService.getResume(this.quizSelected.id, this.questions).then(
        (res: any) => {
          this.resume = res;
        }
      );
    },
  },
  getters: {
    isQuizPartial: (state) =>
      state.questions.some((question) => question.answer === undefined),
  },
});
