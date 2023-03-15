import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import flip from "../assets/Events/Flip.svg";
import { motion } from "framer-motion";

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
    console.log(this.props.bg);
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
      >
        <motion.div
          whileHover={{
            textShadow:
              "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
          }}
          className={`h-[400px] w-[300px] relative ${this.props.bg} mt-10 flex items-center`}
          onClick={this.handleClick}
        >
          <h1 className="no absolute left-4 top-2 drummer text-white font-bold">
            {this.props.no}
          </h1>
          {/* absolute bottom-24 left-6 */}
          <div className=" flex flex-col gap-1  items-start justify-center p-5">
            <h1 className="w-1/6 name drummer text-white font-bold text-xl">
              {this.props.name || ""}
            </h1>
            <h1 className="w-1/2 date drummer text-white  text-md">
              {this.props.date}
            </h1>
            <h1 className="w-1/2 time quicksand text-white  text-sm">
              {this.props.time}
            </h1>
            <h1 className="w-1/2 location quicksand text-white  text-sm">
              {this.props.location}
            </h1>
          </div>
        </motion.div>

        <div className="h-[400px] w-[300px] relative cardback mt-5 ">
          <h1 className="desc absolute bottom-24 w-3/4 text-sm text-white p-5 text-end quicksand pr-10">
            Rev up your engines and join us for a thrilling car event featuring
            classic cars, exotic vehicles, and high-speed racing action.
          </h1>
          <Link to={this.props.link}>
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              className="absolute bottom-16 inset-x-1/3 left-11  text-white w-2/4 rounded-lg drummer  p-2 border-white-2 bg-opacity-70 border-white border-2 text-sm bg-black"
            >
              Register
            </motion.button>
          </Link>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={flip}
            alt="Use o flip"
            className="w-6 h-6 absolute left-2 top-2"
            onClick={this.handleClick}
          />
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
