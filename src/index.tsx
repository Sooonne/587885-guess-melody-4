import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app";
import questions from "./mocks/questions.js";

const Settings = {
  ERRORS_COUNT: 6
};

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App 
    errorsCount = {Settings.ERRORS_COUNT} 
    questions = {questions}
    />, root
);


