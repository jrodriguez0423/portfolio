import React, { useState, useEffect } from 'react';
// Import the CSS file if you have any styling for TypingAnimation
// import './TypingAnimation.css';

const TypingAnimation = ({ text, speed, style }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [displayedText, index, text, speed]);

  return <h2 style={style}>{displayedText}</h2>;
};

TypingAnimation.defaultProps = {
  speed: 100,  // Set to a lower value to make it faster
  style: {},   // Default style if none is provided
};

export default TypingAnimation;
