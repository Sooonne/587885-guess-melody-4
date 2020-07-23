import React from "react";
import propTypes from "prop-types";
import {MistakesProps} from "./types";


export const Mistakes: React.FC <MistakesProps> = ({count}) => {

  const mistakes = new Array(count).fill(``);

  return (
    <div className="game__mistakes">
      {mistakes.map((it, i) => <div key={`mistake-${i}`} className="wrong" />)}
    </div>
  );
};

