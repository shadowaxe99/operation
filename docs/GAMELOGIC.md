# Game Logic

The game logic for "Operation: Elysium Rescue" is handled primarily in the `frontend/utils/gameLogic.js` file. This file exports a `gameState` object that is used throughout the application to manage the state of the game.

## gameState

The `gameState` object is a centralized state management system that tracks the current state of the game. It includes properties for the current player, the current body part being operated on, the current tool being used, and the current score.

```javascript
export const gameState = {
  currentPlayer: null,
  currentBodyPart: null,
  currentTool: null,
  score: 0,
};
```

## startGame

The `startGame` function is called when a new game is started. It resets the `gameState` to its initial state and sets the `currentPlayer` to the player who started the game.

```javascript
export function startGame(player) {
  gameState.currentPlayer = player;
  gameState.currentBodyPart = null;
  gameState.currentTool = null;
  gameState.score = 0;
}
```

## endGame

The `endGame` function is called when a game is ended. It resets the `gameState` to its initial state.

```javascript
export function endGame() {
  gameState.currentPlayer = null;
  gameState.currentBodyPart = null;
  gameState.currentTool = null;
  gameState.score = 0;
}
```

## selectBodyPart

The `selectBodyPart` function is called when a player selects a body part to operate on. It sets the `currentBodyPart` in the `gameState` to the selected body part.

```javascript
export function selectBodyPart(bodyPart) {
  gameState.currentBodyPart = bodyPart;
}
```

## selectTool

The `selectTool` function is called when a player selects a tool to use. It sets the `currentTool` in the `gameState` to the selected tool.

```javascript
export function selectTool(tool) {
  gameState.currentTool = tool;
}
```

## updateScore

The `updateScore` function is called when the score needs to be updated. It takes a number as an argument and adds it to the current score in the `gameState`.

```javascript
export function updateScore(points) {
  gameState.score += points;
}
```

This file also includes additional game logic functions as needed, such as functions to handle player actions, check game conditions, and update the game state.