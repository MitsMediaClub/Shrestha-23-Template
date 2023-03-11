import "./card.css";
import "./flip-transition.css";

function Card({ onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-front">
        <button onlick={console.log("Works")}>Hello</button>
      </div>
      <div className="card-back">Back</div>
    </div>
  );
}

export default Card;
