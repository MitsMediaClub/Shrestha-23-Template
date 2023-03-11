import "./flippable-card.css";
import Card from "./card/card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function FlippableCard() {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="h-full w-[300px]">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          onClick={() => {
            setShowFront((v) => !v);
          }}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
