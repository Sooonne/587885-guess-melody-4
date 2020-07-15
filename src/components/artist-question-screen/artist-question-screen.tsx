import React, { useState } from "react";
import {ArtistQuestionScreenProps} from "./types";

export const ArtistQuestionScreen: React.FC <ArtistQuestionScreenProps> = ({onAnswer, question}) => {
  const {answers, song,} = question;
  return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button" />
            <div className="track__status">
              <audio
                src={song.src}
              />
            </div>
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
