"use client";
import { Calistoga } from "next/font/google";
import painting from "../../public/painting.jpeg";

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

export default function HeroSection() {
  const [caption, setCaption] = useState("PASSIONATE SOFTWARE ENGINEER");
  const [currentIndex, setCurrentIndex] = useState(0); // New state to track the current index
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
    hidden: { opacity: 0, width: 0},
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
        repeatDelay: 1.2,
      },
    },
  };



  return (
    <section
      className="flex flex-col h-screen justify-center  text-black/70 items-center "
    >
      <motion.div
        id="intro-card"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-[37%] flex min-h-max flex-col items-center justify-center"
      >
        <motion.div
          id="intro-name-container"
          className={`font-semibold italic overflow-x-hidden inline-flex justify-center text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-start `}
        >
          <span className="">{"<"}</span>
            <motion.h1
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              className=" text-start overflow-x-hidden min-h-[100px] whitespace-pre"
            >
              {" Chau Quach "}
            </motion.h1>
          <span className="">{"/>"}</span>
        </motion.div>
        <motion.div
          id="intro-caption"
          variants={captionVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity }}
          className=" w-full text-center font-bold min-h-[80px] text-2xl pe-2 text-black/40"
        >
          {caption}
        </motion.div>
      </motion.div>
    </section>
  );
}
