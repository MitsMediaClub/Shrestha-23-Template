import view1 from "../assets/footer/View1.svg";
import view2 from "../assets/footer/View2.svg";
import logo from "../assets/footer/logo-only.svg";
import spotify from "../assets/Footer/Spotify.svg";
import instagram from "../assets/Footer/Instagram.svg";
import twitch from "../assets/Footer/Twitch.svg";
import dribble from "../assets/Footer/Dribbble.svg";
import facebook from "../assets/Footer/Facebook.svg";
import astro from "../assets/Footer/astro.svg";
export default function Footer() {
  return (
    <div>
      <div className="h-screen flex flex-col items-center gap-36 sm:gap-10">
        <div className="w-full">
          <div className="  flex justify-evenly ">
            <div className="w-1/2  flex justify-evenly pt-16 sm:w-full sm:flex-col sm:items-center">
              <div className="flex flex-col gap-2 w-56 sm:pb-10">
                <h1 className="drummer text-3xl text-white">SPONSORS</h1>
                <h1 className="quicksand font-semibold text-xl text-blue">
                  They made this possible. View the kind-hearted mega minds that
                  contributed to this event.
                </h1>
                <img className="" src={view1} />
              </div>
              <div className="flex flex-col gap-2 w-56">
                <h1 className="drummer text-3xl text-white">OUR TEAM</h1>
                <h1 className="quicksand font-semibold text-xl text-blue">
                  Meet the team who worked behind the platform and the success
                  of the events.
                </h1>
                <img className="" src={view2} />
              </div>
            </div>
          </div>
        </div>
        <img src={astro} className="h-44 w-44 sm:w-24 sm:h-24" />
      </div>
      <div className=" h-max flex justify-between sm:flex-col sm:items-start sm:justify-center">
        <div className="w-1/2 flex gap-2 items-center p-2 sm:p-0">
          <img src={logo} className="h-12 w-12" />
          <h1 className="drummer text-white text-lg sm:text-md">SRESHTHA</h1>
        </div>
        <div className="w-1/2 flex flex-col gap-10 items-end">
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
      </div>
    </div>
  );
}
