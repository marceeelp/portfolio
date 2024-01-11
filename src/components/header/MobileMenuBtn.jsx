import "./mobileMenuBtn.css";

const MobileMenuBtn = ({ isClicked, handleClick }) => {
  return (
    <div
      className={`menu--btn ${isClicked ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className={`line--top ${isClicked ? "active" : ""}`}></div>
      <div className={`line--center ${isClicked ? "active" : ""}`}></div>
      <div className={`line--bottom ${isClicked ? "active" : ""}`}></div>
    </div>
  );
};

export default MobileMenuBtn;
