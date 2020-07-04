import {GameType} from "../../const";

export interface GenreQuestionScreenProps {
  onAnswer: Function,
   question: 
    {answers: Array<{
      src: string,
      genre: string,
    }>,
    genre: string,
    type: GameType,
  }
};