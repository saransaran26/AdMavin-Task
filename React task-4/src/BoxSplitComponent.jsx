import React, { useState } from 'react';

const BoxSplitComponent = () => {
  const [squares, setSquares] = useState([{ key: 1, size: 200, x: 0, y: 0 }]);

  const splitSquare = (index) => {
    const updatedSquares = [...squares];
    const squareToSplit = updatedSquares[index];

    // Remove the original square
    updatedSquares.splice(index, 1);

    // Split the square into four equal smaller squares
    updatedSquares.push(
      { key: squareToSplit.key * 10 + 1, size: squareToSplit.size / 2, x: squareToSplit.x, y: squareToSplit.y },
      { key: squareToSplit.key * 10 + 2, size: squareToSplit.size / 2, x: squareToSplit.x + squareToSplit.size / 2, y: squareToSplit.y },
      { key: squareToSplit.key * 10 + 3, size: squareToSplit.size / 2, x: squareToSplit.x, y: squareToSplit.y + squareToSplit.size / 2 },
      { key: squareToSplit.key * 10 + 4, size: squareToSplit.size / 2, x: squareToSplit.x + squareToSplit.size / 2, y: squareToSplit.y + squareToSplit.size / 2 }
    );

    setSquares(updatedSquares);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {squares.map((square) => (
        <div
          key={square.key}
          className="absolute border border-black"
          style={{
            width: square.size,
            height: square.size,
            top: `calc(50% + ${square.y}px - ${square.size / 2}px)`,
            left: `calc(50% + ${square.x}px - ${square.size / 2}px)`,
          }}
          onClick={() => splitSquare(squares.findIndex((s) => s.key === square.key))}
        ></div>
      ))}
    </div>
  );
};

export default BoxSplitComponent;
