import logo from "../assets/tech-text-symbol.svg";
import arrowm from "../assets/arrowm.svg";
import img1 from "../assets/Intro-img-1.webp";
import img2 from "../assets/Intro-img-2.webp";
import img3 from "../assets/Intro-img-3.webp";
import she_eve_arrow from "../assets/she-eve-arrow.webp";
import { Link } from "react-router-dom";
import circles from "../assets/Circles.svg";
import { write } from "glitched-writer";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Intro() {
  // const writer = new GlitchedWriter(".transtext", "nier");

  // const trans = async () => {
  //   const res = await writer.write("Welcome");

  //   console.log(`Finished writing: ${res.string}`);
  //   console.log("All the writer data:", res);

  //   await wait(1200); // additional simple promise to wait some time

  //   await writer.write("...to Glitch City!");
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     trans();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // const [transt,setTranst] = useState();
  let encrypted = {
    interval: [50, 90],
    delay: [0, 1300],
    steps: [5, 8],
    maxGhosts: 0,
    ghostChance: 0,
    changeChance: 0.8,
    glyphs:
      "あいうえおがぎぐげござじずぜぞだぢづでどにねのばびふぺぽまやゆんゑゐゟ",
    fillSpace: false,
    mode: "normal",
    oneAtATime: 0,
  };
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <div
        className={`h-screen w-screen bg-[#00111C] z-50 fixed ${
          loading ? "" : "hidden"
        }`}
      >
        <div class="relative top-1/2 mx-auto w-fit text-center justify-center">
          <h1 class="drummer text-white font-xl w-fit mx-auto">LOADING</h1>
          <div class="progress-bar bg-white/10">
            <div class="progress-fill"></div>
          </div>
        </div>
      </div>
      <div
        className="flex min-h-max md:min-h-screen sm:w-full sm:pt-5 sm:h-96 z-1 font-semibold"
        onLoad={async () => {
          setLoading(false);
          write("31st March - 1st April", ".transtext1", encrypted);
          write(
            "We're taking tech events to a whole new level. Participate and get rewards!",
            ".transtext2",
            encrypted
          );
        }}
      >
        <motion.div className="w-full md:w-1/2 sm:h-80 pt-10 md:pt-28">
          <div className="flex flex-col gap-2 justify-center w-max sm:w-full ml-20 sm:ml-0">
            <div className="flex gap-5 justify-end items-center sm:px-10 w-full">
              <h1
                className=" transtext1 quicksand text-xl text-light-blue sm:text-sm font-normal"
                style={{ "text-shadow": "rgb(0, 196, 242) 2px 2px 20px" }}
              ></h1>
              <h1 className="drummer text-white text-7xl sm:text-5xl trans">
                TECH
              </h1>
            </div>
            <div className="flex gap-5 justify-end items-center sm:gap-2 sm:mx-5 ">
              <h1 className=" text-white text-7xl drummer sm:text-5xl">UP</h1>
              <img
                src={logo}
                alt={"Nothing Important"}
                className="h-16 w-16 sm:h-10 sm:w-10"
              />
              <h1 className=" text-white text-7xl  drummer sm:text-5xl">
                YOUR
              </h1>
            </div>
            <div className="flex gap-5 justify-end items-center border-b-0.5 border-white/50 pb-5 sm:mx-5 items-start">
              <h1 className=" text-white text-[76.8px] text-7xl drummer sm:text-5xl">
                TALENTS
              </h1>
            </div>

            <div className="flex gap-2 items-center sm:justify-between sm:px-10 w-full h-[100px]">
              <div className="w-56 sm:hidden">
                <hr className="sm:hidden border-0.5 border-white/50" />
              </div>
              <img src={arrowm} className="h-12 w-12 sm:hidden" />
              <div className="w-60 ">
                <h1 className="transtext2 text-md quicksand text-end text-blue sm:text-start font-bold"></h1>
              </div>
              <Link to="/rules">
                <motion.img
                  src={she_eve_arrow}
                  className="h-28 w-28 mt-4 hidden sm:block"
                />
              </Link>
            </div>

            <div className="flex gap-2 justify-between items-end sm:hidden">
              <Link to="/rules">
                <div className="h-full flex flex-col items-center">
                  <img
                    src={img1}
                    alt={"Workshops"}
                    className=" w-32 scale-[1.4]"
                  />
                  <h1 className="text-white text-lg freedom">Workshops </h1>
                </div>
              </Link>
              <Link to="/nexus">
                <div className="h-full flex flex-col items-center">
                  <img src={img2} alt={"Games"} className=" w-36 scale-[1.9]" />
                  <h1 className="text-white text-lg freedom">Games</h1>
                </div>
              </Link>
              <Link to="/rules">
                <div className="h-full flex flex-col items-center">
                  <img
                    src={img3}
                    alt={"Lectures"}
                    className=" w-32 scale-[1.2]"
                  />
                  <h1 className="text-white text-lg freedom">Lectures</h1>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="w-1/2 pb-28 flex items-center justify-center sm:hidden relative z-0">
          <Link to="/rules" className="z-10">
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              src={she_eve_arrow}
              alt={"Link to Schedules and Events"}
              className="w-64 h-64 z-30 mr-20 hover:scale-1"
            />
          </Link>
          <img
            src={circles}
            alt=""
            className="absolute bottom-circlebottom right-circleright -z-50"
          />
        </div>
      </div>
    </div>
  );
}
