import startcard from "../assets/Events/StartCard.svg";
import logo from "../assets/footer/logo-only.svg";
import spotify from "../assets/Footer/Spotify.svg";
import instagram from "../assets/Footer/Instagram.svg";
import twitch from "../assets/Footer/Twitch.svg";
import dribble from "../assets/Footer/Dribbble.svg";
import facebook from "../assets/Footer/Facebook.svg";
import circle from "../assets/Footer/Bcircle.svg";

export default function Events() {
  return (
    <div className="pt-28 h-screen  flex flex-col gap-10">
      <div className="flex w-full ">
        <div className="w-1/2 flex flex-col gap-10 ml-20">
          <h1 className="text-7xl text-white drummer">SHRESHTA</h1>
          <h1 className="text-7xl text-white drummer">EXPANDING</h1>
          <h1 className="text-7xl text-white drummer"> AWARENESS</h1>
        </div>
        <div className="w-1/2 flex items-center flex-col gap-5 pl-56">
          <img
            src={startcard}
            alt="a card with Shreshta's logo on it"
            className="w-60 "
          />
          <div className="w-80">
            <h1 className="text-lg text-blue quicksand font-bold">
              Shreshta is a cutlural techical event whose main purpose is to
              introduce the future to you.
            </h1>
          </div>
        </div>
      </div>
      {/* <div className=" h-max flex justify-between sm:flex-col sm:items-start sm:justify-center relative">
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
          <h1 className="quicksand text-white">
            2023 MITS. All rights reserved.
          </h1>
        </div>
        <img src={circle} alt="" className=" absolute bottom-0 sm:h-44" />
      </div> */}
    </div>
  );
}
