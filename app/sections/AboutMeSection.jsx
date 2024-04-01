"use client";
import AboutMeAccordion from "../components/sandbox/aboutMeAccordion/AboutMeAccordion";
import { useState, useEffect, useRef, use } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import WhoIAmBlock from "../blocks/WhoIAm"
import WhatIDoBlock from "../blocks/WhatIDo";

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
      className={`${zIndex} relative me-auto bg-zinc-950 overflow-y-hidden min-h-screen min-w-screen max-w-screen flex flex-col self-center items-center overflow-hidden justify-between rounded-t-[50px]`}
      style={{ scaleX: xSmooth }}
      transition={{ type: "spring", damping: 300 }}
    >
      <WhoIAmBlock />

      <WhatIDoBlock />
    </motion.section>
  );
}
