```javascript
import React, { useContext } from 'react';
import { GameStateContext } from '../utils/gameLogic';

const Tool = ({ tool }) => {
    const { gameState, dispatch } = useContext(GameStateContext);

    const handleToolUse = () => {
        if (gameState.currentTool !== tool.id) {
            dispatch({ type: 'SET_TOOL', payload: tool.id });
        }
    };

    return (
        <div id="tool" onClick={handleToolUse}>
            <img src={tool.image} alt={tool.name} />
            <p>{tool.name}</p>
        </div>
    );
};

export default Tool;
```