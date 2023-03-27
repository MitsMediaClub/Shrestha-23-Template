import startcard from "../assets/Events/StartCard.svg";
import Footer from "./Footer";
import Card from "./GameCard";
import flipb from "../assets/Events/FlipBlack.svg";
import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import valo from "../assets/Gaming/Valorant.webp";
import csgo from "../assets/Gaming/CSGO.webp";
import rocket from "../assets/Gaming/RocketLeague.webp";
import fifa from "../assets/Gaming/Fifa.webp";
import mine1 from "../assets/Gaming/Minecraft.webp";
import mine2 from "../assets/Gaming/MinecraftCreate.webp";
import cod from "../assets/Gaming/COD.webp";
import codm from "../assets/Gaming/codm.webp";

export default function Events() {
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <motion.div className="pt-28 h-screen sm:pt-10">
      <div className="h-auto flex w-full sm:flex-col">
        <div className="w-1/2 flex flex-col gap-10 ml-20 sm:gap-2 sm:ml-0 sm:w-full sm:px-5 sm:border-b-2 sm:p-3">
          <h1 className="text-7xl text-white drummer sm:text-3xl">NEXUS</h1>
          <h1 className="text-7xl text-white drummer sm:text-3xl">GAMING</h1>
          <h1 className="text-7xl text-white drummer sm:text-3xl">LOUNGE</h1>
        </div>
        <div className="w-1/2 flex items-center flex-col gap-5 pl-56 sm:hidden">
          <img
            src={startcard}
            alt="a card with Shreshta's logo on it"
            className="w-60"
          />
          <div className="w-80 ">
            <h1 className="transext2t text-3xl text-blue quicksand font-medium">
              CLICK THE CARDS <br /> TO REGISTER
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full pt-20 sm:hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap gap-10 mx-20 mt-10 mb-14 justify-evenly"
        >
          <Card
            no={"001"}
            name={"CSGO"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={csgo}
            link={"https://www.yepdesk.com/mits-csgo-tribute-cup"}
          />

          <Card
            no={"002"}
            name={"Call Of Duty: Black Ops"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={cod}
            link={"https://www.yepdesk.com/mits-csgo-ghost-cup"}
          />
          <Card
            no={"003"}
            name={"Call Of Duty : Mobile"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={codm}
            link={"https://forms.gle/zrSKvp2sbjwGxFUw7"}
          />
          <Card
            no={"004"}
            name={"FIFA"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={fifa}
            link={"https://www.yepdesk.com/fifa-mits-tournament"}
          />
          <Card
            no={"005"}
            name={"Rocket League"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={rocket}
            link={"https://www.yepdesk.com/mits-rocket-leaque"}
          />
          <Card
            no={"006"}
            name={"Minecraft Bedwars"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={mine1}
            link={"https://www.yepdesk.com/minecraft-bedwars"}
          />
          <Card
            no={"007"}
            name={"Minecraft Create"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={mine2}
            link={"https://www.yepdesk.com/minecraft-creative-showdown"}
          />
        </motion.div>
      </div>

      {/* Mobile Version */}

      <div className="hidden sm:block px-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center mt-10 mb-10 gap-10 "
        >
          <Card
            no={"001"}
            name={"CSGO"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={csgo}
            link={"https://www.yepdesk.com/mits-csgo-tribute-cup"}
          />

          <Card
            no={"002"}
            name={"Call Of Duty: Black Ops"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={cod}
            link={"https://www.yepdesk.com/mits-csgo-ghost-cup"}
          />
          <Card
            no={"003"}
            name={"Call Of Duty : Mobile"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={codm}
            link={"https://forms.gle/zrSKvp2sbjwGxFUw7"}
          />
          <Card
            no={"004"}
            name={"FIFA"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={fifa}
            link={"https://www.yepdesk.com/fifa-mits-tournament"}
          />
          <Card
            no={"005"}
            name={"PES"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={fifa}
            link={"https://www.yepdesk.com/efootball-pes-mobile"}
          />
          <Card
            no={"005"}
            name={"Rocket League"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={rocket}
            link={"https://www.yepdesk.com/mits-rocket-leaque"}
          />
          <Card
            no={"006"}
            name={"Minecraft Bedwars"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={mine1}
            link={"https://www.yepdesk.com/minecraft-bedwars"}
          />
          <Card
            no={"007"}
            name={"Minecraft Create"}
            flip={flipb}
            bg={"nex"}
            cardback={"nex"}
            button={true}
            poster={mine2}
            link={"https://www.yepdesk.com/minecraft-creative-showdown"}
          />
        </motion.div>
      </div>
      {/* Mobile Version End*/}

      <Footer />
    </motion.div>
  );
}