import axios from "axios";

export const QuizService = {
  getQuizzes() {
    return axios
      .get("https://printful.com/test-quiz.php?action=quizzes")
      .then((res: any) => {
        return res.data;
      });
  },
  getQuizById(id: number) {
    return axios
      .get("https://printful.com/test-quiz.php?action=questions&quizId=141")
      .then((res: any) => {
        return res.data;
      });
  },
  getQuestionsByQuestionId(id: number) {
    return axios
      .get(
        "https://printful.com/test-quiz.php?action=answers&quizId=141&questionId=3193"
      )
      .then((res: any) => {
        return res.data;
      });
  },
  getAnswerByQuestionId(id: number) {
    return axios
      .get(
        "https://printful.com/test-quiz.php?action=answers&quizId=141&questionId=3193"
      )
      .then((res: any) => {
        return res.data;
      });
  },
  getResume() {
    return axios
      .get(
        "https://printful.com/test-quiz.php?action=answers&quizId=141&questionId=3193"
      )
      .then((res: any) => {
        return res.data;
      });
  },
};
