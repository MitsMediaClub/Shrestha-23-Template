import arrowl from "../assets/Mid/arrow-left.svg";
import arrowr from "../assets/Mid/arrow-right.svg";
import img1 from "../assets/Mid/Mid-img-1.svg";
import img2 from "../assets/Mid/Mid-img-2.svg";
import img3 from "../assets/Mid/Mid-img-3.svg";
import left from "../assets/Mid/left.svg";

export default function Mid() {
  return (
    <div className="h-screen  flex flex-col">
      <div className="flex justify-center gap-2">
        <div>
          <img src={arrowl} className="h-16 w-56" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-6xl drummer">
            SEE WHAT WE &nbsp; &nbsp; &nbsp;
          </h1>
          <h1 className="text-white text-6xl drummer">
            &nbsp; &nbsp; &nbsp; HAVE FOR YOU
          </h1>
        </div>
        <div>
          <img src={arrowr} className="h-48 w-56" />
        </div>
      </div>
      <div className="flex h-full">
        <div className="h-full w-1/2 bg-left">
          <img src={left} className="h-[500px]" />
        </div>
        <div className="h-full w-1/2  flex flex-col">
          <div className="h-1/3  flex justify-end items-center pr-5 gap-3">
            <h1 className="text-white drummer text-5xl">🢀 Autoshow</h1>
            <img src={img2} className="h-44 w-44" />
          </div>
          <div className="h-1/3 flex justify-end items-center pr-5 gap-3">
            <h1 className="text-white drummer text-5xl">🢀 Arace</h1>
            <img src={img3} className="h-44 w-44" />
          </div>
          <div className="h-1/3  flex justify-end items-center pr-5 gap-3">
            <h1 className="text-white drummer text-5xl">🢀 Expo</h1>
            <img src={img1} className="h-44 w-44" />
          </div>
        </div>
      </div>
    </div>
  );
}
