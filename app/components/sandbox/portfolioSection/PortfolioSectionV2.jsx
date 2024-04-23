"use client";
import { useState, useEffect } from "react";
import PortfolioButtons from "./PortfolioButtons";
import ProjectDisplay from "../../../blocks/ProjectDisplay";

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <>
      <div className=" relative flex flex-col h-[100px] rounded-t-[50px] bg-zinc-950 text-center items-start w-full mx-auto"></div>
      <div
        id="projects"
        className="relative flex flex-col min-h-screen h-full bg-zinc-950 items-center w-full p-2 "
      >
        <h1 className="w-full text-9xl font-bold text-end text-white">
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
