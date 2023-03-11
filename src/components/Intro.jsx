import logo from "../assets/tech-text-symbol.svg";
import arrowm from "../assets/arrowm.svg";
import img1 from "../assets/Intro-img-1.svg";
import img2 from "../assets/Intro-img-2.svg";
import img3 from "../assets/Intro-img-3.svg";
import she_eve_arrow from "../assets/she-eve-arrow.svg";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="flex pt-28 h-screen ">
      <div className="w-1/2">
        <div className="flex flex-col gap-2 justify-center w-max">
          <div className="flex gap-5 items-center">
            <h1 className="quicksand text-xl text-light-blue">
              31 March - 1'st April
            </h1>
            <h1 className="drummer text-white text-7xl">TECH</h1>
          </div>
          <div className="flex gap-5 items-center">
            <h1 className="text-white text-7xl drummer">UP</h1>
            <img src={logo} alt={"Nothing Important"} className="h-16 w-16" />
            <h1 className="text-white text-7xl drummer">YOUR</h1>
          </div>
          <div className="flex gap-5 items-center border-b-2">
            <h1 className="text-white text-7xl drummer">TALENTS</h1>
          </div>

          <div className="flex gap-2 justify-end items-center">
            <div className="w-36">
              <hr />
            </div>
            <img src={arrowm} className="h-12 w-12" />
            <div className="w-56">
              <h1 className="text-md quicksand text-end text-blue">
                We’re taking tech events to a{" "}
                <span className="underline text-white">whole next level.</span>{" "}
                Participate and get rewards!
              </h1>
            </div>
          </div>

          <div className="flex gap-2 justify-between items-center">
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
      <div className="w-1/2 flex items-center justify-end">
        <Link to="/schedule">
          <img
            src={she_eve_arrow}
            alt={"Link to Schedules and Events"}
            className="w-56 h-56"
          />
        </Link>
      </div>
      <div></div>
    </div>
  );
}
