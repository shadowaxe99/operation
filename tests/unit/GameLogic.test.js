```javascript
import { startGame, endGame } from '../../frontend/utils/gameLogic';

describe('Game Logic', () => {
  let gameState;

  beforeEach(() => {
    gameState = startGame();
  });

  it('should initialize game state correctly', () => {
    expect(gameState).toHaveProperty('isRunning', true);
    expect(gameState).toHaveProperty('score', 0);
    expect(gameState).toHaveProperty('bodyParts', expect.any(Array));
    expect(gameState).toHaveProperty('tools', expect.any(Array));
  });

  it('should end the game correctly', () => {
    gameState = endGame(gameState);
    expect(gameState).toHaveProperty('isRunning', false);
  });

  it('should update body parts correctly', () => {
    const initialBodyPartsCount = gameState.bodyParts.length;
    gameState = endGame(gameState);
    expect(gameState.bodyParts.length).toBeLessThan(initialBodyPartsCount);
  });

  it('should update tools correctly', () => {
    const initialToolsCount = gameState.tools.length;
    gameState = endGame(gameState);
    expect(gameState.tools.length).toBeLessThan(initialToolsCount);
  });
});
```