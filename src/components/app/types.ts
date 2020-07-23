import {GameType} from "../../const";

export interface ArtistQuestion {
  answers: Array<{
    artist: string;
    picture: string;
  }>;
  song: {
    artist: string;
    src: string;
  };
  type: GameType.ARTIST;
}

export interface GenreQuestion {
  answers: Array<{
    src: string;
    genre: string;
  }>;
  genre: string;
  type: GameType.GENRE;
}

export interface AppProps {
  // maxMistakes: number;
  // onWelcomeButtonClick: Function;
  // // questions: (GenreQuestion | ArtistQuestion)[];
  // onUserAnswer: Function;
  // step: number;
}

