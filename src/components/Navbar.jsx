import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
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
    </>
  );
}
