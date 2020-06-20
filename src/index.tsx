import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app";

const Settings = {
  ERRORS_COUNT: 6
};

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App errorsCount = {Settings.ERRORS_COUNT} />, root
);

// i need some changes for commit
