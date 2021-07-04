import React, { useContext, useEffect } from "react";
import { GlobalState } from '../contexts/GlobalState';
import DrumPad from './DrumPad';
import './DrumMachine.css'
import Display from "./Display";
const DrumMachine = () => {
    const { pads } = useContext(GlobalState)
    
    const drumPads = pads.map((pad, idx) => {
        return <DrumPad key={ idx} pad={pad}/>
    })
    return (
      <div id="drum-machine" className="drum_machine">
        <div className="padButt">{drumPads}</div>
        <Display />
      </div>
    );
}

export default DrumMachine
