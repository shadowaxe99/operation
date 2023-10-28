```javascript
// Importing necessary dependencies
import { useState, useEffect } from 'react';

// Initial state for the score
const initialScoreState = {
  successfulOperations: 0,
  failedOperations: 0,
  totalOperations: 0,
};

// Scoring function
const useScoring = () => {
  const [score, setScore] = useState(initialScoreState);

  // Function to update the score based on the operation result
  const updateScore = (operationResult) => {
    setScore((prevScore) => ({
      ...prevScore,
      successfulOperations: operationResult ? prevScore.successfulOperations + 1 : prevScore.successfulOperations,
      failedOperations: !operationResult ? prevScore.failedOperations + 1 : prevScore.failedOperations,
      totalOperations: prevScore.totalOperations + 1,
    }));
  };

  // Function to reset the score
  const resetScore = () => {
    setScore(initialScoreState);
  };

  // Function to calculate the final score
  const calculateScore = () => {
    return score.successfulOperations / score.totalOperations * 100;
  };

  return { score, updateScore, resetScore, calculateScore };
};

export default useScoring;
```