"use client";
import { Calistoga } from "next/font/google";

import { motion } from "framer-motion"
import { useRef } from "react";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const funFacts = {
  location: "San Diego, CA",
  interests: "Snowboarding, Music, Cooking",
  pets: "Magnus",
};

export default function IntroCard2() {


  return (
    < >
      <motion.div
        id="intro-card"
        initial={{ opacity: 0.75, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className=" bg-white/20 flex flex-col items-center justify-center h-screen gap-2"
      >
        <div
          className={`${calistoga.className} fixed inline-flex justify-center text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-start text-white`}
        >
          &lt;
          <motion.div
            initial={{ opacity: 0.5, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{
              duration: 2,
              delay: 1,
              type: "spring",
              stiffness: 9,
            }}
            className="overflow-hidden whitespace-nowrap"
          >
            Chau Quach
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 3,
                type: "spring",
                bounce: 0.4,
              }}
              className="w-full  text-end font-normal text-sm pe-2"
            >
              Fullstack Developer
            </motion.div>
          </motion.div>
          /&gt;
        </div>
      </motion.div>
    </>
  );
}
