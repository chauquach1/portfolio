"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const curtainClass = "z-50 relative inline-block w-full bg-shark md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-3xl font-bold";

export default function SkillsCurtain({ showDetails, setShowDetails, label }) {
  
  
  const items = [
    { label, direction: -1 },
    { label: "Development", direction: 1 },
  ];

  const titleColor = label === "Frontend" ? "text-[#AEB372]" : "text-[#567198]";

  return (
    <div
      role="button"
      onClick={() => setShowDetails(!showDetails)}
      className="absolute h-full justify-self-center w-fit flex flex-col justify-center"
    >

      {items.map((item, index) => (
        <motion.h1
          key={index}
          className={`${curtainClass} ${titleColor} `}
          initial={{ translateY: 0 }}
          animate={{ translateY: showDetails ? item.direction * 170 : 0 }}
          transition={{ damping: 50, stiffness: 1000 }}
        >
          {item.label}
        </motion.h1>
      ))}
    </div>
  );
}
