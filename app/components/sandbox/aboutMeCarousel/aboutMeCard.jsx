"use client";
import { useState, useEffect, useRef, use } from "react";
import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

export default function AboutMeCard({
  color,
  label,
  setActiveCard,
  currIndex,
  carouselRef,
  cardsContainerRef,
  // scrollXProgress,
  // scrollX
}) {


  const { scrollX } = useScroll({
    container: cardsContainerRef
  });

  useMotionValueEvent(scrollX, "change", (latest) => {
    console.log("Page scrollX: ", latest);
  });

  const { scrollXProgress } = useScroll({
    container: carouselRef,
    axis: "x",
    offset: ["start end", "end end"]
  })

  useMotionValueEvent(scrollXProgress, "change", (latest) => {
    console.log("Page scrollXProgress: ", latest);
  });

  // const handleClick = () => {
  //   setActiveCard(currIndex)
  //   if (currIndex < 3) {
  //     console.log( 3-currIndex);
  //   } else {
  //     console.log( currIndex-3);
  //   }
  // }


  const handleClick = () => {
    console.log("scrollXProgress", label, scrollXProgress);
    console.log("carouselRef", label, carouselRef);
    // console.log("scrollXProgress", scrollXProgress);
  };

  // const scaleX = useTransform(scrollX, [0, 1], [0.5, 1]);

  return (
    <div
      className={`bg-${color} text-center h-full min-w-[320px] shadow-lg rounded-2xl`}
      style={{ opacity: scrollXProgress }}
      onClick={() => handleClick()}
    >
      <h2
        className="text-3xl text-white" 
        style={{ opacity: scrollXProgress }}
      >
        {label}
      </h2>
    </div>
  );
}