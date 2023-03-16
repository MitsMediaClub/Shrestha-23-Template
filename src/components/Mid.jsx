import arrowl from "../assets/Mid/arrow-left.svg";
import arrowr from "../assets/Mid/arrow-right.svg";
import left from "../assets/Mid/left.svg";
import job from "../assets/Mid/JobgKurian.png";
import media from "../assets/Mid/Media One.svg";
import mango from "../assets/Mid/Mango.svg";
import esc from "../assets/Mid/ESC.svg";
import gaming from "../assets/Mid/GamingLounge.png";
import sunburn from "../assets/Mid/SunBurn.png";
import bandwars from "../assets/Mid/BandWars.png";
import coffee from "../assets/Mid/MasalaCoffee.png";

export default function Mid() {
  return (
    <div className="h-auto  flex flex-col flex-grow scrollbar sm:h-auto sm:mx-5">
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
          <img src={arrowr} className="h-48 w-56" />
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

      <div className="flex h-full sm:relative">
        <div className="h-full w-1/2  sm:w-full sm:absolute">
          <img src={left} className="h-[500px] sm:h-full sm:hidden " />
        </div>
        <div className="h-96 w-1/2  flex flex-col sm:w-full sm:items-center">
          <div className="h-56  flex justify-end items-center pr-5 gap-3">
            <h1 className="text-white drummer text-5xl sm:text-2xl mr-20 sm:mr-0">
              ◈ Autoshow
            </h1>
            {/* <img src={img2} className="h-44 w-44" /> */}
          </div>
          <div className="h-56 flex justify-end items-center pr-5 gap-3">
            <h1 className="text-white drummer text-5xl sm:text-2xl mr-20 sm:mr-0">
              ◈ Arcade
            </h1>
            {/* <img src={img3} className="h-44 w-44" /> */}
          </div>
          <div className="h-56  flex justify-end items-center pr-5 gap-3">
            <h1 className="text-white drummer text-5xl sm:text-2xl mr-20 sm:mr-0">
              ◈ Expo
            </h1>
            {/* <img src={img1} className="h-44 w-44" /> */}
          </div>
        </div>
      </div>
      <div className="h-96 flex items-center justify-evenly  font-bold text-white sm:flex-col sm:h-auto">
        <img
          src={job}
          alt="An image of the one and only Job Kurian"
          className="h-full"
        />
        <div className="flex flex-col gap-4 w-2/6 items-center justify-center sm:w-full">
          <h1 className="quicksand">
            <span className="text-blue">
              Join Job Kurian in inaugurating the upcoming tech fest - let's
              celebrate innovation!
            </span>{" "}
            Don't miss out on this opportunity to be a part of the excitement
            and explore the future of technology.
          </h1>
          <div className="flex flex-col gap-2 sm:w-full">
            <h1 className="drummer text-white text-2xl">
              <span className="font-bold text-blue ">+ </span>Our Vision
            </h1>
            <h1 className="quicksand">
              To create a platform for innovation that brings together a
              community of enthusiasts, and inspires attendees to the future of
              technology.
            </h1>
          </div>
          <div className="flex flex-col gap-2 sm:w-full">
            <h1 className="drummer text-white text-2xl">
              <span className="font-bold text-blue">+ </span>Our Values
            </h1>
            <h1 className="quicksand">
              Innovation, Learning, Community, Future-oriented, Excitement,
              Inspiration and Exposure
            </h1>
          </div>
        </div>
      </div>
      <div className="h-[800px] flex justify-center mt-28 sm:mt-5 sm:gap-5 sm:h-[300px]">
        <div className="flex flex-col gap-3 items-end mr-10 sm:mr-0 w-1/2">
          <img
            src={sunburn}
            alt=""
            className="h-1/3 sm:h-[200px] h-[500px] w-1/2 sm:w-full rounded-xl"
          />
          <img
            src={gaming}
            alt=""
            className="h-2/3 sm:h-auto h-[500px]  rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-3 items-start w-1/2">
          <img
            src={bandwars}
            alt=""
            className="h-2/3 sm:h-[200px] h-1/2 w-1/2 sm:w-full rounded-xl"
          />
          <img
            src={coffee}
            alt=""
            className="h-1/3 sm:h-auto h-1/2 rounded-xl"
          />
        </div>
      </div>
      <div className="h-[400px] mt-10 p-10 sm:h-[300px]">
        <div className="flex flex-col mx-16 sm:mx-0 sm:items-center">
          <h1 className="text-white text-3xl drummer">SPONSORS</h1>
          <h1 className="text-blue text-lg quicksand font-bold">
            They made this event possible. They see the future, they experience
            the future, they are the future.
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly mt-16">
          <img src={media} alt="" className="h-44 w-44 sm:h-12 sm:w-12" />
          <img src={mango} alt="" className="h-44 w-44 sm:h-12 sm:w-12" />
          <img src={esc} alt="" className="h-44 w-44 sm:h-12 sm:w-12" />
        </div>
      </div>
    </div>
  );
}
