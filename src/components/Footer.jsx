import logo from "../assets/footer/logo-only.svg";
import spotify from "../assets/Footer/Spotify.svg";
import instagram from "../assets/Footer/Instagram.svg";
import twitch from "../assets/Footer/Twitch.svg";
import dribble from "../assets/Footer/Dribbble.svg";
import facebook from "../assets/Footer/Facebook.svg";
import astro from "../assets/Footer/astro.svg";
import circle from "../assets/Footer/Bcircle.svg";
export default function Footer() {
  return (
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
  );
}
