import { useState, useEffect } from "react";
import { usePage } from "../../contexts/PageContext";
import { animatedIndeces, text1, text2 } from "./words";
import useTextAnimation from "../../animations/useTextAnimation";
import "./home.css";

const Home = () => {
  const page = usePage();
  const heading = useTextAnimation("Welcome.", 4200);
  const [currentWord, setCurrentWord] = useState("");
  const [animatedWord, setAnimatedWord] = useTextAnimation("");

  useEffect(() => {
    const interval = setInterval(() => {
      const combinedText = [...text1, ...text2];
      const randomIndex =
        animatedIndeces[Math.floor(Math.random() * animatedIndeces.length)];

      setCurrentWord(combinedText[randomIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => setAnimatedWord(currentWord), [currentWord]);

  const renderAnimatedWord = (word) => (
    <span>{word === currentWord ? animatedWord : word}</span>
  );

  return (
    <section
      className={`home--section ${page === "Home" ? "visible" : "invisible"}`}
    >
      <h1>{heading}</h1>
      <div className="text--wrapper">
        <p>
          {text1.map((word, i) => (
            <span key={i}>{renderAnimatedWord(word)} </span>
          ))}
        </p>
        <br />
        <p>
          {text2.map((word, i) => (
            <span key={i}>{renderAnimatedWord(word)} </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Home;
