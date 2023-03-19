import startcard from "../assets/Events/StartCard.svg";
import logo from "../assets/Footer/logo-only.svg";
import Footer from "./Footer";
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
          <h1 className="text-7xl text-white drummer sm:text-3xl">TECHNOLOGY</h1>
        </div>
        <div className="w-1/2 flex items-center flex-col gap-5 pl-56 sm:hidden">
          <img
            src={startcard}
            alt="a card with Shreshta's logo on it"
            className="w-60"
          />
          <div className="w-80 ">
            <h1 className="transext2t text-lg text-blue quicksand font-medium">
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
        <div className="h-16 flex justify-center mx-20">
          <button
            onClick={() => {
              if (cultureRef.current.classList.contains("bg-white/10")) {
                return;
              }
              setCulture(true);
              cultureRef.current.classList.toggle("bg-white/10");
              techRef.current.classList.toggle("bg-white/10");
              setTech(false);
            }}
            ref={cultureRef}
            className=" text-3xl p-3 bg-white/10 w-3/6 drummer border-b-0.5 border-white/50"
          >
            <span className="text-white/80">Cultural</span>
          </button>
          <button
            onClick={() => {
              if (techRef.current.classList.contains("bg-white/10")) {
                return;
              }
              setCulture(false);
              cultureRef.current.classList.toggle("bg-white/10");
              techRef.current.classList.toggle("bg-white/10");
              setTech(true);
            }}
            ref={techRef}
            className="text-white/80 text-3xl p-3 drummer w-3/6 border-b-0.5 border-white/50"
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
              className="flex flex-wrap gap-10 mx-20 mt-10 mb-14 justify-between"
            >
              <Card
                no={"001"}
                name={"Adaptune"}
                flip={flipb}
                time={"9AM - 10AM"}
                date={"31-03"}
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
                time={"10AM - 11AM"}
                date={"31-03"}
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
                time={"11AM - 12AM"}
                date={"31-03"}
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
                time={"1PM - 5PM"}
                date={"31-03"}
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
                time={"9AM - 10AM"}
                date={"01-04"}
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
                time={"10AM - 12PM"}
                date={"01-04"}
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
                time={"12PM - 1PM"}
                date={"01-04"}
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
                time={"1PM - 3PM"}
                date={"01-04"}
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
                time={"3PM - 5PM"}
                date={"01-04"}
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
              className="flex flex-wrap gap-10 mx-20  mt-10 mb-14 justify-between"
            >
              <Card
                no={"001"}
                name={"Ascension Cup"}
                flip={flipb}
                time={"9AM - 11PM"}
                date={"20-03"}
                location={"Online"}
                link={"https://www.yepdesk.com/profile/shreshta23"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={"Get ready to step into the fast-paced and adrenaline-fueled VALORANT ASCENSION CUP With a PRIZE POOL of 25K and other goodies Matches are streamed by your favorite Valorant streamers!!"}
              />
              <Card
                no={"002"}
                name={"Evolve"}
                flip={flipb}
                time={"9AM - 11PM"}
                date={"28-03"}
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
                time={"9AM - 11PM"}
                date={"31-03"}
                location={"Micheal Faraday Hall"}
                link={
                  "https://www.yepdesk.com/aviation-workshop/private/v3mjgbg4li"
                }
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
                time={"9AM - 11PM"}
                date={"31-03"}
                location={"Cad Lab, Project Lab, M 113"}
                link={"https://www.yepdesk.com/creatrix3/private/9kr793agn5"}
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
                time={"9AM - 11PM"}
                date={"31-03"}
                location={"Mech Cad Lab, Mech Project Lab"}
                link={"https://www.yepdesk.com/bridge-x/private/r32562fqk7"}
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
                time={"9AM - 11PM"}
                date={"31-03"}
                location={"Lawn in front of Ramanujan Block"}
                link={"https://www.yepdesk.com/gladiator/private/ftv0d5jf95"}
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
                time={"9AM - 11PM"}
                date={"01-04"}
                location={"Room Numbers 510,507,613,604"}
                link={"https://www.yepdesk.com/armageddon1/private/rsocmo1fao"}
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
                time={"9AM - 11PM"}
                date={"01-04"}
                location={"Albert Einstein Hall"}
                link={"https://forms.gle/M46ATF54q6cFLNck6"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Unleash your innovation: Pitch your technological idea to change the world! Welcome to the battlefield of innovative and creative ideas that leverage technology to solve real-world problems. Let's make a positive impact together!"
                }
              />
              <Card
                no={"009"}
                name={"Tracador"}
                flip={flipb}
                time={"9AM - 11PM"}
                date={"01-04"}
                location={"MP and MC Lab"}
                link={"https://www.yepdesk.com/tracador/private/nfrgsqlaci"}
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
                time={"9AM - 11PM"}
                date={"31-03"}
                location={"Vishweshwaraya Hall"}
                link={
                  "https://www.yepdesk.com/project-expo6/private/769jjahdiu"
                }
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
                time={"1/4/23"}
                date={"31/3/23 to"}
                location={"Computer Depatment classrooms"}
                link={"https://linktr.ee/eneryia"}
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
                time={"9AM - 11PM"}
                date={"31-03"}
                location={"Lawn in front of Ramanujan Block"}
                link={"https://www.yepdesk.com/end-game/private/t4rtmg9aj2"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={""}
              />

              <Card
                no={"013"}
                name={"Trans- cendus"}
                flip={flipb}
                time={"9AM - 11PM"}
                date={"01-04"}
                location={"Albert Einstein Hall"}
                link={"https://www.yepdesk.com/transcendus"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Are you ready to flex your skills and take on a challenge like no other? Enter our inter-disciplinary competition and put your abilities to the test. With diverse teams and unique challenges, it's time to prove you have what it takes to be the ultimate champion!"
                }
              />
              <Card
                no={"014"}
                name={"Ev Workshop"}
                flip={flipb}
                time={"9AM - 11PM"}
                date={"01-04"}
                location={"MP and MC Lab"}
                link={"https://www.yepdesk.com/ev-worshop/private/oad0lo2e52"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={""}
              />
              <Card
                no={"015"}
                name={"Mystery Mayhem"}
                flip={flipb}
                time={"9AM - 11PM"}
                date={"01-04"}
                location={"Micheal Faraday Hall"}
                link={"https://www.yepdesk.com/mystery-mayhem"}
                bg={"cardback1"}
                cardback={"cardback1"}
                button={true}
                desc={
                  "Step into the shoes of a detective and solve the ultimate whodunit! Join our murder investigation competition and put your sleuthing skills to the test. With clues to unravel and suspects to interrogate, can you crack the case and emerge victorious?"
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
            if (cultureRefM.current.classList.contains("bg-white/10")) {
              return;
            }
            setCulture(true);
            cultureRefM.current.classList.toggle("bg-white/10");
            techRefM.current.classList.toggle("bg-white/10");
            setTech(false);
          }}
          ref={cultureRefM}
          className=" text-2xl p-3 bg-white/10 w-2/6 drummer border-b-0.5 border-white/50 sm:text-lg sm:w-full sm:mt-5 sm:ml-5"
        >
          <span className="text-white">Cultural</span>
        </button>
        <button
          onClick={() => {
            if (techRefM.current.classList.contains("bg-white/10")) {
              return;
            }
            setCulture(false);
            cultureRefM.current.classList.toggle("bg-white/10");
            techRefM.current.classList.toggle("bg-white/10");
            setTech(true);
          }}
          ref={techRefM}
          className="text-white text-2xl p-3 drummer w-2/6 border-b-0.5 border-white/50 sm:text-lg sm:w-full sm:mt-5 sm:mr-5"
        >
          Technical
        </button>
      </div>
      <div className="hidden sm:block px-5">
        {culture && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap justify-center mt-10 mb-10 gap-10"
          >
            <Card
              no={"001"}
              name={"Adaptune"}
              flip={flipb}
              time={"9AM - 10AM"}
              date={"31-03"}
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
              time={"10AM - 11AM"}
              date={"31-03"}
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
              time={"11AM - 12AM"}
              date={"31-03"}
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
              time={"1PM - 5PM"}
              date={"31-03"}
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
              time={"9AM - 10AM"}
              date={"01-04"}
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
              time={"10AM - 12PM"}
              date={"01-04"}
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
              time={"12PM - 1PM"}
              date={"01-04"}
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
              time={"1PM - 3PM"}
              date={"01-04"}
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
              time={"3PM - 5PM"}
              date={"01-04"}
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
            className="flex flex-wrap justify-center mt-10 mb-10 gap-10"
          >
            <Card
              no={"001"}
              name={"Ascension Cup"}
              flip={flipb}
              time={"9AM - 11PM"}
              date={"20-03"}
              location={"Online"}
              link={"https://www.yepdesk.com/profile/shreshta23"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={"Get ready to step into the fast-paced and adrenaline-fueled VALORANT ASCENSION CUP With a PRIZE POOL of 25K and other goodies Matches are streamed by your favorite Valorant streamers!!"}
            />
            <Card
              no={"002"}
              name={"Evolve"}
              flip={flipb}
              time={"9AM - 11PM"}
              date={"28-03"}
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
              time={"9AM - 11PM"}
              date={"31-03"}
              location={"Micheal Faraday Hall"}
              link={
                "https://www.yepdesk.com/aviation-workshop/private/v3mjgbg4li"
              }
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
              time={"9AM - 11PM"}
              date={"31-03"}
              location={"Cad Lab, Project Lab, M 113"}
              link={"https://www.yepdesk.com/creatrix3/private/9kr793agn5"}
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
              time={"9AM - 11PM"}
              date={"31-03"}
              location={"Mech Cad Lab, Mech Project Lab"}
              link={"https://www.yepdesk.com/bridge-x/private/r32562fqk7"}
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
              time={"9AM - 11PM"}
              date={"31-03"}
              location={"Lawn in front of Ramanujan Block"}
              link={"https://www.yepdesk.com/gladiator/private/ftv0d5jf95"}
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
              time={"9AM - 11PM"}
              date={"01-04"}
              location={"Room Numbers 510,507,613,604"}
              link={"https://www.yepdesk.com/armageddon1/private/rsocmo1fao"}
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
              time={"9AM - 11PM"}
              date={"01-04"}
              location={"Albert Einstein Hall"}
              link={"https://forms.gle/M46ATF54q6cFLNck6"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Unleash your innovation: Pitch your technological idea to change the world! Welcome to the battlefield of innovative and creative ideas that leverage technology to solve real-world problems. Let's make a positive impact together!"
              }
            />
            <Card
              no={"009"}
              name={"Tracador"}
              flip={flipb}
              time={"9AM - 11PM"}
              date={"01-04"}
              location={"MP and MC Lab"}
              link={"https://www.yepdesk.com/tracador/private/nfrgsqlaci"}
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
              time={"9AM - 11PM"}
              date={"31-03"}
              location={"Vishweshwaraya Hall"}
              link={"https://www.yepdesk.com/project-expo6/private/769jjahdiu"}
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
              time={"1/4/23"}
              date={"31/3/23"}
              location={"CS Depatment Classrooms"}
              link={"https://linktr.ee/eneryia"}
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
              time={"9AM - 11PM"}
              date={"31-03"}
              location={"Lawn in front of Ramanujan Block"}
              link={"https://www.yepdesk.com/end-game/private/t4rtmg9aj2"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={""}
            />

            <Card
              no={"013"}
              name={"Trans- cendus"}
              flip={flipb}
              time={"9AM - 11PM"}
              date={"01-04"}
              location={"Albert Einstein Hall"}
              link={"https://www.yepdesk.com/transcendus"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Are you ready to flex your skills and take on a challenge like no other? Enter our inter-disciplinary competition and put your abilities to the test. With diverse teams and unique challenges, it's time to prove you have what it takes to be the ultimate champion!"
              }
            />
            <Card
              no={"014"}
              name={"Ev Workshop"}
              flip={flipb}
              time={"9AM - 11PM"}
              date={"01-04"}
              location={"MP and MC Lab"}
              link={"https://www.yepdesk.com/ev-worshop/private/oad0lo2e52"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={""}
            />
            <Card
              no={"015"}
              name={"Mystery Mayhem"}
              flip={flipb}
              time={"9AM - 11PM"}
              date={"01-04"}
              location={"Micheal Faraday Hall"}
              link={"https://www.yepdesk.com/mystery-mayhem"}
              bg={"cardback1"}
              cardback={"cardback1"}
              button={true}
              desc={
                "Step into the shoes of a detective and solve the ultimate whodunit! Join our murder investigation competition and put your sleuthing skills to the test. With clues to unravel and suspects to interrogate, can you crack the case and emerge victorious?"
              }
            />
          </motion.div>
        )}
      </div>
      {/* Mobile Version End*/}

      <Footer/>
    </motion.div>
  );
}
