```javascript
const { calculateScore } = require('../../frontend/utils/scoring');

describe('Scoring System', () => {
  let gameState;

  beforeEach(() => {
    gameState = {
      playerData: {
        successfulOperations: 0,
        failedOperations: 0,
        timeTaken: 0,
      },
    };
  });

  test('calculateScore should return correct score for successful operations', () => {
    gameState.playerData.successfulOperations = 5;
    const score = calculateScore(gameState);
    expect(score).toBe(500);
  });

  test('calculateScore should return correct score for failed operations', () => {
    gameState.playerData.failedOperations = 3;
    const score = calculateScore(gameState);
    expect(score).toBe(-300);
  });

  test('calculateScore should return correct score for time taken', () => {
    gameState.playerData.timeTaken = 120;
    const score = calculateScore(gameState);
    expect(score).toBe(-120);
  });

  test('calculateScore should return correct score for a mix of successful and failed operations and time taken', () => {
    gameState.playerData.successfulOperations = 5;
    gameState.playerData.failedOperations = 3;
    gameState.playerData.timeTaken = 120;
    const score = calculateScore(gameState);
    expect(score).toBe(80);
  });
});
```