import React, {useState} from 'react';
import {WelcomeScreen} from '../welcome-screen/welcome-screen';
import {AppProps} from './types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import {ArtistQuestionScreen} from '../artist-question-screen/artist-question-screen';
import {GenreQuestionScreen} from '../genre-question-screen/genre-question-screen';
import {GameType} from '../../const';
import {GameScreen} from '../game-screen/game-screen';


const App: React.FC<any> = ({maxMistakes, questions, onUserAnswer, onWelcomeButtonClick, step}) => {

  // const [step, setStep] = useState(-1);
  const renderGameScreen = () => {
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={maxMistakes}
          // onWelcomeButtonClick={() => {
          //   setStep(0);
          // }}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type={question.type}
            >

              <ArtistQuestionScreen
                question={question}
                // onAnswer={() => {
                //   setStep(step + 1);
                // }}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen
              type={question.type}
            >

              <GenreQuestionScreen
                question={question}
                // onAnswer={() => {
                //   setStep(step + 1);
                // }}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }
    return null;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderGameScreen()}
        </Route>
        <Route exact path="/artist">
          <ArtistQuestionScreen question={questions[1]} onAnswer={() => {}} />
        </Route>
        <Route exact path="/genre">
          <GenreQuestionScreen question={questions[0]} onAnswer={() => {}} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state: { step: number; maxMistakes: number; questions: any }) => ({
  step: state.step,
  maxMistakes: state.maxMistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: number; }) => void) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question: {
      type?: any; song?: any; answers?: { [x: string]: { genre: any; }; }; genre?: any; // onWelcomeButtonClick={() => {
    }, answer: any[]) {
    dispatch(ActionCreator.incrementMistake(question, answer));
    dispatch(ActionCreator.incrementStep());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

