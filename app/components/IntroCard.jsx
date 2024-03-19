"use client";
import { Calistoga } from "next/font/google";

import {
  motion,
  useScroll,
  useVelocity,
  useMotionValueEvent,
  useTransform,
  cubicBezier,
  useSpring,
  useMotionValue,
  useAnimate,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";

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

export default function IntroCard() {
  const [caption, setCaption] = useState("PASSIONATE SOFTWARE ENGINEER");
  const [currentIndex, setCurrentIndex] = useState(0); // New state to track the current index
  const [scope, animate] = useAnimate();
  const phrases = [
    "PASSIONATE SOFTWARE ENGINEER",
    "CREATIVE FRONT END DEVELOPER",
    "SAN DIEGO NATIVE",
  ];
  
  const nextIndex = (currentIndex + 1) % phrases.length; // Calculate the next index

  const x = useMotionValue(0)
  const input = [0, 1]
  const output = [0, 1];
  const opacity = useTransform(x, input, output);

  useMotionValueEvent(opacity, "change", (latest) => {
    if (latest === 0) {
      setCurrentIndex(nextIndex); 
      setCaption(phrases[nextIndex]); 
    }
  });

  const nameVariants = {
    hidden: { opacity: 0.5, width: 0 },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        delay: 1,
        duration: 1.5,
        type: "spring",
        stiffness: 9,
      },
    },
  };

  const captionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: "25%",
      transition: {
        delay: 3,
        duration: 0.5,
        type: "tween",
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 1.5,
      },
    },
  };



  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <motion.div
        id="intro-card"
        initial={{ opacity: 0.75, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-30 fixed top-[37%] flex min-h-max flex-col items-center justify-center gap-2"
      >
        <div
          ref={scope}
          className={`${calistoga.className} inline-flex justify-center text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-start text-white`}
        >
          {"<"}
          <motion.div
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            // style={}
            className="text-center overflow-x-hidden min-h-[100px] whitespace-nowrap"
          >
            Chau Quach
          </motion.div>
          {"/>"}
        </div>
        <motion.div
          id="intro-caption"
          variants={captionVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity }}
          className=" w-full text-center font-bold min-h-[80px] text-2xl pe-2"
        >
          {caption}
        </motion.div>
      </motion.div>
    </div>
  );
}
