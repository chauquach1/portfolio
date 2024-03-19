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
  const startX = 0.35
  const startY = 0.5

  // ANIMATION POSITION END
  const endX = 0.4
  const endY = 0.2

  // NUMERICAL VALUE FOR SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    offset: [`${startX}, ${startY}`, `${endX}, ${endY}`],
  });

  // SCALE X ANIMATION
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const xSmooth = useSpring(scaleX, { damping: 40, stiffness: 300 });

  setTimeout(() => {
    setZIndex("z-30");
  }, 3000);

  
  return (
    <>
      <motion.div
        ref={targetRef}
        className={`${zIndex} bg-black min-h-screen w-full max-w-screen flex flex-col self-center items-center overflow-hidden justify-start rounded-t-[50px] pt-9 px-2`}
        style={{scaleX: xSmooth} } 
        transition={{ type: 'spring', damping: 300 }}
      >
        <AboutMe />
        {/* <div className="h-full flex flex-col"> */}
          <SkillsSection />
          <PortfolioSection />
        {/* </div> */}
      </motion.div>
    </>
  );
}
