```javascript
const Game = require('../models/Game');
const Player = require('../models/Player');

exports.handleGameUpdate = async (req, res) => {
  try {
    const { gameState } = req.body;
    const game = await Game.findOneAndUpdate({ _id: req.params.id }, { gameState }, { new: true });
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.handleScoreUpdate = async (req, res) => {
  try {
    const { score } = req.body;
    const player = await Player.findOneAndUpdate({ _id: req.params.id }, { score }, { new: true });
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
```