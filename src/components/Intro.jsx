import logo from "../assets/tech-text-symbol.svg";
import arrowm from "../assets/arrowm.svg";
import img1 from "../assets/Intro-img-1.svg";
import img2 from "../assets/Intro-img-2.svg";
import img3 from "../assets/Intro-img-3.svg";
import she_eve_arrow from "../assets/she-eve-arrow.svg";
import { Link } from "react-router-dom";
import circles from "../assets/Circles.svg";

export default function Intro() {
  return (
    <div className="flex pt-28 h-screen sm:w-full sm:pt-5 sm:h-96 z-1 ">
      <div className="w-1/2 sm:w-full sm:h-80">
        <div className="flex flex-col gap-2 justify-center w-max sm:w-full ml-20 sm:ml-0">
          <div className="flex gap-5 justify-center items-center sm:px-5">
            <h1 className="quicksand text-xl text-light-blue sm:text-sm">
              31 March - 1'st April
            </h1>
            <h1 className="drummer text-white text-7xl sm:text-5xl">TECH</h1>
          </div>
          <div className="flex gap-5 items-center sm:gap-2 sm:px-5">
            <h1 className="text-white text-7xl drummer sm:text-5xl">UP</h1>
            <img
              src={logo}
              alt={"Nothing Important"}
              className="h-16 w-16 sm:h-10 sm:w-10"
            />
            <h1 className="text-white text-7xl  drummer sm:text-5xl">YOUR</h1>
          </div>
          <div className="flex gap-5 items-center border-b-2 sm:pb-5 sm:mx-5 ">
            <h1 className="text-white text-7xl drummer sm:text-5xl">TALENTS</h1>
          </div>

          <div className="flex gap-2 justify-end items-center sm:justify-between sm:px-5">
            <div className="w-36 sm:hidden">
              <hr className="sm:hidden" />
            </div>
            <img src={arrowm} className="h-12 w-12 sm:hidden" />
            <div className="w-56">
              <h1 className="text-md quicksand text-end text-blue sm:text-start">
                We're taking tech events to a{" "}
                <span className="underline text-white">whole new level.</span>{" "}
                Participate and get rewards!
              </h1>
            </div>
            <Link to="/about">
              <img
                src={she_eve_arrow}
                className="sm:h-28 sm:w-28 hidden sm:block"
              />
            </Link>
          </div>

          <div className="flex gap-2 justify-between items-center sm:hidden">
            <div className="flex flex-col items-center">
              <img src={img1} alt={"Workshops"} className=" w-32" />
              <h1 className="text-white text-lg freedom">Workshops </h1>
            </div>

            <div className="flex flex-col items-center">
              <img src={img2} alt={"Games"} className=" w-36" />
              <h1 className="text-white text-lg freedom">Games</h1>
            </div>
            <div className="flex flex-col items-center">
              <img src={img3} alt={"Lectures"} className=" w-32" />
              <h1 className="text-white text-lg freedom">Lectures</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-start sm:hidden relative ">
        <Link to="/schedule">
          <img
            src={she_eve_arrow}
            alt={"Link to Schedules and Events"}
            className="w-56 h-56 z-2 mr-20"
          />
        </Link>
        <img
          src={circles}
          alt=""
          className="absolute bottom-circlebottom right-circleright z-0 w-[500px]"
        />
      </div>
    </div>
  );
}