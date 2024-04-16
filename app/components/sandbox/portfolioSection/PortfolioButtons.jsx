"use client";
import { motion, useMotionValue} from "framer-motion";

const project = ["PLANUR", "REACTEMON", "WURDLE"];
const inactive = "h-max text-4xl font-bold text-black bg-white rounded-full px-4";
const active = "h-max text-4xl font-bold text-green-500 bg-green-200 rounded-full px-4";
const btnVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function PortfolioButtons({ projectIndex, setProjectIndex }) {
  return (
    <div
      id="buttons-container"
      className="w-full min-h-[100px] my-[50px] flex flex-row items-center justify-end gap-10 border-1 border-white/20 px-8"
    >
      {project.map((project, index) => (
        <motion.button
          key={index}
          className={projectIndex === index ? active : inactive}
          onClick={() => setProjectIndex(index)}
          animate={{ scale: 1.2 }}
        >
          {project}
        </motion.button>
      ))}
    </div>
  );
}