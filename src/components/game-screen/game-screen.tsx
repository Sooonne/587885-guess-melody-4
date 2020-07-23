import React from "react";
import {GameType} from '../../const';
import {GameScreenProps} from "./types"
import {Mistakes} from "../mistakes/mistakes";
import {connect} from "react-redux";

export const GameScreen: React.FC <GameScreenProps> = ({type, children, mistakes}) => {
  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        <Mistakes
        count = {mistakes}
        />

      </header>

      {children}

    </section>
  );
};

const mapStateToProps = (state: { mistakes: any; }) => ({
  mistakes: state.mistakes,
});

export default connect(mapStateToProps)(GameScreen);
