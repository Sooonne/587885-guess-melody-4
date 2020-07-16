import React, {useState, useEffect, createRef} from "react";
import {AudioPlayerProps} from "./types";

export const AudioPlayer: React.FC<AudioPlayerProps> = ({isPlaying, src}) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(isPlaying);
  const audioRef = createRef<HTMLAudioElement>();

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;

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
    };

    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }

    return function cleanup() {
      audio.oncanplaythrough = null;
      audio.onplay = null;
      audio.onpause = null;
      audio.ontimeupdate = null;
      audio.src = ``;
      // audio = null;
    };
  }, [audioRef]);

  return (
    <React.Fragment>
      <button
        className={`track__button track__button--${playing ? `pause` : `play`}`}
        type="button"
        disabled={loading}
        onClick={() => setPlaying(!playing)}
      />
      <div className="track__status">
        <audio
          ref={audioRef}
        />
      </div>
    </React.Fragment>
  );
};
