import React, {useState, useEffect, useRef} from "react";
import {AudioPlayerProps} from "./types";

export const AudioPlayer: React.FC<AudioPlayerProps> = ({isPlaying, src, togglePlaying}) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  // const [playing, setPlaying] = useState(isPlaying);
  const audioRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;

    audio.oncanplaythrough = () => {
      setLoading(false);
    };

    // audio.onplay = () => {
    //   setPlaying(true);
    // };

    // audio.onpause = () => {
    //   setPlaying(false);
    // };

    audio.ontimeupdate = () => {
      setProgress(audio.currentTime);
    };

    return function cleanup() {
      audio.oncanplaythrough = null;
      audio.onplay = null;
      audio.onpause = null;
      audio.ontimeupdate = null;
      audio.src = ``;
      // audio = null;
    };
  }, [audioRef]);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audioRef, isPlaying]);

  return (
    <React.Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={loading}
        onClick={() => togglePlaying()}

      />
      <div className="track__status">
        <audio
          ref={audioRef}
        />
      </div>
    </React.Fragment>
  );
};
