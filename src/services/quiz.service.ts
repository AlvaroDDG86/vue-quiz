import { Answer } from "@/models/answer.model";
import { Question } from "@/models/question.model";
import { QuizType } from "@/models/quiz-type.model";
import axios from "axios";
// import { useLoading } from 'vue-loading-overlay'
const _axios = axios.create({
  baseURL: "https://printful.com",
});

_axios.interceptors.request.use((config) => {
  // loader = $loader.show({});
  return config;
});
_axios.interceptors.response.use(
  (response) => {
    // loader.hide()
    return response;
  },
  (error) => console.log(error)
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
  getAnswerByQuestionId(id: number) {
    return _axios
      .get("test-quiz.php?action=answers&quizId=141&questionId=3193")
      .then((res: any) => {
        return res.data;
      });
  },
  getResume() {
    return _axios
      .get("test-quiz.php?action=answers&quizId=141&questionId=3193")
      .then((res: any) => {
        return res.data;
      });
  },
};
