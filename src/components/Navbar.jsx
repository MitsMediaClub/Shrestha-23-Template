import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const iconRef = useRef();
  const navRef = useRef();

  return (
    <>
      <div className="h-20 flex gap-10 justify-between items-center border-b-2 mx-20 sm:hidden px-5">
        <Link to="/elcamino">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white freedom text-2xl"
          >
            El Camino
          </motion.h1>
        </Link>
        <Link to="mailto:support@shreshta.tech">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white freedom text-2xl"
          >
            Support
          </motion.h1>
        </Link>
        <img src={logo} alt="Tech Logo" className="h-44 w-44" />
        <Link to="/about">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white freedom text-2xl"
          >
            About Us
          </motion.h1>
        </Link>
        <Link to="/">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white freedom text-2xl"
          >
            Home
          </motion.h1>
        </Link>
      </div>

      {/* Mobile Version */}
      <div className="hidden h-10 border-b-2 mt-5 pb-5 sm:block">
        <div
          className=" flex justify-start items-center  hidden sm:block px-5 w-max"
          ref={iconRef}
          onClick={() => setShow(!show)}
        >
          <SortRoundedIcon className="text-white" />
        </div>
      </div>

      {show && (
        <motion.div
          className={` h-[600px] w-screen flex flex-col items-center justify-center  mt-10 gap-5`}
          ref={navRef}
        >
          <Link to="/elcamino">
            <motion.h1
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
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white freedom text-5xl uppercase"
            >
              Support
            </motion.h1>
          </Link>
          <img src={logo} alt="Tech Logo" className="h-44 w-44 hidden" />
          <Link to="/about">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white freedom text-5xl uppercase"
            >
              About Us
            </motion.h1>
          </Link>
          <Link to="/">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white freedom text-5xl uppercase"
            >
              Home
            </motion.h1>
          </Link>
        </motion.div>
      )}

      {/* Mobile Version End*/}
    </>
  );
}
