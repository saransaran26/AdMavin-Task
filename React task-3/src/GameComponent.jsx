import React, { useState, useEffect } from 'react';

const GameComponent = () => {
  const keywords = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'melon', 'peach', 'pear', 'plum'];
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  // Function to generate a random keyword
  const generateRandomKeyword = () => {
    const randomIndex = Math.floor(Math.random() * keywords.length);
    return keywords[randomIndex];
  };

  // Function to handle user clicks
  const handleClick = (clickedKeyword) => {
    if (clickedKeyword === currentKeyword) {
      setScore(score + 5);
    } else {
      setScore(score - 2.5);
    }
    setCurrentKeyword('');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      setGameOver(true);
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    const keywordInterval = setInterval(() => {
      setCurrentKeyword(generateRandomKeyword());
    }, 1000);

    return () => clearInterval(keywordInterval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {!gameOver ? (
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 9 }, (_, index) => (
            <div
              key={index}
              className={`w-20 h-20 bg-blue-300 flex items-center justify-center cursor-pointer border border-gray-400 rounded-md ${
                currentKeyword && 'hover:bg-blue-400'
              }`}
              onClick={() => handleClick(keywords[index])}
            >
              {currentKeyword && currentKeyword === keywords[index] && (
                <span className="text-white font-bold">{currentKeyword}</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Game Over!</h1>
          <p className="text-2xl">Final Score: {score}</p>
        </div>
      )}
      {!gameOver && (
        <div className="absolute top-4 right-4">
          <p className="text-lg font-bold">Score: {score}</p>
          <p className="text-lg font-bold">Time Left: {timeLeft}</p>
        </div>
      )}
    </div>
  );
};

export default GameComponent;
