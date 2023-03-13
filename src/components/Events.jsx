import startcard from "../assets/Events/StartCard.svg";
import logo from "../assets/footer/logo-only.svg";
import spotify from "../assets/Footer/Spotify.svg";
import instagram from "../assets/Footer/Instagram.svg";
import twitch from "../assets/Footer/Twitch.svg";
import dribble from "../assets/Footer/Dribbble.svg";
import facebook from "../assets/Footer/Facebook.svg";
import circle from "../assets/Footer/Bcircle.svg";
import Card from "./Card";
import astro from "../assets/Footer/astro.svg";
import flipb from "../assets/Events/FlipBlack.svg";
import { write, queueWrite } from "glitched-writer";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <motion.div
      className="pt-28 h-screen sm:pt-10"
      onLoad={() => {
        write(
          "Shreshta is a cutlural techical event whose main purpose is to introduce the future to you.",
          ".transtext1",
          "neo"
        );
      }}
    >
      <div className="h-auto flex w-full sm:flex-col">
        <div className="w-1/2 flex flex-col gap-10 ml-20 sm:gap-2 sm:ml-0 sm:w-full sm:px-5">
          <h1 className="text-7xl text-white drummer sm:text-3xl ">SHRESHTA</h1>
          <h1 className="text-7xl text-white drummer sm:text-3xl">EXPANDING</h1>
          <h1 className="text-7xl text-white drummer sm:text-3xl">AWARENESS</h1>
        </div>
        <div className="w-1/2 flex items-center flex-col gap-5 pl-56 sm:hidden">
          <img
            src={startcard}
            alt="a card with Shreshta's logo on it"
            className="w-60"
          />
          <div className="w-80 ">
            <h1 className="text-lg text-blue quicksand font-bold">
              Shreshta is a cutlural techical event whose main purpose is to
              introduce the future to you.
            </h1>
          </div>
        </div>
        {/* Mobile Version */}
        <div className="h-44 hidden sm:block sm:flex sm:pt-10 sm:gap-5 sm:border-t-2 sm:pb-5 sm:mx-5">
          <img
            src={startcard}
            alt="a card with Shreshta's logo on it"
            className="w-28"
          />
          <div className="w-56">
            <h1 className="transtext1 text-lg text-blue quicksand font-bold"></h1>
          </div>
        </div>
        {/* Mobile Version End*/}
      </div>
      <div className="flex w-full pt-20 sm:hidden">
        <div className="ml-10 flex flex-wrap sm:ml-0 sm:flex-nowrap sm:overscroll-x-auto justify-center">
          <Card
            no={"001"}
            name={"Adaptune"}
            flip={flipb}
            time={"9AM-10AM"}
            date={"31/3/23"}
            location={"Main Stage"}
          />
          <Card
            no={"002"}
            name={"Step N Synchro"}
            flip={flipb}
            time={"10AM-11AM"}
            date={"31/3/23"}
            location={"Main Stage"}
          />
          <Card
            no={"003"}
            name={"Duet Song"}
            flip={flipb}
            time={"11AM-12AM"}
            date={"31/3/23"}
            location={"Main Stage"}
          />
          <Card
            no={"004"}
            name={"Music Song"}
            flip={flipb}
            time={"1PM-5PM"}
            date={"31/3/23"}
            location={"Main Stage"}
          />
          <Card
            no={"005"}
            name={"Stand Up Comedy"}
            flip={flipb}
            time={"9AM-10AM"}
            date={"1/4/23"}
            location={"Main Stage"}
          />
          <Card
            no={"006"}
            name={"Mime"}
            flip={flipb}
            time={"10AM-12PM"}
            date={"1/4/23"}
            location={"Main Stage"}
          />
          <Card
            no={"007"}
            name={"Movie Spoof"}
            flip={flipb}
            time={"12PM-1PM"}
            date={"1/4/23"}
            location={"Main Stage"}
          />
          <Card
            no={"008"}
            name={"Group Dance"}
            flip={flipb}
            time={"1PM-3PM"}
            date={"1/4/23"}
            location={"Main Stage"}
          />
          <Card
            no={"009"}
            name={"Theme Show"}
            flip={flipb}
            time={"3PM-5PM"}
            date={"1/4/23"}
            location={"Main Stage"}
          />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="hidden sm:block sm:overflow-x-auto sm:h-[500px] sm:px-5">
        <div className="ml-44 flex  sm:ml-0 sm:overscroll-x-auto ">
          <Card
            no={"001"}
            name={"Adaptune"}
            flip={flipb}
            time={"9AM-10AM"}
            date={"31/3/23"}
            location={"Main Stage"}
          />
          <Card
            no={"002"}
            name={"Step N Synchro"}
            flip={flipb}
            time={"10AM-11AM"}
            date={"31/3/23"}
            location={"Main Stage"}
          />
          <Card
            no={"003"}
            name={"Duet Song"}
            flip={flipb}
            time={"11AM-12AM"}
            date={"31/3/23"}
            location={"Main Stage"}
          />
          <Card
            no={"004"}
            name={"Music Song"}
            flip={flipb}
            time={"1PM-5PM"}
            date={"31/3/23"}
            location={"Main Stage"}
          />
          <Card
            no={"005"}
            name={"Stand Up Comedy"}
            flip={flipb}
            time={"9AM-10AM"}
            date={"1/4/23"}
            location={"Main Stage"}
          />
          <Card
            no={"006"}
            name={"Mime"}
            flip={flipb}
            time={"10AM-12PM"}
            date={"1/4/23"}
            location={"Main Stage"}
          />
          <Card
            no={"007"}
            name={"Movie Spoof"}
            flip={flipb}
            time={"12PM-1PM"}
            date={"1/4/23"}
            location={"Main Stage"}
          />
          <Card
            no={"008"}
            name={"Group Dance"}
            flip={flipb}
            time={"1PM-3PM"}
            date={"1/4/23"}
            location={"Main Stage"}
          />
          <Card
            no={"009"}
            name={"Theme Show"}
            flip={flipb}
            time={"3PM-5PM"}
            date={"1/4/23"}
            location={"Main Stage"}
          />
        </div>
      </div>
      {/* Mobile Version End*/}

      <div className=" h-[600px] flex justify-between sm:flex-col sm:items-start sm:justify-center relative pt-10 sm:h-max sm:gap-5">
        <div className="h-full w-1/2 flex gap-2 items-end p-2 sm:p-0 sm:items-center">
          <img src={logo} className="h-12 w-12" />
          <h1 className="drummer text-white text-lg sm:text-md">SRESHTHA</h1>
        </div>
        <div className="h-full w-1/2 flex flex-col gap-10 justify-end mr-5 items-end">
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
        <img
          src={astro}
          className="h-44 w-44 sm:w-24 sm:h-24 absolute bottom-[410px] left-[675px]"
        />
      </div>
    </motion.div>
  );
}
