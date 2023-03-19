import { Link } from "react-router-dom";
import logo from "../assets/Footer/logo-only.png";
import sreta from "../assets/Shreshta.png";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const iconRef = useRef();
  const navRef = useRef();

  return (
    <>
      <div className="h-20 flex gap-10 justify-between font-base items-center border-b-0.5 border-white/50 mx-20 sm:hidden px-5 z-1">
      <Link to="/">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white/90 freedom text-xl"
          >
            Home
          </motion.h1>
        </Link>
        <Link to="/elcamino">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white/90 freedom text-xl"
          >
            El Camino
          </motion.h1>
        </Link>
        <div className="border-l-0.5 rotate-12 w-1 my-2 h-12 border-white/50"></div>
        <img src={logo} alt="Tech Logo" className="h-16 w-16" />
        <div className="border-r-0.5 rotate-12 w-1 my-2 h-12 border-white/50"></div>
        <Link to="mailto:support@shreshta.tech">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white/90 freedom text-xl"
          >
            Support
          </motion.h1>
        </Link>
        <div className="border-l-0.5 rotate-12 w-1 my-2 h-12 border-white/50"></div>
        <img src={logo} alt="Tech Logo" className="h-16 w-16" />
        <div className="border-r-0.5 rotate-12 w-1 my-2 h-12 border-white/50"></div>
        <Link to="/about">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white/90 freedom text-xl"
          >
            About Us
          </motion.h1>
        </Link>
      </div>

      {/* Mobile Version */}
      <div className="hidden h-10 mt-5 pb-5 sm:block">
        <div
          className=" flex justify-start items-center z-50 hidden sm:block px-5 w-max"
          ref={iconRef}
          onClick={() => setShow(!show)}
        >
          <SortRoundedIcon className="text-white" />
        </div>
      </div>

      {show && (
        <motion.div
          className={` h-screen fixed z-40 bg-[#00111C] w-screen flex flex-col items-center justify-center gap-5`}
          ref={navRef}
        >
          <div
            className=" z-50 fixed top-5 left-5 w-max"
            ref={iconRef}
            onClick={() => setShow(!show)}
          >
            <SortRoundedIcon className="text-white" />
          </div>
          <Link to="/">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white freedom text-5xl uppercase"
              onClick={() => setShow(!show)}
            >
              Home
            </motion.h1>
          </Link>
          <Link to="/elcamino">
            <motion.h1
              onClick={() => {
                setShow(!show);
              }}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white freedom text-5xl uppercase"
            >
              El Camino
            </motion.h1>
          </Link>
          <Link to="mailto:support@shreshta.tech">
            <motion.h1
              onClick={() => {
                setShow(!show);
              }}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white freedom text-5xl uppercase"
            >
              Support
            </motion.h1>
          </Link>
          <Link to="/about">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white freedom text-5xl uppercase"
              onClick={() => setShow(!show)}
            >
              About Us
            </motion.h1>
          </Link>
        </motion.div>
      )}

      {/* Mobile Version End*/}
    </>
  );
}
