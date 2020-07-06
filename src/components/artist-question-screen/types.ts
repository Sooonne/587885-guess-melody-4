import {GameType} from "../../const";
import { ArtistQuestion } from "../app/types";

export interface ArtistQuestionScreenProps {
  onAnswer: Function,
  question: ArtistQuestion
};