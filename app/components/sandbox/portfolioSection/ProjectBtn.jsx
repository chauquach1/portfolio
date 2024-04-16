"use client";
import { useState, useEffect } from "react";
import { motion, useMotionValue} from "framer-motion";

const inactive = "h-max text-2xl font-bold text-black bg-white rounded-full px-4";
const active = "h-max text-2xl font-bold text-green-500 bg-green-200 rounded-full px-4";
const btnVariants = {
  inactive: {
    scale: 1,
  },
  active: {
    scale: 1.2,
  },
  
};

export default function PortfolioButtons({ index, project, activeIndex, setActiveIndex }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    index === activeIndex ? setIsActive(true) : setIsActive(false);
  }, [activeIndex]);

  return (
    <motion.button
      key={index}
      className={isActive ? active : inactive}
      onClick={() => setActiveIndex(index)}
      variants={btnVariants}
      initial="inactive"
      animate={isActive ? "active" : "inactive"}
    >
      {project}
    </motion.button>
  );
}