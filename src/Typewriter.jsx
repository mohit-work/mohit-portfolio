import React, { useState, useEffect } from "react";

const Typewriter = ({ texts, typingSpeed = 80, loopDelay = 2000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex(prev => prev + 1), typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(prev => prev - 1), typingSpeed / 2);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), loopDelay);
    } else if (isDeleting && charIndex === 0) {
      // Use a small delay to avoid synchronous state update warning in effects
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, loopDelay]);

  return (
    <span className="font-inherit text-[#d1d5db] font-medium text-xl inline-block min-h-[1.5rem]">
      {texts[textIndex].substring(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
