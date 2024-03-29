"use client";
import { Divider, Image } from "@nextui-org/react";
import NextImage from "next/image";
import AboutMeAccordion from "../components/sandbox/aboutMeAccordion/AboutMeAccordion";
import { useState, useEffect, useRef, use } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import snowboardingSelfie from "../../public/snowboarding-selfie.jpeg";

import WhoIAmBlock from "../blocks/whoIAm";

export default function AboutMe() {
  const [zIndex, setZIndex] = useState("z-0");
  const targetRef = useRef(null);

  // ANIMATION POSITION START
  const startX = 0;
  const startY = 0.98;

  // ANIMATION POSITION END
  const endX = 0;
  const endY = 0.85;

  // NUMERICAL VALUE FOR SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    // offset: ["0.5 0.98", "0.5 0.5"],
    target: targetRef,
    offset: [`${startX}, ${startY}`, `${endX}, ${endY}`],
  });

  // SCALE X ANIMATION
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const xSmooth = useSpring(scaleX, { damping: 40, stiffness: 1000 });

  setTimeout(() => {
    setZIndex("z-30");
  }, 3000);

  return (
    <motion.section
      ref={targetRef}
      className={`${zIndex} relative me-auto bg-zinc-950 overflow-x-hidden min-h-max min-w-screen max-w-screen flex flex-col self-center items-center overflow-hidden justify-start rounded-t-[50px] gap-[100px]`}
      style={{ scaleX: xSmooth }}
      transition={{ type: "spring", damping: 300 }}
    >
      {/* banner */}
      <div className="flex flex-row h-[200px] w-full text-start justify-start border-b-1 overflow-x-hidden">
        <div className="flex flex-row items-center text-3xl text-center text-white/30">
          <h1 className="my-auto min-w-screen text-slate-500"></h1>
        </div>
      </div>

      <WhoIAmBlock />


      <div className="flex flex-col justify-start items-end min-h-screen gap-3 w-full border-t-1 ">
        <h1 className="text-6xl text-white/30 justify-self-end">What I Do</h1>
        <AboutMeAccordion />
        <br />
      </div>
    </motion.section>
  );
}
