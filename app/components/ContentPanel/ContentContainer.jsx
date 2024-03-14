"use client"
import { useState, useEffect } from "react";
import AboutMe from "../AboutSection/AboutMe"
import SkillsSection from "../SkillsSection";
import PortfolioSection from "../PortfolioSection";
import ContactMeSection from "../ContactMeSection";
export default function ContentContainer() {
  const [activePanel, setActivePanel] = useState("about");
  
  return (
    <>
      <div className="z-40 bg-black min-h-screen flex flex-row items-center overflow-hidden justify-start w-full rounded-t-2xl pt-9 px-2">
        <AboutMe />
        <div className="h-full flex flex-col">
          <SkillsSection />
          <PortfolioSection />
        </div>
      </div>
    </>
  );
}
