"use client";
import { useState, useEffect, useRef, use } from "react";
import AboutMe from "../AboutSection/AboutMe";
import SkillsSection from "../SkillsSection";
import PortfolioSection from "../PortfolioSection";
import ContactMeSection from "../ContactMeSection";
import { motion, useScroll, useVelocity, useMotionValueEvent, useTransform, cubicBezier, useSpring, useMotionValue } from "framer-motion";

export default function ContentContainer() {
  const targetRef = useRef(null);

  // ANIMATION POSITION START
  const startX = 0.35
  const startY = 0.5

  // ANIMATION POSITION END
  const endX = 0.4
  const endY = 0.6

  // NUMERICAL VALUE FOR SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    offset: [`${startX}, ${startY}`, `${endX}, ${endY}`],
  });

  // SCALE X ANIMATION
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const xSmooth = useSpring(scaleX, { damping: 40, stiffness: 300 });

  
  return (
    <>
      <motion.div
        ref={targetRef}
        className="z-40 bg-black min-h-screen w-full max-w-screen flex flex-row self-center items-start overflow-hidden justify-start rounded-t-[85px] pt-9 px-2"
        style={{scaleX: xSmooth} } 
        transition={{ type: 'spring', damping: 300 }}
      >
        <AboutMe />
        <div className="h-full flex flex-col">
          <SkillsSection />
          <PortfolioSection />
        </div>
      </motion.div>
    </>
  );
}
