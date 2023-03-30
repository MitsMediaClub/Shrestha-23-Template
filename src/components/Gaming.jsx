import startcard from "../assets/Events/StartCard.svg";
import Footer from "./Footer";
import Card from "./GameCard";
import flipb from "../assets/Events/FlipBlack.svg";
import { motion } from "framer-motion";
import { useLayoutEffect } from "react";

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
        <div className="w-1/2 flex gap-5 mx-20 sm:flex-col justify-between sm:w-auto pt-5 ">
          <h1 className="text-blue quicksand text-xl  sm:text-sm">
            NEXUS Gaming Lounge is the flagship event of SHRESHTA 23 the
            Techno-Cultural Fest Hosted by Muthoot Institute of Technology and
            Science at Kochi on the dates of March 31 and April 1. This Lounge
            is considered to be one of the biggest gaming lounges in Kerala up
            to date and will go down in history as the best gamer meet ever. The
            Main concept of NEXUS is to provide a FREE platform for gamers to
            meet and greet, and explore the different games and adventures that
            they could not experience alone. So, Come explore the different
            dimensions of gaming with us.
          </h1>
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
            bg={"cardf5"}
            cardback={"cardb5"}
            button={true}
            link={"https://www.yepdesk.com/mits-csgo-tribute-cup"}
          />

          <Card
            no={"002"}
            name={"Call Of Duty: Black Ops"}
            flip={flipb}
            bg={"cardf3"}
            cardback={"cardb3"}
            button={true}
            link={"https://www.yepdesk.com/mits-csgo-ghost-cup"}
          />
          <Card
            no={"003"}
            name={"Call Of Duty : Mobile"}
            flip={flipb}
            bg={"cardf8"}
            cardback={"cardf8"}
            button={true}
            link={"https://forms.gle/zrSKvp2sbjwGxFUw7"}
          />
          <Card
            no={"004"}
            name={"FIFA"}
            flip={flipb}
            bg={"cardf6"}
            cardback={"cardb6"}
            button={true}
            link={"https://www.yepdesk.com/fifa-mits-tournament"}
          />
          <Card
            no={"005"}
            name={"PES"}
            flip={flipb}
            bg={"cardf6"}
            cardback={"cardb6"}
            button={true}
            link={"https://www.yepdesk.com/fifa-mits-tournament"}
          />
          <Card
            no={"006"}
            name={"Rocket League"}
            flip={flipb}
            bg={"cardf7"}
            cardback={"cardb7"}
            button={true}
            link={"https://www.yepdesk.com/mits-rocket-leaque"}
          />
          <Card
            no={"007"}
            name={"Minecraft Bedwars"}
            flip={flipb}
            bg={"cardf1"}
            cardback={"cardb1"}
            button={true}
            link={"https://www.yepdesk.com/minecraft-bedwars"}
          />
          <Card
            no={"008"}
            name={"Minecraft Create"}
            flip={flipb}
            bg={"cardf4"}
            cardback={"cardb4"}
            button={true}
            link={"https://www.yepdesk.com/minecraft-creative-showdown"}
          />
          <Card
            no={"009"}
            name={"Brawlhalla"}
            flip={flipb}
            bg={"cardf2"}
            cardback={"cardb2"}
            button={true}
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
            bg={"cardf5"}
            cardback={"cardb5"}
            button={true}
            link={"https://www.yepdesk.com/mits-csgo-tribute-cup"}
          />

          <Card
            no={"002"}
            name={"Call Of Duty: Black Ops"}
            flip={flipb}
            bg={"cardf3"}
            cardback={"cardb3"}
            button={true}
            link={"https://www.yepdesk.com/mits-csgo-ghost-cup"}
          />
          <Card
            no={"003"}
            name={"Call Of Duty : Mobile"}
            flip={flipb}
            bg={"cardf8"}
            cardback={"cardf8"}
            button={true}
            link={"https://forms.gle/zrSKvp2sbjwGxFUw7"}
          />
          <Card
            no={"004"}
            name={"FIFA"}
            flip={flipb}
            bg={"cardf6"}
            cardback={"cardb6"}
            button={true}
            link={"https://www.yepdesk.com/fifa-mits-tournament"}
          />
          <Card
            no={"005"}
            name={"FIFA"}
            flip={flipb}
            bg={"cardf6"}
            cardback={"cardb6"}
            button={true}
            link={"https://www.yepdesk.com/fifa-mits-tournament"}
          />
          <Card
            no={"006"}
            name={"Rocket League"}
            flip={flipb}
            bg={"cardf7"}
            cardback={"cardb7"}
            button={true}
            link={"https://www.yepdesk.com/mits-rocket-leaque"}
          />
          <Card
            no={"007"}
            name={"Minecraft Bedwars"}
            flip={flipb}
            bg={"cardf1"}
            cardback={"cardb1"}
            button={true}
            link={"https://www.yepdesk.com/minecraft-bedwars"}
          />
          <Card
            no={"008"}
            name={"Minecraft Create"}
            flip={flipb}
            bg={"cardf4"}
            cardback={"cardb4"}
            button={true}
            link={"https://www.yepdesk.com/minecraft-creative-showdown"}
          />
          <Card
            no={"009"}
            name={"Brawlhalla"}
            flip={flipb}
            bg={"cardf2"}
            cardback={"cardb2"}
            button={true}
            link={"https://www.yepdesk.com/minecraft-creative-showdown"}
          />
        </motion.div>
      </div>
      {/* Mobile Version End*/}

      <Footer />
    </motion.div>
  );
}
