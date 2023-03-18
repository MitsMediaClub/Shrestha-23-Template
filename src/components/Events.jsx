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
                bg={"cardback"}
                cardback={"cardback"}
                button={true}
                desc={
                  "Genres, classics and style, combined with the hues of adaptunes, sync with SHUFFLE at SHRESTHA'23, solid and classy."
                }
                link={"https://www.yepdesk.com/profile/shreshta23"}
              />
              <Card
                no={"002"}
                name={"Step N Synchro"}
                flip={flipb}
                time={"10AM-11AM"}
                date={"31/3/23"}
                location={"Main Stage"}
                bg={"cardback"}
                cardback={"cardback"}
                button={true}
                desc={
                  "Mirror the moves in an exciting showcase of extraordinary co-ordination and synchronisation in STEP N SYNCHRO at SHRESTHA'23, majestic and captivating."
                }
                link={"https://www.yepdesk.com/profile/shreshta23"}
              />
              <Card
                no={"003"}
                name={"Duet Song"}
                flip={flipb}
                time={"11AM-12AM"}
                date={"31/3/23"}
                location={"Main Stage"}
                bg={"cardback"}
                cardback={"cardback"}
                button={true}
                desc={
                  "Get ready to immerse yourself in the melodies of soft music with a perfect blend of voices at SWARA-RAAGA at SHRESTHA'23"
                }
                link={"https://www.yepdesk.com/profile/shreshta23"}
              />
              <Card
                no={"004"}
                name={"Band Wars"}
                flip={flipb}
                time={"1PM-5PM"}
                date={"31/3/23"}
                location={"Main Stage"}
                bg={"cardback"}
                cardback={"cardback"}
                button={true}
                desc={
                  "Beats and Rhythms running over passionate voices, making everyone groove to the fiery face off at BANDWARS of SHRESHTA'23, enchanting and electrifying."
                }
                link={"https://www.yepdesk.com/profile/shreshta23"}
              />
              <Card
                no={"005"}
                name={"Stand Up Comedy"}
                flip={flipb}
                time={"9AM-10AM"}
                date={"1/4/23"}
                location={"Main Stage"}
                bg={"cardback"}
                cardback={"cardback"}
                button={true}
                desc={
                  "Beam with the most creative spin on the FUNLIMITED event at SHRESTHA'23, buckle up to witness some epic meltdowns and strong stand-up comedy exhibit."
                }
                link={"https://www.yepdesk.com/profile/shreshta23"}
              />
              <Card
                no={"006"}
                name={"Mime"}
                flip={flipb}
                time={"10AM-12PM"}
                date={"1/4/23"}
                location={"Main Stage"}
                bg={"cardback"}
                cardback={"cardback"}
                button={true}
                desc={
                  "Expressions delivered through extreme sensitivity and clarity, the calm of MIME at SHRESTHA'23."
                }
                link={"https://www.yepdesk.com/profile/shreshta23"}
              />
              <Card
                no={"007"}
                name={"Movie Spoof"}
                flip={flipb}
                time={"12PM-1PM"}
                date={"1/4/23"}
                location={"Main Stage"}
                bg={"cardback"}
                cardback={"cardback"}
                button={true}
                desc={
                  "To witness the finest set-pieces of our favourite movies, dialogues and screenplays, roll with us at LIGHTS! CAMERA! ACTION! at SHRESHTA'23, feature and moving."
                }
                link={"https://www.yepdesk.com/profile/shreshta23"}
              />
              <Card
                no={"008"}
                name={"Group Dance"}
                flip={flipb}
                time={"1PM-3PM"}
                date={"1/4/23"}
                location={"Main Stage"}
                bg={"cardback"}
                cardback={"cardback"}
                button={true}
                desc={
                  "Elevating the glories of dream work, team work and foot work ,watch out for the biggest picture in the house of SHRESHTA'23's NAACHO NAACHO."
                }
                link={"https://www.yepdesk.com/profile/shreshta23"}
              />
              <Card
                no={"009"}
                name={"Theme Show"}
                flip={flipb}
                time={"3PM-5PM"}
                date={"1/4/23"}
                location={"Main Stage"}
                bg={"cardback"}
                cardback={"cardback"}
                button={true}
                desc={
                  "Ace the best of your fashion in theme, putting the chic and ombre look in the light, painted in the runway, get ramp ready at THEME SHOW of SHRESTHA'23, fancy and fabulous."
                }
                link={"https://www.yepdesk.com/profile/shreshta23"}
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
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
              />
              <Card
                no={"002"}
                name={"Evolve"}
                flip={flipb}
                time={"10AM-11AM"}
                date={"28/3/23"}
                location={"Visvesvaraya Hall"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Colloquium on the scope, challenges and impacts of electriv vehicles"
                }
              />
              <Card
                no={"003"}
                name={"Aviation Workshop"}
                flip={flipb}
                time={"11AM-12AM"}
                date={"31/3/23"}
                location={"Micheal Faraday Hall"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "From Build to Flight: Learn How to Make Your Own RC Trainer Plane at our Workshop"
                }
              />
              <Card
                no={"004"}
                name={"Creatrix"}
                flip={flipb}
                time={"1PM-5PM"}
                date={"31/3/23"}
                location={"Cad Lab, Project Lab, M 113"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Hello folks!!!🤗Are you idea hamsters?💡 If yes, CREATRIX brings before you a perfect chance  to accelerate📈 your creativity and showcase your skills in the field of Analysis, design and prototyping."
                }
              />
              <Card
                no={"005"}
                name={"Bridge X"}
                flip={flipb}
                time={"9AM-10AM"}
                date={"31/3/23"}
                location={"Mech Cad Lab, Mech Project Lab"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Get ready to unleash your inner engineer and compete against the best in our bridge building challenge - where creativity, design, and innovation collide to build the strongest and most spectacular bridges!"
                }
              />
              <Card
                no={"006"}
                name={"Gladiator"}
                flip={flipb}
                time={"10AM-12PM"}
                date={"31/3/23"}
                location={"Lawn in front of Ramanujan Block"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "And the crowd goes wild for the day as we have the roars of engines soar past the track as the mud splashes and the rocks fly with the guest of wind that bears excitement. Ready to test your ride, Come on in fellow enthusiasts!!"
                }
              />
              <Card
                no={"007"}
                name={"Arma- geddon"}
                flip={flipb}
                time={"12PM-1PM"}
                date={"1/4/23"}
                location={"Room Numbers 510,507,613,604"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "The count down has begun. Embark on a riveting quest to save mankind from extinction. A battle of wits and mettle. Only the worthy survive. Do you have what it takes?"
                }
              />
              <Card
                no={"008"}
                name={"Pitch Perfect"}
                flip={flipb}
                time={"1PM-3PM"}
                date={"1/4/23"}
                location={"Albert Einstein Hall"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
              />
              <Card
                no={"009"}
                name={"Trackador"}
                flip={flipb}
                time={"3PM-5PM"}
                date={"1/4/23"}
                location={"MP and MC Lab"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Are you ready to take on the ultimate tech challenge? Join us for the Line Follower RC Car competition 🏎️and witness your creation flawlessly track its course🏁. With a chance to win big from our Prize Pool of 10k 💸💰, this is the thrill ride you don't want to miss!⚡"
                }
              />
              <Card
                no={"010"}
                name={"Project Expo"}
                flip={flipb}
                time={"1PM-5PM"}
                date={"31/3/23"}
                location={"Vishweshwaraya Hall"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Step into the world of Novellio, where innovation meets elegance. Discover the most recent innovations and ground-breaking concepts as our gifted teams present their creative initiatives. Join us for an event that will astound and impress you while being uplifting and instructive."
                }
              />
              <Card
                no={"011"}
                name={"Eneriya"}
                flip={flipb}
                time={"9AM-10AM"}
                date={"31/3/23"}
                location={"Mech Cad Lab, Mech Project Lab"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Join us to find solutions to combat climate change by building solutions for Climate Action and Energy Sustainability. ⚡ ENERYIA ⚡ Hackathon 2023 presents you an opportunity to find innovative 💡 solutions and to win  a 💫 prize pool worth 1Lakh 💫and more."
                }
              />
              <Card
                no={"012"}
                name={"End Game"}
                flip={flipb}
                time={"10AM-12PM"}
                date={"31/3/23"}
                location={"Lawn in front of Ramanujan Block"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
              />
              <Card
                no={"013"}
                name={"Metaverse Expo"}
                flip={flipb}
                time={"12PM-1PM"}
                date={"1/4/23"}
                location={"Room Numbers 510,507,613,604"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Step into a whole new world with  cutting-edge virtual shared spaces technology, designed to give you a one-of-a-kind immersive experience. Are you ready to explore beyond the boundaries of reality?"
                }
              />
              <Card
                no={"014"}
                name={"Trans- cendus"}
                flip={flipb}
                time={"1PM-3PM"}
                date={"1/4/23"}
                location={"Albert Einstein Hall"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Are you ready to flex your skills and take on a challenge like no other? Enter our inter-disciplinary competition and put your abilities to the test. With diverse teams and unique challenges, it's time to prove you have what it takes to be the ultimate champion!"
                }
              />
              <Card
                no={"015"}
                name={"Ev Workshop"}
                flip={flipb}
                time={"3PM-5PM"}
                date={"1/4/23"}
                location={"MP and MC Lab"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
                }
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="ml-44 flex  sm:ml-0 sm:overscroll-x-auto "
          >
            <Card
              no={"001"}
              name={"Adaptune"}
              flip={flipb}
              time={"9AM-10AM"}
              date={"31/3/23"}
              location={"Main Stage"}
              bg={"cardback"}
              cardback={"cardback"}
              button={true}
              desc={
                "Genres, classics and style, combined with the hues of adaptunes, sync with SHUFFLE at SHRESTHA'23, solid and classy."
              }
              link={"https://www.yepdesk.com/profile/shreshta23"}
            />
            <Card
              no={"002"}
              name={"Step N Synchro"}
              flip={flipb}
              time={"10AM-11AM"}
              date={"31/3/23"}
              location={"Main Stage"}
              bg={"cardback"}
              cardback={"cardback"}
              button={true}
              desc={
                "Mirror the moves in an exciting showcase of extraordinary co-ordination and synchronisation in STEP N SYNCHRO at SHRESTHA'23, majestic and captivating."
              }
              link={"https://www.yepdesk.com/profile/shreshta23"}
            />
            <Card
              no={"003"}
              name={"Duet Song"}
              flip={flipb}
              time={"11AM-12AM"}
              date={"31/3/23"}
              location={"Main Stage"}
              bg={"cardback"}
              cardback={"cardback"}
              button={true}
              desc={
                "Get ready to immerse yourself in the melodies of soft music with a perfect blend of voices at SWARA-RAAGA at SHRESTHA'23"
              }
              link={"https://www.yepdesk.com/profile/shreshta23"}
            />
            <Card
              no={"004"}
              name={"Band Wars"}
              flip={flipb}
              time={"1PM-5PM"}
              date={"31/3/23"}
              location={"Main Stage"}
              bg={"cardback"}
              cardback={"cardback"}
              button={true}
              desc={
                "Beats and Rhythms running over passionate voices, making everyone groove to the fiery face off at BANDWARS of SHRESHTA'23, enchanting and electrifying."
              }
              link={"https://www.yepdesk.com/profile/shreshta23"}
            />
            <Card
              no={"005"}
              name={"Stand Up Comedy"}
              flip={flipb}
              time={"9AM-10AM"}
              date={"1/4/23"}
              location={"Main Stage"}
              bg={"cardback"}
              cardback={"cardback"}
              button={true}
              desc={
                "Beam with the most creative spin on the FUNLIMITED event at SHRESTHA'23, buckle up to witness some epic meltdowns and strong stand-up comedy exhibit."
              }
              link={"https://www.yepdesk.com/profile/shreshta23"}
            />
            <Card
              no={"006"}
              name={"Mime"}
              flip={flipb}
              time={"10AM-12PM"}
              date={"1/4/23"}
              location={"Main Stage"}
              bg={"cardback"}
              cardback={"cardback"}
              button={true}
              desc={
                "Expressions delivered through extreme sensitivity and clarity, the calm of MIME at SHRESTHA'23."
              }
              link={"https://www.yepdesk.com/profile/shreshta23"}
            />
            <Card
              no={"007"}
              name={"Movie Spoof"}
              flip={flipb}
              time={"12PM-1PM"}
              date={"1/4/23"}
              location={"Main Stage"}
              bg={"cardback"}
              cardback={"cardback"}
              button={true}
              desc={
                "To witness the finest set-pieces of our favourite movies, dialogues and screenplays, roll with us at LIGHTS! CAMERA! ACTION! at SHRESHTA'23, feature and moving."
              }
              link={"https://www.yepdesk.com/profile/shreshta23"}
            />
            <Card
              no={"008"}
              name={"Group Dance"}
              flip={flipb}
              time={"1PM-3PM"}
              date={"1/4/23"}
              location={"Main Stage"}
              bg={"cardback"}
              cardback={"cardback"}
              button={true}
              desc={
                "Elevating the glories of dream work, team work and foot work ,watch out for the biggest picture in the house of SHRESHTA'23's NAACHO NAACHO."
              }
              link={"https://www.yepdesk.com/profile/shreshta23"}
            />
            <Card
              no={"009"}
              name={"Theme Show"}
              flip={flipb}
              time={"3PM-5PM"}
              date={"1/4/23"}
              location={"Main Stage"}
              bg={"cardback"}
              cardback={"cardback"}
              button={true}
              desc={
                "Ace the best of your fashion in theme, putting the chic and ombre look in the light, painted in the runway, get ramp ready at THEME SHOW of SHRESTHA'23, fancy and fabulous."
              }
              link={"https://www.yepdesk.com/profile/shreshta23"}
            />
          </motion.div>
        )}
        {tech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="ml-44 flex  sm:ml-0 sm:overscroll-x-auto "
          >
            <Card
              no={"001"}
              name={"Ascension Cup"}
              flip={flipb}
              time={"9AM-10AM"}
              date={"20/3/23"}
              location={"Online"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
            />
            <Card
              no={"002"}
              name={"Evolve"}
              flip={flipb}
              time={"10AM-11AM"}
              date={"28/3/23"}
              location={"Visvesvaraya Hall"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Colloquium on the scope, challenges and impacts of electriv vehicles"
              }
            />
            <Card
              no={"003"}
              name={"Aviation Workshop"}
              flip={flipb}
              time={"11AM-12AM"}
              date={"31/3/23"}
              location={"Micheal Faraday Hall"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "From Build to Flight: Learn How to Make Your Own RC Trainer Plane at our Workshop"
              }
            />
            <Card
              no={"004"}
              name={"Creatrix"}
              flip={flipb}
              time={"1PM-5PM"}
              date={"31/3/23"}
              location={"Cad Lab, Project Lab, M 113"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Hello folks!!!🤗Are you idea hamsters?💡 If yes, CREATRIX brings before you a perfect chance  to accelerate📈 your creativity and showcase your skills in the field of Analysis, design and prototyping."
              }
            />
            <Card
              no={"005"}
              name={"Bridge X"}
              flip={flipb}
              time={"9AM-10AM"}
              date={"31/3/23"}
              location={"Mech Cad Lab, Mech Project Lab"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Get ready to unleash your inner engineer and compete against the best in our bridge building challenge - where creativity, design, and innovation collide to build the strongest and most spectacular bridges!"
              }
            />
            <Card
              no={"006"}
              name={"Gladiator"}
              flip={flipb}
              time={"10AM-12PM"}
              date={"31/3/23"}
              location={"Lawn in front of Ramanujan Block"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "And the crowd goes wild for the day as we have the roars of engines soar past the track as the mud splashes and the rocks fly with the guest of wind that bears excitement. Ready to test your ride, Come on in fellow enthusiasts!!"
              }
            />
            <Card
              no={"007"}
              name={"Arma- geddon"}
              flip={flipb}
              time={"12PM-1PM"}
              date={"1/4/23"}
              location={"Room Numbers 510,507,613,604"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "The count down has begun. Embark on a riveting quest to save mankind from extinction. A battle of wits and mettle. Only the worthy survive. Do you have what it takes?"
              }
            />
            <Card
              no={"008"}
              name={"Pitch Perfect"}
              flip={flipb}
              time={"1PM-3PM"}
              date={"1/4/23"}
              location={"Albert Einstein Hall"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
            />
            <Card
              no={"009"}
              name={"Trackador"}
              flip={flipb}
              time={"3PM-5PM"}
              date={"1/4/23"}
              location={"MP and MC Lab"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Are you ready to take on the ultimate tech challenge? Join us for the Line Follower RC Car competition 🏎️and witness your creation flawlessly track its course🏁. With a chance to win big from our Prize Pool of 10k 💸💰, this is the thrill ride you don't want to miss!⚡"
              }
            />
            <Card
              no={"010"}
              name={"Project Expo"}
              flip={flipb}
              time={"1PM-5PM"}
              date={"31/3/23"}
              location={"Vishweshwaraya Hall"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Step into the world of Novellio, where innovation meets elegance. Discover the most recent innovations and ground-breaking concepts as our gifted teams present their creative initiatives. Join us for an event that will astound and impress you while being uplifting and instructive."
              }
            />
            <Card
              no={"011"}
              name={"Eneriya"}
              flip={flipb}
              time={"9AM-10AM"}
              date={"31/3/23"}
              location={"Mech Cad Lab, Mech Project Lab"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Join us to find solutions to combat climate change by building solutions for Climate Action and Energy Sustainability. ⚡ ENERYIA ⚡ Hackathon 2023 presents you an opportunity to find innovative 💡 solutions and to win  a 💫 prize pool worth 1Lakh 💫and more."
              }
            />
            <Card
              no={"012"}
              name={"End Game"}
              flip={flipb}
              time={"10AM-12PM"}
              date={"31/3/23"}
              location={"Lawn in front of Ramanujan Block"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
            />
            <Card
              no={"013"}
              name={"Metaverse Expo"}
              flip={flipb}
              time={"12PM-1PM"}
              date={"1/4/23"}
              location={"Room Numbers 510,507,613,604"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Step into a whole new world with  cutting-edge virtual shared spaces technology, designed to give you a one-of-a-kind immersive experience. Are you ready to explore beyond the boundaries of reality?"
              }
            />
            <Card
              no={"014"}
              name={"Trans- cendus"}
              flip={flipb}
              time={"1PM-3PM"}
              date={"1/4/23"}
              location={"Albert Einstein Hall"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Are you ready to flex your skills and take on a challenge like no other? Enter our inter-disciplinary competition and put your abilities to the test. With diverse teams and unique challenges, it's time to prove you have what it takes to be the ultimate champion!"
              }
            />
            <Card
              no={"015"}
              name={"Ev Workshop"}
              flip={flipb}
              time={"3PM-5PM"}
              date={"1/4/23"}
              location={"MP and MC Lab"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Rev up your engines and join us for a thrilling car event featuring classic cars, exotic vehicles"
              }
            />
          </motion.div>
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
