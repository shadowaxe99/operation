```javascript
const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router.route('/')
    .get(gameController.getAllGames)
    .post(gameController.createGame);

router.route('/:id')
    .get(gameController.getGame)
    .patch(gameController.updateGame)
    .delete(gameController.deleteGame);

router.route('/:id/start')
    .post(gameController.startGame);

router.route('/:id/end')
    .post(gameController.endGame);

router.route('/:id/score')
    .get(gameController.getScore)
    .post(gameController.updateScore);

module.exports = router;
```