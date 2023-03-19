import logo from "../assets/Footer/logo-only.svg";
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
      <div className="h-[625px] sm:h-[180px] flex flex-col items-center gap-36 sm:gap-10">
        <div className="w-full"></div>
        <img src={astro} className="h-44 w-44 sm:w-24 sm:h-24" />
      </div>
      <div className=" h-max flex justify-between flex-col md:flex-row items-center sm:justify-center relative">
        <div className="md:ml-16 md:w-1/2 z-50 mb-3 md:pb-16 flex gap-2 items-center p-2 sm:p-0">
          <img src={logo} className="h-12 w-12 md:h-16 md:w-16" />
          <h1 className="drummer text-white/80 text-bold text-lg md:text-2xl sm:text-md">SRESHTA</h1>
        </div>
        <div className="md:mr-16 md:w-1/2 z-50 pb-4 md:pb-16 flex flex-col gap-3 md:gap-10 items-center md:items-end">
          <div className="flex  gap-7 justify-center">
            <img src={spotify} alt={"Spotify"} className="w-6 h-6 md:w-10 md:h-10" />
            <img src={facebook} alt={"Facebook"} className="w-6 h-6 md:w-10 md:h-10" />
            <img src={instagram} alt={"Instagram"} className="w-6 h-6 md:w-10 md:h-10" />
            <img src={twitch} alt={"Twitch"} className="w-6 h-6 md:w-10 md:h-10" />
            <img src={dribble} alt={"Dribbble"} className="w-6 h-6 md:w-10 md:h-10" />
          </div>
          <h1 className="quicksand md:font-semibold text-white/80 text-xs md:text-base">
            © 2023 MITS. All rights reserved.
          </h1>
        </div>
        <img src={circle} alt="" className=" absolute bottom-0 sm:h-52 z-0" />
      </div>
    </div>
  );
}
