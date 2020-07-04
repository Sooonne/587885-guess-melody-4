import React, { useState } from "react";
import {WelcomeScreen} from "../welcome-screen/welcome-screen";
import {AppProps} from "./types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {ArtistQuestionScreen} from "../artist-question-screen/artist-question-screen";
import {GenreQuestionScreen} from "../genre-question-screen/genre-question-screen";
import {GameType} from "../../const";

export const App: React.FC <AppProps> = ({errorsCount, questions}) => {
  // eslint-disable-next-line react/prop-types
  // const {errorsCount} = props;
  
  const [step, setStep] = useState(-1);
  const renderGameScreen = () => {
    
    const question = questions[step];
    
    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onWelcomeButtonClick={() => {
            useState(0);
          }}
        />
      );
    }


    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <ArtistQuestionScreen
              question={question}
              onAnswer={() => {
                useState(step + 1);
              }}
            />
          );
        case GameType.GENRE:
          return (
            <GenreQuestionScreen
              question={question}
              onAnswer={() => {
                useState(step + 1)
              }}
            />
           );
       }
     }
     return null;

  }

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      {renderGameScreen()}        
      </Route>
      <Route exact path="/artist">
        <ArtistQuestionScreen
          question={questions[1]}
          onAnswer={() => {}}
        />
      </Route>
      <Route exact path="/genre">
        <GenreQuestionScreen
          question={questions[0]}
          onAnswer={() => {}}
        />
      </Route>
    </Switch>
  </BrowserRouter>
  ); 
};

