```javascript
const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  gameData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
  },
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
```