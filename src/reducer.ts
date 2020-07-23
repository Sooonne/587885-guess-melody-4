import {extend} from "./utils";
import {GameType} from "./const";
import questions from "./mocks/questions";


const initialState = {
  mistakes: 0,
  maxMistakes: 3,
  step: -1,
  questions,
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
};

const isArtistAnswerCorrect = (question: { song: any}, userAnswer: { artist: any; }) => {
  return userAnswer.artist === question.song.artist;
};

const isGenreAnswerCorrect = (question: { answers: { [x: string]: { genre: any; }; }; genre: any; }, userAnswer: any[]) => {
  return userAnswer.every((it, i) => {
    return it === (question.answers[i].genre === question.genre);
  });
};

const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  incrementMistake: (question: { type?: any; song?: any; answers?: { [x: string]: { genre: any; }; }; genre?: any; }, userAnswer: any[]) => {
    let answerIsCorrect = false;

     switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

     return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  },
};

const reducer = (state = initialState, action: { type: any; payload: number }) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      if (nextStep >= state.questions.length) {
       return extend({}, initialState);
     }
      return extend(state, {
        step: nextStep,
      });

    case ActionType.INCREMENT_MISTAKES:
      const mistakes = state.mistakes + action.payload;

      if (mistakes >= state.maxMistakes) {
        return extend({}, initialState);
      }
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
