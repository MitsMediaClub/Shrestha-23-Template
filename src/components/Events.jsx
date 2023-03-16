import startcard from "../assets/Events/StartCard.svg";
import logo from "../assets/Footer/logo-only.svg";
import spotify from "../assets/Footer/Spotify.svg";
import instagram from "../assets/Footer/Instagram.svg";
import twitch from "../assets/Footer/Twitch.svg";
import dribble from "../assets/Footer/Dribbble.svg";
import facebook from "../assets/Footer/Facebook.svg";
import circle from "../assets/Footer/Bcircle.svg";
import Card from "./Card";
import astro from "../assets/Footer/astro.svg";
import flipb from "../assets/Events/FlipBlack.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Events() {
  const [culture, setCulture] = useState(true);
  const [tech, setTech] = useState(false);
  const cultureRef = useRef();
  const techRef = useRef();
  const cultureRefM = useRef();
  const techRefM = useRef();
  return (
    <motion.div className="pt-28 h-screen sm:pt-10">
      <div className="h-auto flex w-full sm:flex-col">
        <div className="w-1/2 flex flex-col gap-10 ml-20 sm:gap-2 sm:ml-0 sm:w-full sm:px-5">
          <h1 className="text-7xl text-white drummer sm:text-3xl ">SHRESHTA</h1>
          <h1 className="text-7xl text-white drummer sm:text-3xl">EXPANDING</h1>
          <h1 className="text-7xl text-white drummer sm:text-3xl">AWARENESS</h1>
        </div>
        <div className="w-1/2 flex items-center flex-col gap-5 pl-56 sm:hidden">
          <img
            src={startcard}
            alt="a card with Shreshta's logo on it"
            className="w-60"
          />
          <div className="w-80 ">
            <h1 className="transext2t text-lg text-blue quicksand font-bold">
              Shreshta is a cultural techical event whose main purpose is to
              introduce the future to you.
            </h1>
          </div>
        </div>
        {/* Mobile Version */}
        <div className="h-44 hidden sm:block sm:flex sm:pt-10 sm:gap-5 sm:border-t-2 sm:pb-5 sm:mx-5">
          <img
            src={startcard}
            alt="a card with Shreshta's logo on it"
            className="w-28"
          />
          <div className="w-56">
            <h1 className="transtext1 text-lg text-blue quicksand font-bold">
              Shreshta is a cultural techical event whose main purpose is to
              introduce the future to you.
            </h1>
          </div>
        </div>
        {/* Mobile Version End*/}
      </div>
      <div className="w-full pt-20 sm:hidden">
        <div className="h-16 flex justify-center">
          <button
            onClick={() => {
              if (cultureRef.current.classList.contains("stw")) {
                return;
              }
              setCulture(true);
              cultureRef.current.classList.toggle("stw");
              techRef.current.classList.toggle("stw");
              setTech(false);
            }}
            ref={cultureRef}
            className=" text-3xl p-3 stw w-2/6 drummer border-b-2"
          >
            <span className="text-white">Cultural</span>
          </button>
          <button
            onClick={() => {
              if (techRef.current.classList.contains("stw")) {
                return;
              }
              setCulture(false);
              cultureRef.current.classList.toggle("stw");
              techRef.current.classList.toggle("stw");
              setTech(true);
            }}
            ref={techRef}
            className="text-white text-3xl p-3 drummer w-2/6 border-b-2"
          >
            Technical
          </button>
        </div>
        <AnimatePresence>
          {culture && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="ml-10 flex flex-wrap sm:ml-0 sm:flex-nowrap sm:overscroll-x-auto justify-center"
            >
              <Card
                no={"001"}
                name={"Adaptune"}
                flip={flipb}
                time={"9AM-10AM"}
                date={"31/3/23"}
                location={"Main Stage"}
                bg={"card1"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"002"}
                name={"Step N Synchro"}
                flip={flipb}
                time={"10AM-11AM"}
                date={"31/3/23"}
                location={"Main Stage"}
                bg={"card2"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"003"}
                name={"Duet Song"}
                flip={flipb}
                time={"11AM-12AM"}
                date={"31/3/23"}
                location={"Main Stage"}
                bg={"card3"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"004"}
                name={"Music Song"}
                flip={flipb}
                time={"1PM-5PM"}
                date={"31/3/23"}
                location={"Main Stage"}
                bg={"card4"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"005"}
                name={"Stand Up Comedy"}
                flip={flipb}
                time={"9AM-10AM"}
                date={"1/4/23"}
                location={"Main Stage"}
                bg={"card5"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"006"}
                name={"Mime"}
                flip={flipb}
                time={"10AM-12PM"}
                date={"1/4/23"}
                location={"Main Stage"}
                bg={"card6"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"007"}
                name={"Movie Spoof"}
                flip={flipb}
                time={"12PM-1PM"}
                date={"1/4/23"}
                location={"Main Stage"}
                bg={"card7"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"008"}
                name={"Group Dance"}
                flip={flipb}
                time={"1PM-3PM"}
                date={"1/4/23"}
                location={"Main Stage"}
                bg={"card8"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"009"}
                name={"Theme Show"}
                flip={flipb}
                time={"3PM-5PM"}
                date={"1/4/23"}
                location={"Main Stage"}
                bg={"card9"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {tech && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="ml-10 flex flex-wrap sm:ml-0 sm:flex-nowrap sm:overscroll-x-auto justify-center"
            >
              <Card
                no={"001"}
                name={"Ascension Cup"}
                flip={flipb}
                time={"9AM-10AM"}
                date={"20/3/23"}
                location={"Online"}
                link={"https://bit.ly/Ascension-Cup"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"002"}
                name={"Evolve"}
                flip={flipb}
                time={"10AM-11AM"}
                date={"28/3/23"}
                location={"Visvesvaraya Hall"}
                link={"https://www.yepdesk.com/evolve1/private/3bisjatgg2"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"003"}
                name={"Aviation Workshop"}
                flip={flipb}
                time={"11AM-12AM"}
                date={"31/3/23"}
                location={"Micheal Faraday Hall"}
                link={
                  "https://www.yepdesk.com/aviation-workshop/private/v3mjgbg4li"
                }
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"004"}
                name={"Creatrix"}
                flip={flipb}
                time={"1PM-5PM"}
                date={"31/3/23"}
                location={"Cad Lab, Project Lab, M 113"}
                link={"https://www.yepdesk.com/creatrix3/private/9kr793agn5"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"005"}
                name={"Bridge X"}
                flip={flipb}
                time={"9AM-10AM"}
                date={"31/3/23"}
                location={"Mech Cad Lab, Mech Project Lab"}
                link={"https://www.yepdesk.com/bridge-x/private/r32562fqk7"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"006"}
                name={"Gladiator"}
                flip={flipb}
                time={"10AM-12PM"}
                date={"31/3/23"}
                location={"Lawn in front of Ramanujan Block"}
                link={"https://www.yepdesk.com/gladiator/private/ftv0d5jf95"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"007"}
                name={"Armageddon"}
                flip={flipb}
                time={"12PM-1PM"}
                date={"1/4/23"}
                location={"Room Numbers 510,507,613,604"}
                link={"https://www.yepdesk.com/armageddon1/private/rsocmo1fao"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"008"}
                name={"Pitch Perfect"}
                flip={flipb}
                time={"1PM-3PM"}
                date={"1/4/23"}
                location={"Albert Einstein Hall"}
                link={
                  "https://www.yepdesk.com/pitch-perfect/private/sn9qac9650"
                }
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"009"}
                name={"Trackador"}
                flip={flipb}
                time={"3PM-5PM"}
                date={"1/4/23"}
                location={"MP and MC Lab"}
                link={"https://www.yepdesk.com/tracador/private/nfrgsqlaci"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"010"}
                name={"Project Expo"}
                flip={flipb}
                time={"1PM-5PM"}
                date={"31/3/23"}
                location={"Vishweshwaraya Hall"}
                link={
                  "https://www.yepdesk.com/project-expo6/private/769jjahdiu"
                }
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"011"}
                name={"Eneriya"}
                flip={flipb}
                time={"9AM-10AM"}
                date={"31/3/23"}
                location={"Mech Cad Lab, Mech Project Lab"}
                link={"https://www.yepdesk.com/eneriya/private/q77ivtoab8"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"012"}
                name={"End Game"}
                flip={flipb}
                time={"10AM-12PM"}
                date={"31/3/23"}
                location={"Lawn in front of Ramanujan Block"}
                link={"https://www.yepdesk.com/end-game/private/t4rtmg9aj2"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"013"}
                name={"Metaverse Expo"}
                flip={flipb}
                time={"12PM-1PM"}
                date={"1/4/23"}
                location={"Room Numbers 510,507,613,604"}
                link={
                  "https://www.yepdesk.com/metaverse-expo/private/c2f262idh8"
                }
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"014"}
                name={"Transcendus"}
                flip={flipb}
                time={"1PM-3PM"}
                date={"1/4/23"}
                location={"Albert Einstein Hall"}
                link={"https://www.yepdesk.com/transcendus/private/m95hju6a78"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
              <Card
                no={"015"}
                name={"Ev Workshop"}
                flip={flipb}
                time={"3PM-5PM"}
                date={"1/4/23"}
                location={"MP and MC Lab"}
                link={"https://www.yepdesk.com/ev-worshop/private/oad0lo2e52"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
                more={true}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Version */}
      <div className="h-16 flex justify-center hidden sm:block sm:flex">
        <button
          onClick={() => {
            if (cultureRefM.current.classList.contains("stw")) {
              return;
            }
            setCulture(true);
            cultureRefM.current.classList.toggle("stw");
            techRefM.current.classList.toggle("stw");
            setTech(false);
          }}
          ref={cultureRefM}
          className=" text-3xl p-3 stw w-2/6 drummer border-b-2 sm:text-lg sm:w-full sm:mt-5 sm:ml-5"
        >
          <span className="text-white">Cultural</span>
        </button>
        <button
          onClick={() => {
            if (techRefM.current.classList.contains("stw")) {
              return;
            }
            setCulture(false);
            cultureRefM.current.classList.toggle("stw");
            techRefM.current.classList.toggle("stw");
            setTech(true);
          }}
          ref={techRefM}
          className="text-white text-3xl p-3 drummer w-2/6 border-b-2 sm:text-lg sm:w-full sm:mt-5 sm:mr-5"
        >
          Technical
        </button>
      </div>
      <div className="hidden sm:block sm:overflow-x-auto sm:h-[500px] sm:px-5">
        {culture && (
          <div className="ml-44 flex  sm:ml-0 sm:overscroll-x-auto ">
            <Card
              no={"001"}
              name={"Adaptune"}
              flip={flipb}
              time={"9AM-10AM"}
              date={"31/3/23"}
              location={"Main Stage"}
              bg={"card1"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"002"}
              name={"Step N Synchro"}
              flip={flipb}
              time={"10AM-11AM"}
              date={"31/3/23"}
              location={"Main Stage"}
              bg={"card2"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"003"}
              name={"Duet Song"}
              flip={flipb}
              time={"11AM-12AM"}
              date={"31/3/23"}
              location={"Main Stage"}
              bg={"card3"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"004"}
              name={"Music Song"}
              flip={flipb}
              time={"1PM-5PM"}
              date={"31/3/23"}
              location={"Main Stage"}
              bg={"card4"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"005"}
              name={"Stand Up Comedy"}
              flip={flipb}
              time={"9AM-10AM"}
              date={"1/4/23"}
              location={"Main Stage"}
              bg={"card5"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"006"}
              name={"Mime"}
              flip={flipb}
              time={"10AM-12PM"}
              date={"1/4/23"}
              location={"Main Stage"}
              bg={"card6"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"007"}
              name={"Movie Spoof"}
              flip={flipb}
              time={"12PM-1PM"}
              date={"1/4/23"}
              location={"Main Stage"}
              bg={"card7"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"008"}
              name={"Group Dance"}
              flip={flipb}
              time={"1PM-3PM"}
              date={"1/4/23"}
              location={"Main Stage"}
              bg={"card8"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"009"}
              name={"Theme Show"}
              flip={flipb}
              time={"3PM-5PM"}
              date={"1/4/23"}
              location={"Main Stage"}
              bg={"card9"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
          </div>
        )}
        {tech && (
          <div className="ml-44 flex  sm:ml-0 sm:overscroll-x-auto ">
            <Card
              no={"001"}
              name={"Ascension Cup"}
              flip={flipb}
              time={"9AM-10AM"}
              date={"20/3/23"}
              location={"Online"}
              link={"https://bit.ly/Ascension-Cup"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"002"}
              name={"Evolve"}
              flip={flipb}
              time={"10AM-11AM"}
              date={"28/3/23"}
              location={"Visvesvaraya Hall"}
              link={"https://www.yepdesk.com/evolve1/private/3bisjatgg2"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"003"}
              name={"Aviation Workshop"}
              flip={flipb}
              time={"11AM-12AM"}
              date={"31/3/23"}
              location={"Micheal Faraday Hall"}
              link={
                "htts://www.yepdesk.com/aviation-workshop/private/v3mjgbg4li"
              }
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"004"}
              name={"Creatrix"}
              flip={flipb}
              time={"1PM-5PM"}
              date={"31/3/23"}
              location={"Cad Lab, Project Lab, M 113"}
              link={"https://www.yepdesk.com/creatrix3/private/9kr793agn5"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"005"}
              name={"Bridge X"}
              flip={flipb}
              time={"9AM-10AM"}
              date={"31/3/23"}
              location={"Mech Cad Lab, Mech Project Lab"}
              link={"https://www.yepdesk.com/bridge-x/private/r32562fqk7"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"006"}
              name={"Gladiator"}
              flip={flipb}
              time={"10AM-12PM"}
              date={"31/3/23"}
              location={"Lawn in front of Ramanujan Block"}
              link={"https://www.yepdesk.com/gladiator/private/ftv0d5jf95"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"007"}
              name={"Armageddon"}
              flip={flipb}
              time={"12PM-1PM"}
              date={"1/4/23"}
              location={"Room Numbers 510,507,613,604"}
              link={"https://www.yepdesk.com/armageddon1/private/rsocmo1fao"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"008"}
              name={"Pitch Perfect"}
              flip={flipb}
              time={"1PM-3PM"}
              date={"1/4/23"}
              location={"Albert Einstein Hall"}
              link={"https://www.yepdesk.com/pitch-perfect/private/sn9qac9650"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"009"}
              name={"Trackador"}
              flip={flipb}
              time={"3PM-5PM"}
              date={"1/4/23"}
              location={"MP and MC Lab"}
              link={"https://www.yepdesk.com/tracador/private/nfrgsqlaci"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"010"}
              name={"Project Expo"}
              flip={flipb}
              time={"1PM-5PM"}
              date={"31/3/23"}
              location={"Vishweshwaraya Hall"}
              link={"https://www.yepdesk.com/project-expo6/private/769jjahdiu"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"011"}
              name={"Eneriya"}
              flip={flipb}
              time={"9AM-10AM"}
              date={"31/3/23"}
              location={"Mech Cad Lab, Mech Project Lab"}
              link={"https://www.yepdesk.com/eneriya/private/q77ivtoab8"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"012"}
              name={"End Game"}
              flip={flipb}
              time={"10AM-12PM"}
              date={"31/3/23"}
              location={"Lawn in front of Ramanujan Block"}
              link={"https://www.yepdesk.com/end-game/private/t4rtmg9aj2"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"013"}
              name={"Metaverse Expo"}
              flip={flipb}
              time={"12PM-1PM"}
              date={"1/4/23"}
              location={"Room Numbers 510,507,613,604"}
              link={"https://www.yepdesk.com/metaverse-expo/private/c2f262idh8"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"014"}
              name={"Transcendus"}
              flip={flipb}
              time={"1PM-3PM"}
              date={"1/4/23"}
              location={"Albert Einstein Hall"}
              link={"https://www.yepdesk.com/transcendus/private/m95hju6a78"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
            <Card
              no={"015"}
              name={"Ev Workshop"}
              flip={flipb}
              time={"3PM-5PM"}
              date={"1/4/23"}
              location={"MP and MC Lab"}
              link={"https://www.yepdesk.com/ev-worshop/private/oad0lo2e52"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
              more={true}
            />
          </div>
        )}
      </div>
      {/* Mobile Version End*/}

      <div className=" h-[600px] flex justify-between sm:flex-col sm:items-start sm:justify-center relative pt-10 sm:h-max sm:gap-5">
        <div className="h-full w-1/2 flex gap-2 items-end p-2 sm:p-0 sm:items-center">
          <img src={logo} className="h-12 w-12" />
          <h1 className="drummer text-white text-lg sm:text-md">SRESHTHA</h1>
        </div>
        <div className="h-full w-1/2 flex flex-col gap-10 justify-end mr-5 items-end">
          <div className="flex  gap-7 justify-center sm:hidden">
            <img src={spotify} alt={"Spotify"} className="w-10 h-10" />
            <img src={facebook} alt={"Facebook"} className="w-10 h-10" />
            <img src={instagram} alt={"Instagram"} className="w-10 h-10" />
            <img src={twitch} alt={"Twitch"} className="w-10 h-10" />
            <img src={dribble} alt={"Dribbble"} className="w-10 h-10" />
          </div>
          <h1 className="quicksand text-white sm:pl-3">
            2023 MITS. All rights reserved.
          </h1>
        </div>
        <img src={circle} alt="" className=" absolute bottom-0 sm:h-44" />
        <img
          src={astro}
          className="h-44 w-44 sm:w-24 sm:h-24 absolute bottom-[410px] left-[675px]"
        />
      </div>
    </motion.div>
  );
}
