import React, { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard';
import Score from '../components/Score';
import Narration from '../components/Narration';
import { startGame, endGame } from '../utils/gameLogic';

const Game = () => {
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    const game = startGame();
    setGameState(game);
    return () => endGame(game);
  }, []);

  return (
    <div>
      <GameBoard gameState={gameState} />
      <Score gameState={gameState} />
      <Narration gameState={gameState} />
    </div>
  );
};

export default Game;