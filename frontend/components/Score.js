```javascript
import React, { useContext } from 'react';
import { GameStateContext } from '../utils/gameLogic';

const Score = () => {
  const { gameState } = useContext(GameStateContext);

  return (
    <div id="score">
      <h2>Score: {gameState.score}</h2>
    </div>
  );
};

export default Score;
```