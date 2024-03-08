import React, { useState } from 'react';
import './Flashcard.css';
import cardData from '../data/CardData.js';

const FlashcardApp = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState(cardData);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
    }
  };

  const handleNextClick = () => {
    setIsFlipped(false);
    let randomIndex = Math.floor(Math.random() * cards.length);
    while (currentCardIndex == randomIndex) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }
    setCurrentCardIndex(randomIndex);
    setShowAnswer(false);
  };

  return (
    <div className="flashcard-app">
      <div className="card-set-info">
        <p>Total Cards: {cards.length}</p>
      </div>
      <div className="card-container" onClick={handleCardClick}>
        <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
          <div className="card-front">
            {cards[currentCardIndex].question}
          </div>
          <div className="card-back">
            {showAnswer ? cards[currentCardIndex].answer : ''}
          </div>
        </div>
      </div>
      <div className="controls">
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
  }  

export default FlashcardApp;
