import React, { useRef, useContext, useEffect } from "react";
import { GlobalState } from "../contexts/GlobalState";

import './DrumPad.css'
const DrumPad = ({pad}) => {
    const audioElement = useRef(null);
    const { setText } = useContext(GlobalState);

    const playBeat = (e) => {
      const audio = audioElement.current;
        audio.currentTime = 0;
        audio.play()
        setText(pad.beatName);
        
    };
   const playKey = (e) => {
     if (e.key.toUpperCase() == pad.beatKey) {
       const audio = audioElement.current;
       audio.currentTime = 0;
       audio.play();
       setText(pad.beatName);
     }
   };

   useEffect(() => {
     window.addEventListener("keydown", playKey);
   }, []);
    
    return (
      <div className="drum-pad" id={pad.beatKey} onClick={playBeat}>
        <h1>{pad.beatKey}</h1>
        <audio
          className="clip"
          id={pad.beatKey}
          src={pad.beatLink}
          ref={audioElement}
        ></audio>
      </div>
    );
}

export default DrumPad
