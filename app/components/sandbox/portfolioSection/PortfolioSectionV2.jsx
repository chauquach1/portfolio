"use client";
import { useState, useEffect } from "react";
import PortfolioButtons from "./PortfolioButtons";
import ProjectDisplay from "../../../blocks/ProjectDisplay";

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <>
      <div
        id="projects"
        className=" bg-shark relative flex flex-col min-h-screen h-max items-center w-full sm:p-2 border-t-1 py-[100px]"
      >
        <h1 className="w-full text-4xl font-bold text-center sm:text-end text-white">
          {"What I've Made."}
        </h1>
        <PortfolioButtons
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <ProjectDisplay activeIndex={activeIndex} />
      </div>
    </>
  );
}
