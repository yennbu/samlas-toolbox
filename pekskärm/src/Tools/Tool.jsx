import React, { useState, useEffect } from "react";
import './tool.css';
import './modernTools.css';
import ToolImg from '../assets/verktyg1.png';
import ToolImg2 from '../assets/verktyg2.png';
import ToolImg3 from '../assets/verktyg3.png';
import ToolImg4 from '../assets/verktyg4.png';
import ToolImg5 from '../assets/verktyg5.png';
import ModernToolImg from '../assets/modern1.png';
import ModernToolImg2 from '../assets/modern2.png';
import ModernToolImg3 from '../assets/modern3.png';
import Check from '../assets/check.png';
import Cross from '../assets/kryss.png';
import VictoryMessage from "../VictoryMessage/VictoryMessage";

function Tool({ onRestart, resetKey, gameStarted }) {
  const [positions, setPositions] = useState([]);
  const [found, setFound] = useState(new Array(8).fill(false));

  /*const getRandomPosition = () => ({
    top: Math.floor(Math.random() * 75),
    left: Math.floor(Math.random() * 75),
  });
*/
  function getRandomPosition() {
    
    let top = Math.floor(Math.random() * 75);
    let left = Math.floor(Math.random() * 75);
    
    
    while (top > 40 && left < 50) {
      top = Math.floor(Math.random() * 75);
      left = Math.floor(Math.random() * 75);
    }
    
    return { top: top, left: left }
  }

  const isTooClose = (pos1, pos2, minDistance = 15) => {
    const dx = pos1.left - pos2.left;
    const dy = pos1.top - pos2.top;
    let result = Math.sqrt(dx * dx + dy * dy) < minDistance;

    return result;
  };

  const generatePositions = () => {
    const positions = [];
    while (positions.length < 8) {
      const newPos = getRandomPosition();
      const tooClose = positions.some(pos => isTooClose(pos, newPos));
      if (!tooClose) positions.push(newPos);
    }
    return positions;
  };

  useEffect(() => {
    if (gameStarted) {
      setPositions(generatePositions());
      setFound(new Array(8).fill(false));
    }
  }, [gameStarted, resetKey]);

  const handleClick = (index) => {
    setFound(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const allFound = found.slice(0, 5).every(Boolean);

  return (
    <div className="tools" >
      {[ToolImg, ToolImg2, ToolImg3, ToolImg4, ToolImg5].map((imgSrc, index) => {
        const pos = positions[index] || { top: 0, left: 0 };
        return (
          <div
            key={index}
            style={{ position: 'absolute', top: `${pos.top}%`, left: `${pos.left}%` }}
            className="tool"
            onClick={() => handleClick(index)}
          >
            <img src={imgSrc} alt={`Verktyg ${index + 1}`} />
            {found[index] && (
              <div className="found-indicator">
                <img src={Check} alt="Hittad!" />
              </div>
            )}
          </div>
        );
      })}

      {[ModernToolImg, ModernToolImg2, ModernToolImg3].map((imgSrc, index) => {
        const pos = positions[index + 5] || { top: 0, left: 0 };
        return (
          <div
            key={index + 5}
            style={{ position: 'absolute', top: `${pos.top}%`, left: `${pos.left}%` }}
            className="modernTool"
            onClick={() => handleClick(index + 5)}
          >
            <img src={imgSrc} alt={`Verktyg ${index + 6}`} />
            {found[index + 5] && (
              <div className="wrong-indicator">
                <img src={Cross} alt="Fel verktyg!" />
              </div>
            )}
          </div>
        );
      })}

      {allFound && <VictoryMessage onRestart={onRestart} />}
    </div>
  );
}

export default Tool;