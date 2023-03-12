import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { useRef } from "react";

export default function Navbar() {
  const iconRef = useRef();
  const navRef = useRef();

  const useNav = () => {
    navRef.current.classList.toggle("hide");
    console.log("Works?");
  };

  return (
    <>
      <div className="h-20 flex gap-10 justify-between items-center border-b-2 mx-20 sm:hidden px-5">
        <h1 className="text-white freedom text-2xl">Workshops</h1>
        <h1 className="text-white freedom text-2xl">Lectures</h1>
        <h1 className="text-white freedom text-2xl">Games</h1>
        <img src={logo} alt="Tech Logo" className="h-44 w-44" />
        <h1 className="text-white freedom text-2xl">Support</h1>
        <Link to="/about">
          <h1 className="text-white freedom text-2xl">About Us</h1>
        </Link>
        <Link to="/">
          <h1 className="text-white freedom text-2xl">Home</h1>
        </Link>
      </div>

      {/* Mobile Version */}
      <div className="hidden h-10 border-b-2 mt-5 sm:block">
        <div
          className=" flex justify-start items-center  hidden sm:block px-5 w-max "
          ref={iconRef}
          onClick={() => useNav()}
        >
          <SortRoundedIcon className="text-white" />
        </div>
      </div>

      <div
        className="  trans h-80 w-screen flex flex-col items-center justify-center hide"
        ref={navRef}
      >
        <h1 className="text-white freedom text-2xl">Workshops</h1>
        <h1 className="text-white freedom text-2xl">Lectures</h1>
        <h1 className="text-white freedom text-2xl">Games</h1>
        <img src={logo} alt="Tech Logo" className="h-44 w-44 hidden" />
        <h1 className="text-white freedom text-2xl">Support</h1>
        <Link to="/about">
          <h1 className="text-white freedom text-2xl">About Us</h1>
        </Link>
        <Link to="/">
          <h1 className="text-white freedom text-2xl">Home</h1>
        </Link>
      </div>
      {/* Mobile Version End*/}
    </>
  );
}
