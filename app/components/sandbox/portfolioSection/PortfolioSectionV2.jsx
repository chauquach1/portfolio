"use client";
import { useState, useEffect } from "react";

const buttons = ["PLANUR", "REACTEMON", "WURDLE"];

export default function PortfolioSection() {
  const [projectIndex, setProjectIndex] = useState(0);

  const btnClass = "h-max text-4xl font-bold text-black bg-white rounded-full px-4";

  return (
    <div
      id="projects"
      className="relative flex flex-col min-h-max h-screen bg-zinc-950 rounded-t-[50px] items-center w-full p-2 "
    >
      <div className=" flex flex-col h-[100px] text-center items-start w-full mx-auto"></div>
      <h1 className="w-full text-9xl font-bold text-end text-white">What I've Made.</h1>
      <div
        id="buttons-container"
        className="w-full min-h-[100px] my-[50px] flex flex-row items-center justify-end gap-10 border-1 border-white/20"
      >
        {buttons.map((button, index) => (
          <button
            key={index}
            className={btnClass}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}
