import { Answer } from "./answer.model";
export interface Question {
  id: number;
  title: string;
  options?: Answer[];
  answer?: Answer;
}
