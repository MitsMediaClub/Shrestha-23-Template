import { Link } from "react-router-dom";
import logo from "../assets/Footer/logo-only.svg";
import sreta from "../assets/Logo.webp";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const iconRef = useRef();
  const navRef = useRef();

  return (
    <>
      <div className="flex gap-10 justify-between font-base items-center py-2 border-b-0.5 border-white/50 mx-20 sm:hidden px-5 z-10">
        <Link to="/">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white/90 drummer text-xl"
          >
            Home
          </motion.h1>
        </Link>
        <Link to="/elcamino">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white/90 drummer text-xl"
          >
            El Camino
          </motion.h1>
        </Link>
        <div class="h-16 border-r-0.5 border-white/50 rotate-12"></div>
        <Link to="/">     
          <img src={sreta} alt="Tech Logo" className="h-20 w-20" />
        </Link>
        <div class="h-16 border-l-0.5 border-white/50 rotate-12"></div>
        <Link to="/support">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white/90 drummer text-xl"
          >
            Support
          </motion.h1>
        </Link>
        <Link to="/about">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white/90 drummer text-xl"
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
          <Link to="/rules">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white drummer text-3xl uppercase"
              onClick={() => setShow(!show)}
            >
              Events
            </motion.h1>
          </Link>
          <Link to="/elcamino">
            <motion.h1
              onClick={() => {
                setShow(!show);
              }}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white drummer text-3xl uppercase"
            >
              El Camino
            </motion.h1>
          </Link>

          <Link to="/support">
            <motion.h1
              onClick={() => {
                setShow(!show);
              }}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white drummer text-3xl uppercase"
            >
              Support
            </motion.h1>
          </Link>
          <Link to={"/"}>
            <img src={logo} alt="Tech Logo" className="h-44 w-44 hidden" />
          </Link>
          <Link to="/about">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white drummer text-3xl uppercase"
              onClick={() => setShow(!show)}
            >
              About Us
            </motion.h1>
          </Link>
          <Link to="/">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white drummer text-3xl uppercase"
              onClick={() => setShow(!show)}
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
