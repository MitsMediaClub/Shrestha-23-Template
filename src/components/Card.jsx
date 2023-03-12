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
          className="h-[400px] w-[300px] relative card1 mt-5"
          onClick={this.handleClick}
        >
          <h1 className="no absolute left-4 top-2 drummer text-white font-bold">
            001
          </h1>
          <h1 className="name absolute top-48 left-7 drummer text-white font-bold text-3xl">
            EVOLVE
          </h1>
          <div className="absolute bottom-20 flex flex-col gap-1 left-14 items-center">
            <h1 className="date drummer text-white  text-md">02/05/23</h1>
            <h1 className="time quicksand text-white  text-sm">11AM TO 12PM</h1>
            <h1 className="location quicksand text-white  text-sm">
              Osama Ground
            </h1>
          </div>
        </div>

        <div
          className="h-[400px] w-[300px] relative card1back mt-5 "
          onClick={this.handleClick}
        >
          <h1 className="no absolute right-20 top-2 drummer text-white font-bold ">
            001
          </h1>
          <h1 className="desc absolute bottom-24 w-3/4 text-sm text-white p-5 text-end quicksand">
            Rev up your engines and join us for a thrilling car event featuring
            classic cars, exotic vehicles, and high-speed racing action.
          </h1>
          <button
            onClick={() => console.log("Registered!")}
            className="absolute bottom-16 inset-x-1/3 left-11  text-white w-2/4 rounded-lg drummer  p-2 border-white-2 bg-opacity-70 border-white border-2 text-sm bg-black"
          >
            Register
          </button>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
