```javascript
const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Operation: Elysium Rescue', function() {
  let driver;

  beforeAll(async function() {
    driver = await new Builder().forBrowser('firefox').build();
  });

  afterAll(async function() {
    await driver.quit();
  });

  it('should load game page', async function() {
    await driver.get('http://localhost:3000/game');
    const title = await driver.getTitle();
    expect(title).toEqual('Operation: Elysium Rescue');
  });

  it('should start game on button click', async function() {
    const startButton = await driver.findElement(By.id('start-game'));
    await startButton.click();
    const gameState = await driver.executeScript('return window.gameState');
    expect(gameState).toEqual('started');
  });

  it('should end game on button click', async function() {
    const endButton = await driver.findElement(By.id('end-game'));
    await endButton.click();
    const gameState = await driver.executeScript('return window.gameState');
    expect(gameState).toEqual('ended');
  });

  it('should update score on game update', async function() {
    const scoreBefore = await driver.executeScript('return window.score');
    await driver.executeScript('window.dispatchEvent(new CustomEvent("gameUpdate"))');
    const scoreAfter = await driver.executeScript('return window.score');
    expect(scoreAfter).toBeGreaterThan(scoreBefore);
  });

  it('should update narration on game update', async function() {
    const narrationBefore = await driver.findElement(By.id('narration')).getText();
    await driver.executeScript('window.dispatchEvent(new CustomEvent("gameUpdate"))');
    const narrationAfter = await driver.findElement(By.id('narration')).getText();
    expect(narrationAfter).not.toEqual(narrationBefore);
  });
});
```