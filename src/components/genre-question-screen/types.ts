import {GameType} from "../../const";
import { GenreQuestion } from "../app/types";

export interface GenreQuestionScreenProps {
  onAnswer: Function,
  question: GenreQuestion
};