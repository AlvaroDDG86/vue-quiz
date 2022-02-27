import axios from "axios";

export const QuizService = {
  getQuizzes() {
    return new Promise((respone) => {
      respone([
        {
          id: 141,
          title: "Video Games",
        },
        {
          id: 169,
          title: "Numbers",
        },
        {
          id: 322,
          title: "Movies",
        },
      ]);
    });
    // return axios
    //   .get("https://printful.com/test-quiz.php?action=quizzes")
    //   .then((res: any) => {
    //     return res.data;
    //   });
  },
  getQuizById(id: number) {
    return new Promise((respone) => {
      respone([
        {
          id: 29543,
          title: "What is the highest number used in a Sudoku puzzle?",
        },
        {
          id: 58186,
          title: "How many dots are used in each letter in the Braille system?",
        },
        {
          id: 86721,
          title:
            "How many tenpin bowling skittles need knocking down for a strike?",
        },
        {
          id: 149197,
          title: "How many sides has an octagon?",
        },
        {
          id: 215738,
          title: "How many sides has a 20-pence piece?",
        },
      ]);
    });
    // return axios
    //   .get(
    //     `https://printful.com/test-quiz.php?action=questions&quizId=${id.toString()}`
    //   )
    //   .then((res: any) => {
    //     return res.data;
    //   });
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
