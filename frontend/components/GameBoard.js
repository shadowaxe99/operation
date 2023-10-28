import React, { useState, useEffect } from 'react';
import BodyPart from './BodyPart';
import Tool from './Tool';
import gameState from '../utils/gameLogic';

const GameBoard = () => {
  const [bodyParts, setBodyParts] = useState([]);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    setBodyParts(gameState.bodyParts);
    setTools(gameState.tools);
  }, []);

  return (
    <div id="game-board">
      {bodyParts.map((part, index) => (
        <BodyPart key={index} part={part} />
      ))}
      {tools.map((tool, index) => (
        <Tool key={index} tool={tool} />
      ))}
    </div>
  );
};

export default GameBoard;