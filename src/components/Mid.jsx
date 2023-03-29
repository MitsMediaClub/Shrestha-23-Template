import arrowl from "../assets/Mid/arrow-left.webp";
import arrowr from "../assets/Mid/arrow-right.webp";
import left from "../assets/Mid/left.webp";
import arm from "../assets/Mid/Amritha.webp";
import media from "../assets/Mid/Media_One.png";
import mango from "../assets/Mid/Mango.png";
import benq from "../assets/Mid/benq.png";
import cmx from "../assets/Mid/cmx.png";
import img1 from "../assets/mid-img-1.png";
import img2 from "../assets/mid-img-2.webp";
import img3 from "../assets/mid-img-3.webp";
// import esc from "../assets/Mid/ESC.svg";
import gaming from "../assets/Mid/GamingLounge.webp";
import sunburn from "../assets/Mid/SunBurn.webp";
import bandwars from "../assets/Mid/BandWars.webp";
import arseno from "../assets/Mid/Arseno.png";
import zeb from "../assets/Mid/Zebcard.png";
import coffee from "../assets/Mid/MasalaCoffee.webp";
import drop from "../assets/Mid/drop.svg";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Mid() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div className="h-auto pt-14 flex flex-col flex-grow scrollbar sm:h-auto sm:mx-5 z-30">
      <div className="flex justify-center gap-2 sm:hidden">
        <div>
          <img src={arrowl} className="h-16 w-56" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-6xl drummer sm:text-2xl">
            SEE WHAT WE &nbsp; &nbsp; &nbsp;
          </h1>
          <h1 className="text-white text-6xl drummer sm:text-2xl">
            &nbsp; &nbsp; &nbsp; HAVE FOR YOU
          </h1>
        </div>
        <div>
          <img src={arrowr} className="mt-14 h-16 w-56" />
        </div>
      </div>

      {/* Mobile Version */}

      <div className="flex justify-center gap-2 hidden sm:block ">
        <div>
          <img src={arrowl} className="h-16 w-56" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-6xl drummer sm:text-2xl">
            SEE WHAT WE &nbsp; &nbsp; &nbsp;
          </h1>
          <h1 className="text-white text-6xl drummer sm:text-2xl">
            &nbsp; &nbsp; &nbsp; HAVE FOR YOU
          </h1>
        </div>
        <div className="flex justify-end">
          <img src={arrowr} className="h-16 w-56" />
        </div>
      </div>

      {/* Mobile Version End*/}
      <div className="pt-14 md:pt-28 flex items-center justify-evenly  font-bold text-white sm:flex-col sm:h-auto">
        <img
          loading="lazy"
          src={arm}
          alt="An image of the one and only Amritha Suressh"
          className="md:w-1/2 rounded-4xl"
        />
        <div className="flex flex-col gap-4 w-full md:w-2/6 items-center text-base mt-8 md:mt-0 md:text-2xl font-medium justify-center">
          <h1 className="quicksand">
            <span className="text-blue">
              Join Amrutha Suresh in inaugrating the upcoming techno-cultural
              fest, celebrating the colours of youth, innovation and
              inspiration!
            </span>{" "}
            Don't miss out on this golden opportunity to be a part of the
            excitement and explore the future of technology.
          </h1>
          <div className="flex flex-col gap-2 sm:w-full">
            <h1 className="drummer text-white text-2xl mt-8">
              <span className="font-bold text-blue ">+ </span>About Her
            </h1>
            <h1 className="quicksand">
              Amrutha Suresh is a singer,composer, songwriter and
              radio-jockey.With her immense popularity and massive fan following
              she rose to fame through a number of chart buster hits.
            </h1>
          </div>
          <div className="flex flex-col gap-2 sm:w-full">
            <h1 className="drummer text-white text-2xl mt-8">
              <span className="font-bold text-blue">+ </span>Engraving Glory
            </h1>
            <h1 className="quicksand">
              Future of innovation and inspiration, SHRESHTA'23 aims to be a
              cultural and inter collegiate masquerade for all the young,fresh
              minds to be a part of our journey.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-14 md:mt-28 sm:gap-5 md:mx-16">
        <div className="flex flex-col gap-5 md:gap-10 items-end mr-10 sm:mr-0 md:w-1/2">
          <img src={sunburn} alt="" className=" rounded-4xl" />
          <img src={gaming} alt="" className=" rounded-4xl" />
        </div>
        <div className="flex flex-col gap-5 md:gap-10 items-start md:w-1/2">
          <img src={bandwars} alt="" className=" rounded-4xl" />
          <img src={coffee} alt="" className=" rounded-4xl" />
        </div>
      </div>
      <div className="flex h-full mt-24 md:mt-44 sm:relative">
        <div className="h-full w-1/2  sm:w-full sm:absolute">
          <img src={left} className="sm:h-full sm:hidden " />
        </div>
        <div className=" w-1/2 gap-6 md:gap-12 flex flex-col drummer sm:w-full">
          <div className="flex justify-end items-center md:pr-5 gap-3">
            <h1 className="text-white text-5xl sm:text-base md:mr-10 sm:mr-0 ">
              Theme Show
            </h1>
            <img src={img1} className="w-44 md:mr-10" />
          </div>
          <div className="flex justify-end items-center md:pr-5 gap-3">
            <h1 className="text-white text-5xl sm:text-2xl md:mr-10 sm:mr-0">
              Arcade
            </h1>
            <img src={img2} className="w-44 scale-[1.9] md:mr-10" />
          </div>
          <div className=" flex justify-end items-center md:pr-5 gap-3">
            <h1 className="text-white text-5xl sm:text-2xl md:mr-10 sm:mr-0">
              Expo
            </h1>
            <img src={img3} className="w-44 md:mr-10" />
          </div>
        </div>
      </div>
      <div className="mt-28 p-10">
        <div className="flex flex-col mx-16 sm:mx-0 sm:items-center">
          <h1 className="text-white text-4xl md:text-6xl drummer">PARTNERS</h1>
          <h1 className="text-blue text-base md:text-lg quicksand font-medium mt-4">
            They made this event possible. They see the future, they experience
            the future, they are the future.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 md:gap-20 justify-evenly mt-16 md:mx-16">
          <img src={media} alt="" className="" />
          <img src={mango} alt="" className="" />
          <img src={benq} alt="" className="" />
          <img src={cmx} alt="" className="" />
          <img src={arseno} alt="" className="" />
          <img src={zeb} alt="" className="" />
          {/* <img src={esc} alt="" className="h-44 w-44" /> */}
        </div>
      </div>
      <div className="faq w-full mx-20 mt-12 sm:mx-5">
        <h1 className="text-white drummer pb-2 text-6xl w-2/6 sm:text-5xl sm:w-1/2">
          FAQ
        </h1>

        <motion.div className="mt-10 flex flex-col gap-5">
          <div className="w-full flex flex-col gap-3">
            <h1
              className="text-white quicksand text-xl sm:text-sm cursor-pointer"
              onClick={() => {
                setShow1(!show1);
              }}
            >
              1. Who all can participate?{" "}
              <img
                className={`inline h-2 ml-4 ${show1 ? "rotate-180" : ""}`}
                src={drop}
                onClick={() => {
                  setShow1(!show1);
                }}
              />
            </h1>
            <div className={`overflow-hidden ${show1 ? `h-12` : "h-0"}`}>
              {show1 && (
                <motion.h1
                  initial={{ y: "-100vw" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, type: "tween" }}
                  className="text-white/70 quicksand ml-4 md:ml-8 text-xl sm:text-sm"
                >
                  Engineering college students with ID cards can take part in
                  this event.
                </motion.h1>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h1
              className="text-white quicksand text-xl sm:text-sm cursor-pointer"
              onClick={() => {
                setShow2(!show2);
              }}
            >
              2. Are there accommodation facilities?
              <img
                className={`inline h-2 ml-4 ${show2 ? "rotate-180" : ""}`}
                src={drop}
                onClick={() => {
                  setShow2(!show2);
                }}
              />
            </h1>
            <div className={`overflow-hidden ${show2 ? `h-12` : "h-0"}`}>
              {show2 && (
                <motion.h1
                  initial={{ y: "-10vw" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, type: "tween" }}
                  className="text-white/70 quicksand ml-4 md:ml-8 text-xl sm:text-sm"
                >
                  Limited accommodation facilities are available. To avail,
                  refer to the support page{" "}
                  <a href="/support" className="text-blue underline">
                    here
                  </a>
                  .
                </motion.h1>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
