import React, { createContext, useState, useRef } from "react";

export const GlobalState = createContext()

export const GlobalStateProvider = ({ children }) => {
    const [pads, setPads] = useState([
      {
        beatName: "808agogo",
        beatKey: "Q",
        beatLink: "./src/beats/808agogo.wav",
      },
      { beatName: "808bd2", beatKey: "W", beatLink: "./src/beats/808bd2.wav" },
      { beatName: "909-bright-ohh", beatKey: "E", beatLink: "./src/beats/909-bright-ohh.wav" },
      { beatName: "african-pe-lo", beatKey: "A", beatLink: "./src/beats/african-pe-lo.wav" },
      { beatName: "badcow", beatKey: "S", beatLink: "./src/beats/badcow.wav" },
      { beatName: "bell2", beatKey: "D", beatLink: "./src/beats/bell2.wav" },
      { beatName: "clap808", beatKey: "Z", beatLink: "./src/beats/clap808.wav" },
      { beatName: "curiouscym2", beatKey: "X", beatLink: "./src/beats/curiouscym2.wav" },
      { beatName: "dissonant_tom", beatKey: "C", beatLink: "./src/beats/dissonant_tom.wav" },
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


