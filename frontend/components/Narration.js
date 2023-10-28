import React, { useContext } from 'react';
import { GameStateContext } from '../utils/gameLogic';

const Narration = () => {
  const { gameState } = useContext(GameStateContext);

  const updateNarration = () => {
    switch (gameState.currentChallenge) {
      case 'challenge1':
        return 'Narration for challenge 1...';
      case 'challenge2':
        return 'Narration for challenge 2...';
      case 'challenge3':
        return 'Narration for challenge 3...';
      default:
        return 'Welcome to Operation: Elysium Rescue. Let\'s begin!';
    }
  };

  return (
    <div id="narration">
      <p>{updateNarration()}</p>
    </div>
  );
};

export default Narration;