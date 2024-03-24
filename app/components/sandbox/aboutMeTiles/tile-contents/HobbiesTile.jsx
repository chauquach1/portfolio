"use client";
import { useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";

export default function HobbiesTile({revealContent}) {
  const [caption, setCaption] = useState("Snowboarding")
  const [currIndex, setCurrIndex] = useState(0)
  const hobbies = ["Snowboarding", "Tech Meetups", "Music Festivals", "Video Games", "Anime"]

  

  const translateY = useMotionValue(0)

  useMotionValueEvent(translateY, "change", (latest) => {
    if (latest  === 20) {
      setCurrIndex((currIndex + 1) % hobbies.length);
      setCaption(hobbies[currIndex]);
    } 
  });

  const rotateVariants = {
    origin: {
      opacity: 0,
    },
    target: {
      translateY: [-20, 0, 20],
      opacity: [0, 1, 1, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.1,
        duration: 3.4,
      }
    },
  };

  return (
    <div
      className={
        revealContent
          ? "flex flex-row flex-grow items-start justify-start gap-0 h-full w-full text-nowrap overflow-hidden"
          : "hidden"
      }
    >

      <div
        id="caption"
        className="flex flex-col justify-center items-center flex-grow h-full overflow-hidden mx-1 "
      >
        <div className="flex flex-col overflow-y-clip items-center justify-center bg-black/20 w-3/4 h-5 p-4">
          <motion.h1
            className=" "
            variants={rotateVariants}
          // animation Paused for now
            // initial="origin"
            // animate="target"
            // style={{ translateY}}
          >
            {caption}
          </motion.h1>
        </div>
      </div>
      <div id="example" className="flex-grow h-full bg-white/20 text-center">
        some picture of {caption}
      </div>
    </div>
  );
}