import React, { createContext, useState, useRef } from "react";

export const GlobalState = createContext()

export const GlobalStateProvider = ({ children }) => {
    const [pads, setPads] = useState([
      {
        beatName: "african-pe-med",
        beatKey: "Q",
        beatLink:
          "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/91[kb]african-pe-med.wav.mp3",
      },
      {
        beatName: "brightclap2",
        beatKey: "W",
        beatLink:
          "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/16[kb]brightclap2.wav.mp3",
      },
      {
        beatName: "curiouscym1",
        beatKey: "E",
        beatLink:
          "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/104[kb]curiouscym1.wav.mp3",
      },
      {
        beatName: "chh",
        beatKey: "A",
        beatLink:
          "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/15[kb]chh.wav.mp3",
      },
      {
        beatName: "808bd",
        beatKey: "S",
        beatLink:
          "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/20[kb]808bd.wav.mp3",
      },
      {
        beatName: "analogbd2",
        beatKey: "D",
        beatLink:
          "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/46[kb]analogbd2.wav.mp3",
      },
      {
        beatName: "909sd",
        beatKey: "Z",
        beatLink:
          "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/33[kb]909sd.wav.mp3",
      },
      {
        beatName: "iELECTRIBE-kick-11",
        beatKey: "X",
        beatLink:
          "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/47[kb]iELECTRIBE-kick-11.wav.mp3",
      },
      {
        beatName: "dissonant_tom",
        beatKey: "C",
        beatLink:
          "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/39[kb]dissonant_tom.wav.mp3",
      },
    ]);
const [text, setText] = useState('')
  const state = {
    pads,
    text,
    setText,
  };
    return (
        <GlobalState.Provider value={state}>
{children}
        </GlobalState.Provider>
    )
}


