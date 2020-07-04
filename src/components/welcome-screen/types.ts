import {MouseEvent} from "react";

export interface AppProps {errorsCount: number, 
  onWelcomeButtonClick: (evt: React.MouseEvent<HTMLButtonElement>) => void};
