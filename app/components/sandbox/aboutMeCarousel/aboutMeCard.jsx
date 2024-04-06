"use client";
import { useState, useEffect, useRef, use } from "react";
import { motion, useTransform, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { card } from "@nextui-org/react";

export default function AboutMeCard({
  color,
  label,
  currIndex,
  cardsContainerRef,
  index,
  id,
  // scaleX
}) {
  // useEffect(() => {
  //   const calculateScale = () => {
  //     if (!cardsContainerRef || !cardsContainerRef.current || !cardRef || !cardRef.current) return;

  //     const containerCenter = cardsContainerRef.current.offsetWidth / 2 + cardsContainerRef.current.scrollLeft;
  //     const cardCenter = cardRef.current.offsetLeft + cardRef.current.offsetWidth / 2;
  //     const distanceToCenter = Math.abs(containerCenter - cardCenter);

  //     // Adjust these values based on your desired scaling effect
  //     const maxDistance = cardsContainerRef.current.offsetWidth / 2; // Max distance for minimum scale
  //     const minScale = 0.75; // Minimum scale
  //     const scaleRange = 1 - minScale;

  //     let scale = 1 - (distanceToCenter / maxDistance) * scaleRange;
  //     scale = Math.max(minScale, scale); // Ensure scale does not go below minScale

  //     setScale(scale);
  //   };

  //   // Calculate scale on mount and on scroll
  //   calculateScale();
  //   cardsContainerRef.current.addEventListener('scroll', calculateScale);

  //   return () => cardsContainerRef.current.removeEventListener('scroll', calculateScale);
  // }, [cardsContainerRef]);
  const cardRef = useRef(`${label}-${index}`);

  const { scrollX } = useScroll({
    container: cardsContainerRef,
    target: cardRef,
    layoutEffect: false,
    axis: "x",
    offset: ["start end", "end end"]
  });

  const { scrollXProgress } = useScroll({
    container: cardsContainerRef,
    target: cardRef,
    layoutEffect: false,
    axis: "x",
    offset: ["start end", "end start"]
  });

  const scale = useTransform(
    scrollXProgress,
    [0, 0.15, 0.25, 0.45, 0.5, 0.55, 0.75, 0.85, 1],
    ["50%", "60%", "70%", "90%", "100%", "90%", "70%", "60%", "50%"]
  );

  const translateX = useTransform(
    scrollXProgress,
    // [0, 0.15, 0.25, 0.45, 0.5, 0.55, 0.75, 0.85, 1],
    // [-320, -200, -140, -28, 0, 28, 140, 200, 320]
    [0, 0.5, 1],
    ["-100%", "0%","100%"]
  );

  const zIndex = useTransform(
    scrollXProgress,
    // [0, 0.15, 0.25, 0.45, 0.5, 0.55, 0.75, 0.85, 1],
    // [0, 1, 2, 3, 5, 3, 2, 1, 0]
    [0, 0.5, 1],
    [0, 5, 0]
  );

  const blurAmount = useTransform(
    scrollXProgress,
    [0, 0.15, 0.25, 0.45, 0.5, 0.55, 0.75, 0.85, 1],
    [6, 5, 2, 0, 0, 0, 2, 5, 6]
  );

  const filter = useTransform( blurAmount, (latest) => `blur(${latest}px)`);

  // useMotionValueEvent(scrollX, "change", (latest) => {
  //   if (latest > 0) {
  //     console.log(cardRef.current.id, " scrollX: ", latest);
  //   }
  // });

  // useMotionValueEvent(scrollXProgress, "change", (latest) => {
    // if (latest === 1 || latest === 0) {
    // }
      // console.log(cardRef.current.id, " scrollXProgress: ", latest);
  // });

  // useMotionValueEvent(scale, "change", (latest) => {
    // if (latest === 1 || latest === 0) {
      // console.log(cardRef.current.id, " scaleX: ", latest);
    // }
  // });



  const handleClick = () => {
    console.log("click", cardRef);
    console.log("click", cardRef.current.clientWidth);
  }

  return (
    <motion.div
      id={id}
      ref={cardRef}
      className={`bg-${color} text-center min-h-full min-w-[240px] sm:min-w-[300px] shadow-lg rounded-2xl`}
      style={{ scale, translateX, zIndex, filter }}
      // filter: blur(`${blurAmount}px`)
      onClick={() => handleClick()}
    >
      <motion.h2 className="text-3xl text-white">{label}</motion.h2>
    </motion.div>
  );
}
