"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import NextImage from "next/image";
import snowboardingSelfie from "../../public/snowboarding-selfie.jpeg";
import GreenDoodle from "../components/doodles/GreenDoodle";
import PurpleDoodle from "../components/doodles/PurpleDoodle";
import RedDoodle from "../components/doodles/RedDoodle";

const introQuotes = [
  "Who I Am.",
  "Nice to meet you! I'm Chau, a fullstack developer who loves seeing ideas become reality. I'm passionate about creating unique user-centric experiences that are scalable and reliable.",
  "Let's create something amazing!",
];

export default function WhoIAmBlock() {
  const targetRef = useRef(null);
  const [insetX, setInsetX] = useState(10);

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
  const inset = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const insetSmooth = useSpring(inset, { damping: 50, stiffness: 1000 });

  useMotionValueEvent(insetSmooth, "change", (latest) => {
    setInsetX(latest);
  });

  setTimeout(() => {}, 3000);

  return (
    <motion.div
      ref={targetRef}
      className="flex flex-col justify-between items-start min-h-screen h-max w-full bg-shark rounded-t-[50px]"
      style={{ clipPath: `inset( 0% ${insetX}% round 50px 50px 0px 0px)` }}
    >
      <div className=" flex flex-col justify-around h-screen w-full my-[100px]">
          <h1
            className={`font-bold text-6xl lg:text-8xl xl:text-9xl px-2 text-white/30 align-text-top`}
          >
            {introQuotes[0]}
          </h1>

        <div className=" flex flex-row relative justify-center self-center w-[300px] min-h-max h-full">
          <div className="z-10 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] self-center rounded-[80px] overflow-x-hidden bg-white/20">
            <NextImage
              width={600}
              height={600}
              src={snowboardingSelfie}
              alt="selfie"
              classnames="m-5"
            />
          </div>
          <GreenDoodle />
          <PurpleDoodle />
          <RedDoodle />
        </div>
        <div className="text-xs sm:text-sm p-0 sm:p-3 flex flex-row flex-wrap px-2 gap-10 justify-between w-full">
          <p className="block w-[600px] text-white text-start ">
            {introQuotes[1]}
          </p>
          <p className="block text-sm sm:text-2xl text-white/30 text-end self-start">
            {introQuotes[2]}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
