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
        containerClassName="w-fit"
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
      >
        <motion.div
          whileHover={{
            textShadow:
              "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
          }}
          className={`h-[515px] w-[265px] relative ${this.props.bg} bg-contain flex items-center`}
          onClick={this.handleClick}
        >
          <h1 className="no absolute left-4 top-2 drummer text-white/80 font-bold">
            {this.props.no}
          </h1>
          {/* absolute bottom-24 left-6 */}
          <div className=" flex flex-col gap-1 w-full items-center justify-center p-5">
            <h1
              className={`pt-20 name drummer text-center text-white font-bold px-2  ${
                this.props.text || "text-2xl"
              }`}
            >
              {this.props.name || ""}
            </h1>
            <h1 className="date drummer text-center text-white/60  text-lg">
              {this.props.date}
            </h1>
            <h1 className="mt-8 time drummer text-white/80  text-sm">
              {this.props.time}
            </h1>
            <h1 className="location quicksand text-white/80  text-sm">
              {this.props.location}
            </h1>
            <img
              className="rounded-xl absolute top-12 h-44 w-44"
              src={this.props.poster || ""}
              alt=""
            />
          </div>
        </motion.div>

        <div
          className={`h-[515px] w-[265px] relative ${this.props.cardback} bg-contain items-center`}
        >
          <div
            class="absolute h-[515px] w-[265px]"
            onClick={this.handleClick}
          ></div>
          <div class="relative -bottom-1/4">
            <h1 className="desc text-sm text-white p-5 text-end quicksand pr-10">
              {this.props.desc}
              {this.props.more && (
                <Link to="/desc/0">
                  <span className="text-blue quicksand underline">
                    {" "}
                    ...more
                  </span>
                </Link>
              )}
            </h1>
            {this.props.button && (
              <div class="mx-auto items-center w-fit z-50">
                <Link to={this.props.link}>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="text-white rounded-lg drummer mx-auto  p-2 border-white-2 bg-opacity-70 border-white/30 border text-sm backdrop-blur bg-white/10"
                  >
                    Register
                  </motion.button>
                </Link>
              </div>
            )}
          </div>
          {/* <motion.img
            whileHover={{ scale: 1.1 }}
            src={flip}
            alt="Use o flip"
            className="w-6 h-6 absolute left-6 top-2"
            onClick={this.handleClick}
          /> */}
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
