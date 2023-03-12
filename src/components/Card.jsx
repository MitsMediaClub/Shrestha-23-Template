import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
      >
        <div
          className="h-[300px] w-[200px] relative card1"
          onClick={this.handleClick}
        >
          {/* <button onClick={this.handleClick} className="z-1">
            Flip
          </button> */}
        </div>

        <div
          className="h-[300px] w-[200px] relative card1back"
          onClick={this.handleClick}
        >
          <button onClick={() => console.log("Registered!")}>Flip</button>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
