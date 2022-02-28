import { Question } from "@/models/question.model";

export const getQueryString = (
  questions: Question[],
  position?: number
): string => {
  const queryString = questions.reduce((prev, current, index) => {
    const questionId =
      !position || position === index ? current?.answer?.id : "";
    prev = `${prev}&answers[]=${questionId}`;
    return prev;
  }, "");
  return queryString;
};
