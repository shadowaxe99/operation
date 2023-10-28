# Scoring System

The scoring system for "Operation: Elysium Rescue" is implemented in the `frontend/utils/scoring.js` file. It is designed to evaluate player performance based on their actions in the game.

## calculateScore Function

The `calculateScore` function is the core of the scoring system. It takes the current game state as an argument and returns the calculated score.

```javascript
export function calculateScore(gameState) {
  // Score calculation logic goes here
}
```

The score is calculated based on the following factors:

- **Time**: The faster the player completes the operation, the higher the score.
- **Accuracy**: The player's accuracy in performing the operation affects the score. Precise actions yield higher scores.
- **Complexity**: The complexity of the operation performed. More complex operations yield higher scores.

## Integration with Game Logic

The scoring system is integrated with the game logic in the `frontend/utils/gameLogic.js` file. The `calculateScore` function is called whenever the game state changes, and the score is updated in the game state.

```javascript
import { calculateScore } from './scoring';

// Game logic code...

gameState.score = calculateScore(gameState);
```

## Real-time Score Updates

The score is displayed in real-time to the player through the `frontend/components/Score.js` component. This component listens for changes in the game state and updates the displayed score accordingly.

```javascript
import React from 'react';

function Score({ gameState }) {
  return (
    <div id="score">
      Score: {gameState.score}
    </div>
  );
}

export default Score;
```

The score is also sent to the backend for storage and potential multiplayer interactions. This is handled in the `backend/controllers/gameController.js` file, where the `handleScoreUpdate` function updates the score in the database.

```javascript
import { Player } from '../models/Player';

export function handleScoreUpdate(playerData) {
  // Update score in database
}
```

This document provides an overview of the scoring system for "Operation: Elysium Rescue". For more detailed information, refer to the code in the mentioned files.