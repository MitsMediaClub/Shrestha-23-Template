import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import flip from "../assets/Events/Flip.svg";

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
          className="h-[400px] w-[300px] relative card1 mt-5 flex items-center"
          onClick={this.handleClick}
        >
          <h1 className="no absolute left-4 top-2 drummer text-white font-bold">
            001
          </h1>
          {/* absolute bottom-24 left-6 */}
          <div className=" flex flex-col gap-1  items-start justify-center p-5">
            <h1 className="name drummer text-white font-bold text-3xl">
              {this.props.name || "Default"}
            </h1>
            <h1 className="date drummer text-white  text-md">02/05/23</h1>
            <h1 className="time quicksand text-white  text-sm">11AM TO 12PM</h1>
            <h1 className="location quicksand text-white  text-sm">
              Osama Ground
            </h1>
          </div>
        </div>

        <div className="h-[400px] w-[300px] relative card1back mt-5 ">
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
          <img
            src={flip}
            alt="Use to flip"
            className="w-6 h-6 absolute right-20 top-2"
            onClick={this.handleClick}
          />
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
