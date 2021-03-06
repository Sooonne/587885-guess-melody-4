import React, {useState} from "react";
import {ArtistQuestionScreenProps} from "./types";
import {AudioPlayer} from "../audio-player/audio-player";

export const ArtistQuestionScreen: React.FC <ArtistQuestionScreenProps> = ({onAnswer, question}) => {
  const {answers, song} = question;
  const [playing, setPlaying] = useState(true);
  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          <AudioPlayer
            isPlaying = {playing}
            src = {song.src}
            togglePlaying = {() => setPlaying(!playing)}
          />
        </div>
      </div>

      <form className="game__artist">
        {answers.map((answer, i) => (
          <div key={answer.artist} className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`}
              onChange={(evt) => {
                evt.preventDefault();
                onAnswer(question, answer);
              }}
            />
            <label className="artist__name" htmlFor={`answer-${i}`}>
              <img className="artist__picture" src={answer.picture} alt={answer.artist} />
              {answer.artist}
            </label>
          </div>
        ))}
      </form>
    </section>
  );
};
