import { gsap } from "gsap";

const preloaderAnimation = () => {
  gsap.to(".preloader", {
    opacity: 0,
    duration: 3,
    onComplete: () => {
      document.querySelector(".preloader").style.display = "none";
    },
  });
  return () => clearTimeout(timeout);
};

export default preloaderAnimation;
