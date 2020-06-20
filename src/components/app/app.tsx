import React from "react";
import {WelcomeScreen} from "../welcome-screen/welcome-screen";
import {AppProps} from "./types"

export const App: React.FC <AppProps> = ({errorsCount}) => {
  // eslint-disable-next-line react/prop-types
  // const {errorsCount} = props;

  return (
    <WelcomeScreen errorsCount={errorsCount} />
  );
};
