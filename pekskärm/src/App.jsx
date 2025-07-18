import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Background from './assets/map.jpg';
import SamlaImg from './Samla/Samla.jsx';
import SpeechBubble from './SpeechBubble/SpeechBubble.jsx';
import Tool from './Tools/Tool.jsx';
import StartMessage from './StartMessage/StartMessage.jsx';

function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [resetCounter, setResetCounter] = useState(0);

  const handleRestart = () => {
    setGameStarted(false);  
    setResetCounter(prev => prev + 1);
  };

  return (
    <div style={{
      backgroundImage: `url(${Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh",
      width: "100%",
    }}>

      <SamlaImg />
      <SpeechBubble text={"Kan du hitta alla verktyg från stenåldern?"} />
      {!gameStarted && <StartMessage onStart={() => setGameStarted(true)} />}
      {gameStarted && (
        <Tool
          onRestart={handleRestart}
          resetKey={resetCounter}
          gameStarted={gameStarted}
        />
      )}
    </div>
  )
}

export default App;