import React, { useState } from 'react'

import './App.css'
import DrumMachine from './components/DrumMachine'
import { GlobalStateProvider } from './contexts/GlobalState'

function App() {
  const checkBut = (e) => {
  console.log(e);
}
  return (
    <div className="App" onKeyPress={checkBut}>
      <GlobalStateProvider>
        <DrumMachine/>
      </GlobalStateProvider>
    </div>
  )
}

export default App
