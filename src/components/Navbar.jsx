import { Link } from "react-router-dom";
import cross from "../assets/black_X.png";
import sreta from "../assets/Logo.webp";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(false);
  let item_value = sessionStorage.getItem("banner_closed");
  const [show1, setShow1] = useState(item_value !== "1");
  const iconRef = useRef();
  const navRef = useRef();

  return (
    <>
      {show1 && (<div className={`z-10 py-2 w-full text-xs md:text-xl font-medium justify-between px-7 md:px-10 text-black items-center bg-blue flex`}>
        <span>Proshow entry is limited to mitsians and participants of techno-cultural events.</span>
        <img src={cross} alt="Close" className=" h-3 w-3 cursor-pointer" onClick={() => {
                sessionStorage.setItem("banner_closed", 1);
                setShow1(!show1);
              }} />
      </div>)}
      <div className="flex gap-10 justify-between font-base items-center py-2 border-b-0.5 border-white/50 mx-20 sm:hidden px-5 z-10">
        <Link to="/nexus">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-white/90 drummer text-xl"
          >
            Nexus
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
            onClick={() => setShow(!show)}
          >
            <SortRoundedIcon className="text-white" />
          </div>
          <Link to="/">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white drummer text-3xl uppercase"
              onClick={() => setShow(!show)}
            >
              Home
            </motion.h1>
          </Link>
          <Link to="/nexus">
            <motion.h1
              onClick={() => {
                setShow(!show);
              }}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white drummer text-3xl uppercase"
            >
              Nexus
            </motion.h1>
          </Link>
          <Link to="/rules">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
              transition={{ duration: 0.5, delay: 0.3 }}
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
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white drummer text-3xl uppercase"
            >
              Support
            </motion.h1>
          </Link>

          <Link to="/about">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white drummer text-3xl uppercase"
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
