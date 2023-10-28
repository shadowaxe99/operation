```javascript
import React, { useContext } from 'react';
import { GameStateContext } from '../utils/gameLogic';

const BodyPart = ({ part }) => {
  const { gameState, dispatch } = useContext(GameStateContext);

  const handleClick = () => {
    if (gameState.currentTool) {
      dispatch({ type: 'OPERATE_ON_PART', payload: part });
    }
  };

  return (
    <div id={`body-part-${part.id}`} className="body-part" onClick={handleClick}>
      <img src={part.image} alt={part.name} />
    </div>
  );
};

export default BodyPart;
```