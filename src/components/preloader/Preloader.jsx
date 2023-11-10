import { useEffect } from "react";
import useTextAnimation from "../../animations/useTextAnimation";
import preloaderAnimation from "../../animations/preloaderAnimation";
import "./preloader.css";

const Preloader = () => {
  const name = useTextAnimation("Marcel Peda", 1000);
  const portfolio = useTextAnimation("Portfolio", 1000);

  useEffect(() => {
    const timeout = setTimeout(() => preloaderAnimation(), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="preloader">
      <div className="preloader--text">
        <h3>{name}</h3>
        <h3 className="preloader--portfolio">{portfolio}</h3>
      </div>
    </div>
  );
};

export default Preloader;
