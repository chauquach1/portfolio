"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { phudu } from "../libs/fonts";
import NextImage from "next/image";
import snowboardingSelfie from "../../public/snowboarding-selfie.jpeg";
import GreenDoodle from "../components/doodles/GreenDoodle";
import PurpleDoodle from "../components/doodles/PurpleDoodle";
import RedDoodle from "../components/doodles/RedDoodle";


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

  setTimeout(() => {
  }, 3000);

  return (
    <motion.div
      ref={targetRef}
      className=" flex flex-col justify-between items-start min-h-screen w-full bg-zinc-950 rounded-t-[50px] "
      style={{ clipPath: `inset( 0% ${insetX}% round 50px 50px 0px 0px)` }}
    >
      <div>
        <h1
          className={`${phudu.className} font-bold text-7xl lg:text-8xl xl:text-9xl text-white/30 my-[100px] align-text-top`}
        >
          Who I Am.
        </h1>
        <div className="p-3 max-w-[800px]">
          <p>
            Nice to meet you! I'm Chau, a fullstack developer who loves seeing
            ideas become reality. I'm passionate about creating unique
            user-centric experiences that are scalable and reliable.{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full h-max">
        <div className="z-10 first:w-[300px] h-[300px] self-center rounded-[80px] overflow-hidden bg-white/20">
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

      <div className="text-2xl text-white/30 text-end self-end mb-[100px]">
        Let's create something amazing!
      </div>
    </motion.div>
  );
}
