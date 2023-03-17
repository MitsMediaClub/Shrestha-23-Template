import React from "react";
import waves from "../assets/El Camino/Waves.png";
import gaming from "../assets/El Camino/Gaming.png";
import logo from "../assets/Footer/logo-only.svg";
import spotify from "../assets/Footer/Spotify.svg";
import instagram from "../assets/Footer/Instagram.svg";
import twitch from "../assets/Footer/Twitch.svg";
import dribble from "../assets/Footer/Dribbble.svg";
import facebook from "../assets/Footer/Facebook.svg";
import astro from "../assets/Footer/astro.svg";
import circle from "../assets/Footer/Bcircle.svg";

const ELCamino = () => {
  return (
    <div className="h-screen mt-20">
      <div className="flex gap-5 mx-20 sm:flex-col sm:mx-5 justify-between">
        <div className="w-1/2 sm:w-full ">
          <h1 className="p-3 border-b-2 w-1/2 text-3xl text-white drummer mb-5 sm:w-full sm:mx-0">
            EL CAMINO
          </h1>
          <h1 className="text-blue quicksand">
            The universe is such a pretty big place. With a promise of never
            ending possibilities of infinity and beyond, SHRESTHA'23 are
            thrilled to present El-Camino,the perils and trenches of the great
            mysteries of space and ocean, unveiling it's bit by bit for
            amalgamation of art and creativity. Welcome to the brightest side of
            the darkest world, experienced through a visual showcase like never
            before. Measured beyond the senses,come join us for an epic exhibit
            of art and information.
          </h1>
        </div>
        <img
          src={waves}
          alt=""
          className=" h-[300px] mt-5 sm:w-full rounded-3xl "
        />
      </div>
      <h1 className="p-3 border-b-2 w-full text-3xl text-white drummer mb-5 ml-20 sm:mx-0 sm:w-screen">
        Nexus Gaming Lounge
      </h1>
      <div className="flex gap-5 mx-20 sm:flex-col sm:mx-5 justify-between">
        <img
          src={gaming}
          alt=""
          className=" h-[300px] sm:w-full rounded-3xl "
        />
        <div className="w-1/2 sm:w-full">
          <h1 className="text-blue quicksand">
            NEXUS Gaming Lounge is the flagship event of SHRESHTA 23 the
            Techno-Cultural Fest Hosted by Muthoot Institute of Technology and
            Science at Kochi on the dates of March 31 and April 1. This Lounge
            is considered to be one of the biggest gaming lounges in Kerala up
            to date and will go down in history as the best gamer meet ever. The
            Main concept of NEXUS is to provide a FREE platform for gamers to
            meet and greet, and explore the different games and adventures that
            they could not experience alone. So, Come explore the different
            dimensions of gaming with us.
          </h1>
        </div>
      </div>
      <div className="">
        <div className="h-[625px] sm:h-[200px] flex flex-col items-center gap-36 sm:gap-10">
          <div className="w-full"></div>
          <img src={astro} className="h-44 w-44 sm:w-24 sm:h-24" />
        </div>
        <div className=" h-max flex justify-between sm:flex-col sm:items-start sm:justify-center relative">
          <div className="w-1/2 flex gap-2 items-center p-2 sm:p-0">
            <img src={logo} className="h-12 w-12" />
            <h1 className="drummer text-white text-lg sm:text-md">SRESHTHA</h1>
          </div>
          <div className="w-1/2 flex flex-col gap-10 items-end mr-5 ">
            <div className="flex  gap-7 justify-center sm:hidden">
              <img src={spotify} alt={"Spotify"} className="w-10 h-10" />
              <img src={facebook} alt={"Facebook"} className="w-10 h-10" />
              <img src={instagram} alt={"Instagram"} className="w-10 h-10" />
              <img src={twitch} alt={"Twitch"} className="w-10 h-10" />
              <img src={dribble} alt={"Dribbble"} className="w-10 h-10" />
            </div>
            <h1 className="quicksand text-white sm:pl-3">
              2023 MITS. All rights reserved.
            </h1>
          </div>
          <img src={circle} alt="" className=" absolute bottom-0 sm:h-44" />
        </div>
      </div>
    </div>
  );
};

export default ELCamino;
