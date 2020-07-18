import React, {useState} from "react";
import {GenreQuestionScreenProps} from "./types";
import {AudioPlayer} from "../audio-player/audio-player";

export const GenreQuestionScreen: React.FC <GenreQuestionScreenProps> = ({onAnswer, question}) => {
  const [playIndex, setPlayIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([false, false, false, false]);
  const {answers, genre} = question;
  // const setStop = () => {
  //   return setPlayIndex(-1);
  // };
  return (


    <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>

      <form className="game__tracks"
        onSubmit={(evt) => {
          evt.preventDefault();
          onAnswer(question, userAnswers);
        }}
      >

        {answers.map((answer, i) => (
          <div key={`${i}-${answer.src}`} className="track">
            <AudioPlayer
              isPlaying={i === playIndex}
              src={answer.src}
              // setPlaying = {() => setPlayIndex(i)}
              // setStop = {() => setPlayIndex(-1)}
              togglePlaying = {() => setPlayIndex(i === playIndex ? -1 : i)}
            />
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer"
                value={`answer-${i}`}
                id={`answer-${i}`}
                checked={userAnswers[i]}
                onChange = {(evt) => {
                  const value = evt.target.checked;

                  setUserAnswers([...userAnswers.slice(0, i), value, ...userAnswers.slice(i + 1)]);
                }}
              />
              <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
            </div>
          </div>
        ))}

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>

  );
};
