import React, {useState, useEffect} from "react";
import {AudioPlayerProps} from "./types";

export const AudioPlayer: React.FC<AudioPlayerProps> = ({isPlaying, src}) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(isPlaying);

  useEffect(() => {
    let audio = new Audio(src);

    audio.oncanplaythrough = () => {
      setLoading(false);
    };

    audio.onplay = () => {
      setPlaying(true);
    };

    audio.onpause = () => {
      setPlaying(false);
    };
    
    audio.ontimeupdate = () => {
      setProgress(audio.currentTime);
    }

    return function cleanup() {
      audio.oncanplaythrough = null;
      audio.onplay = null;
      audio.onpause = null;
      audio.ontimeupdate = null;
      audio.src = ``;
      audio = null;
    }
  });

  return (
    <React.Fragment>
      <button
        className={`track__button track__button--${playing ? `pause` : `play`}`}
        type="button"
        disabled={loading}
        onClick={() => setPlaying(!playing)}
      />
      <div className="track__status">
        <audio />
      </div>
    </React.Fragment>
  );
};
