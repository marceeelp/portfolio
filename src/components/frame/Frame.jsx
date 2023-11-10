import useTextAnimation from "../../animations/useTextAnimation";
import "./frame.css";

const Frame = ({ isClicked }) => {
  const [footer] = useTextAnimation("2023 Marcel Peda.", 4200);
  const corners = [
    "top-horizontal",
    "top-vertical",
    "bottom-horizontal",
    "bottom-vertical",
  ];

  return (
    <div className="frame">
      {corners.map((corner, i) => (
        <div
          key={i}
          className={`${corner}`}
          style={{ zIndex: isClicked ? 5 : 0 }}
        ></div>
      ))}

      <small className="copyright" style={{ zIndex: isClicked ? 5 : 0 }}>
        &copy;{footer}
      </small>
    </div>
  );
};

export default Frame;
