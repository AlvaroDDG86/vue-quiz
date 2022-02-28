import { Answer } from "@/models/answer.model";
import { Question } from "@/models/question.model";
import { QuizType } from "@/models/quiz-type.model";
import { QuizResume } from "@/models/quiz-resume.model";
import { getQueryString } from "./helpers";
import axios from "axios";
import { ActiveLoader, useLoading } from "vue-loading-overlay";
const _axios = axios.create({
  baseURL: "https://printful.com",
});

const $loader = useLoading();
let loader: ActiveLoader;
_axios.interceptors.request.use((config) => {
  loader = $loader.show({});
  return config;
});
_axios.interceptors.response.use(
  (response) => {
    loader.hide();
    return response;
  },
  (error) => {
    loader.hide();
    console.log(error);
  }
);

export const QuizService = {
  getQuizzes(): Promise<QuizType[]> {
    return _axios.get("test-quiz.php?action=quizzes").then((res: any) => {
      return res.data;
    });
  },
  getQuizById(id: number): Promise<Question[]> {
    return _axios
      .get(`test-quiz.php?action=questions&quizId=${id}`)
      .then((res: any) => {
        return res.data;
      });
  },
  getOptionsByQuestionId(
    idQuiz: number,
    idQuestion: number
  ): Promise<Answer[]> {
    return _axios
      .get(
        `test-quiz.php?action=answers&quizId=${idQuiz}&questionId=${idQuestion}`
      )
      .then((res: any) => {
        return res.data;
      });
  },
  getAnswerQuestionByIndex(
    idQuiz: number,
    index: number,
    questions: Question[]
  ): Promise<boolean> {
    const queryString = getQueryString(questions, index);
    return _axios
      .get(`test-quiz.php?action=submit&quizId=${idQuiz}${queryString}`)
      .then((res: any) => {
        return res.data.correct === 1;
      });
  },
  getResume(quizId: number, questions: Question[]): Promise<QuizResume> {
    const queryString = getQueryString(questions);
    return _axios
      .get(`test-quiz.php?action=submit&quizId=${quizId}${queryString}`)
      .then((res: any) => {
        return res.data;
      });
  },
};
