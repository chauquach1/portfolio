"use client";
import { motion, useMotionValue} from "framer-motion";
import ProjectBtn from "./ProjectBtn";

const project = ["PLANUR", "REACTEMON", "WURDLE"];

export default function PortfolioButtons({ activeIndex, setActiveIndex }) {
  return (
    <div
      id="buttons-container"
      className="w-full min-h-[100px] my-[50px] flex flex-row items-center justify-around sm:justify-end sm:gap-10 sm:px-8"
    >
      {project.map((project, index) => (
        <ProjectBtn
          key={index}
          index={index}
          project={project}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
}