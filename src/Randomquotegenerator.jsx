// src/QuoteGenerator.js
import React, { useState } from 'react';


const quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "The only way to do great work is to love what you do.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
];

const Randomquotegenerator = () => {
  const [quote, setQuote] = useState('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <p className="quote">{quote || "Click the button to get a quote!"}</p>
      <button onClick={getRandomQuote} className="button">
        Get a Quote
      </button>
    </div>
  );
};

export default Randomquotegenerator;
