import React from "react";
import ReactDOM from "react-dom";
import {createStore, compose} from "redux";
import {Provider} from "react-redux";
import {App} from "./components/app/app";
// import questions from "./mocks/questions";
import {reducer} from "./reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const root = document.querySelector(`#root`);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, root
);


