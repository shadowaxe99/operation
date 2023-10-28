Shared Dependencies:

1. **Exported Variables**: 
   - `gameState` (frontend/utils/gameLogic.js, frontend/pages/game.js, frontend/components/GameBoard.js, frontend/components/BodyPart.js, frontend/components/Tool.js, frontend/components/Score.js, frontend/components/Narration.js)
   - `playerData` (backend/models/Player.js, backend/controllers/gameController.js, backend/routes/gameRoutes.js, backend/server.js)

2. **Data Schemas**: 
   - `GameSchema` (backend/models/Game.js, backend/controllers/gameController.js, backend/routes/gameRoutes.js, backend/server.js)
   - `PlayerSchema` (backend/models/Player.js, backend/controllers/gameController.js, backend/routes/gameRoutes.js, backend/server.js)

3. **DOM Element IDs**: 
   - `game-board` (frontend/components/GameBoard.js, frontend/styles/GameBoard.css)
   - `body-part` (frontend/components/BodyPart.js, frontend/styles/BodyPart.css)
   - `tool` (frontend/components/Tool.js, frontend/styles/Tool.css)
   - `score` (frontend/components/Score.js, frontend/styles/Score.css)
   - `narration` (frontend/components/Narration.js, frontend/styles/Narration.css)

4. **Message Names**: 
   - `gameUpdate` (frontend/utils/gameLogic.js, frontend/pages/game.js, backend/controllers/gameController.js, backend/routes/gameRoutes.js, backend/server.js)
   - `scoreUpdate` (frontend/utils/scoring.js, frontend/components/Score.js, backend/controllers/gameController.js, backend/routes/gameRoutes.js, backend/server.js)

5. **Function Names**: 
   - `startGame` (frontend/pages/game.js, frontend/utils/gameLogic.js)
   - `endGame` (frontend/pages/game.js, frontend/utils/gameLogic.js)
   - `calculateScore` (frontend/utils/scoring.js, frontend/components/Score.js)
   - `updateNarration` (frontend/components/Narration.js, frontend/utils/gameLogic.js)
   - `handleGameUpdate` (backend/controllers/gameController.js, backend/routes/gameRoutes.js, backend/server.js)
   - `handleScoreUpdate` (backend/controllers/gameController.js, backend/routes/gameRoutes.js, backend/server.js)