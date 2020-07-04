import {GameType} from "../../const";

export interface ArtistQuestionScreenProps {
  onAnswer: Function,
  question: {
    answers: Array<{
      artist: string,
      picture: string,
    }>,
    song: {
      artist: string,
      src: string,
    },
    type: GameType,

  }
};