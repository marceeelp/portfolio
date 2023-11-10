import { useState, useEffect, useRef } from "react";

const useTextAnimation = (initialText, delay = 0) => {
  const [text, setText] = useState(initialText);
  const timeoutRef = useRef(null);

  useEffect(() => {
    updateText(initialText);

    return () => clearTimeout(timeoutRef.current);
  }, [timeoutRef]);

  const updateText = (newText) => {
    let iterations = 0;

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const interval = setInterval(() => {
        setText(() => mixText(newText, iterations));
        if (iterations >= newText.length) return clearInterval(interval);

        iterations += 1 / 3;
      }, 30);

      return () => clearInterval(interval);
    }, delay);
  };
  return [text, updateText];
};

const mixText = (newText, iterations) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const changedText = newText
    .split("")
    .map((letter, i) => {
      if (i < iterations) return newText[i];
      return letters[Math.floor(Math.random() * letters.length)];
    })
    .join("");

  return changedText;
};

export default useTextAnimation;
