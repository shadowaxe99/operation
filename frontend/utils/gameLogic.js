```javascript
import { useState, useEffect } from 'react';

// Initial game state
const initialGameState = {
  gameStarted: false,
  currentBodyPart: null,
  currentTool: null,
  challenges: [],
  completedChallenges: [],
};

// Game logic
const useGameLogic = () => {
  const [gameState, setGameState] = useState(initialGameState);

  // Start game
  const startGame = () => {
    setGameState({
      ...gameState,
      gameStarted: true,
    });
  };

  // End game
  const endGame = () => {
    setGameState(initialGameState);
  };

  // Select body part
  const selectBodyPart = (bodyPart) => {
    setGameState({
      ...gameState,
      currentBodyPart: bodyPart,
    });
  };

  // Select tool
  const selectTool = (tool) => {
    setGameState({
      ...gameState,
      currentTool: tool,
    });
  };

  // Add challenge
  const addChallenge = (challenge) => {
    setGameState({
      ...gameState,
      challenges: [...gameState.challenges, challenge],
    });
  };

  // Complete challenge
  const completeChallenge = (challenge) => {
    setGameState({
      ...gameState,
      completedChallenges: [...gameState.completedChallenges, challenge],
    });
  };

  // Update game state based on player actions
  useEffect(() => {
    if (gameState.currentBodyPart && gameState.currentTool) {
      const challenge = gameState.challenges.find(
        (ch) => ch.bodyPart === gameState.currentBodyPart && ch.tool === gameState.currentTool
      );

      if (challenge) {
        completeChallenge(challenge);
      }
    }
  }, [gameState.currentBodyPart, gameState.currentTool]);

  return {
    gameState,
    startGame,
    endGame,
    selectBodyPart,
    selectTool,
    addChallenge,
  };
};

export default useGameLogic;
```