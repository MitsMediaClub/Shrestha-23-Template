import "./card.css";
import "./flip-transition.css";
import card1 from "../../assets/Schedule/Card1.png";
import card1back from "../../assets/Schedule/Card1Back.png";
function Card({ onClick }) {
  return (
    <div className="card " onClick={onClick}>
      <div className="card-front unselectable">
        <img src={card1} alt="" className="w-full h-full z-0" />
      </div>
      <div className="card-back unselectable">
        <img src={card1back} alt="" className="w-full h-full z-0" />
      </div>
    </div>
  );
}

export default Card;
