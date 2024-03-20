"use client";
import { useState, useEffect, useRef, use } from "react";
import AboutMe from "../AboutSection/AboutMe";
import SkillsSection from "../SkillsSection";
import PortfolioSection from "../PortfolioSection";
import ContactMeSection from "../ContactMeSection";
import { motion, useScroll, useVelocity, useMotionValueEvent, useTransform, cubicBezier, useSpring, useMotionValue } from "framer-motion";

export default function ContentContainer() {
  const [zIndex, setZIndex] = useState("z-0");
  const targetRef = useRef(null);

  // ANIMATION POSITION START
  const startX = 0.05
  const startY = 0

  // ANIMATION POSITION END
  const endX = 0.1
  const endY = 0.1

  // NUMERICAL VALUE FOR SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    // offset: ["start 0.5", "center start"],
    offset: [`${startX}, ${startY}`, `${endX}, ${endY}`],
  });

  // SCALE X ANIMATION
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const xSmooth = useSpring(scaleX, { damping: 40, stiffness: 1000 });

  setTimeout(() => {
    setZIndex("z-30");
  }, 3000);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // if (latest === 1) {
    //   setZIndex("z-30");
    // }
    console.log(latest);
  });

  
  return (
    <section className="block h-screen min-h-fit w-full bg-transparent">
      <motion.div
        ref={targetRef}
        className={`${zIndex} absolute me-auto bg-black overflow-x-hidden min-h-fit w-full max-w-screen flex flex-col self-center items-center overflow-hidden justify-start rounded-t-[50px] pt-9 px-2`}
        style={{ scaleX: xSmooth }}
        transition={{ type: "spring", damping: 300 }}
      >
        <div className="h-[200px]"></div>
        <AboutMe />
        <SkillsSection />
        <div className="h-[200px]"></div>
        <PortfolioSection />
      </motion.div>
    </section>
  );
}
