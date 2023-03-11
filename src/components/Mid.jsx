import arrowl from "../assets/Mid/arrow-left.svg";
import arrowr from "../assets/Mid/arrow-right.svg";
import img1 from "../assets/Mid/Mid-img-1.svg";
import img2 from "../assets/Mid/Mid-img-2.svg";
import img3 from "../assets/Mid/Mid-img-3.svg";
import left from "../assets/Mid/left.svg";

export default function Mid() {
  return (
    <div className="h-screen  flex flex-col scrollbar sm:h-96">
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
          <img src={left} className="h-[500px] sm:h-full sm:w-1/2 " />
        </div>
        <div className="h-full w-1/2  flex flex-col sm:w-full">
          <div className="h-1/3  flex justify-end items-center pr-5 gap-3">
            <h1 className="text-white drummer text-5xl sm:text-2xl mr-20 sm:mr-0">
              🢀 Autoshow
            </h1>
            {/* <img src={img2} className="h-44 w-44" /> */}
          </div>
          <div className="h-1/3 flex justify-end items-center pr-5 gap-3">
            <h1 className="text-white drummer text-5xl sm:text-2xl mr-20 sm:mr-0">
              🢀 Arcade
            </h1>
            {/* <img src={img3} className="h-44 w-44" /> */}
          </div>
          <div className="h-1/3  flex justify-end items-center pr-5 gap-3">
            <h1 className="text-white drummer text-5xl sm:text-2xl mr-20 sm:mr-0">
              🢀 Expo
            </h1>
            {/* <img src={img1} className="h-44 w-44" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
