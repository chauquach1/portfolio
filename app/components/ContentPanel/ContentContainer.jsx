"use client"
import { useState, useEffect } from "react";
import PanelController from "./PanelController";
import AboutMe from "../AboutSection/AboutMe"
import SkillsSection from "../SkillsSection";
import PortfolioSection from "../PortfolioSection";
import ContactMeSection from "../ContactMeSection";
export default function ContentContainer() {
  const [activePanel, setActivePanel] = useState("about");
  
  return (
    <>
      <PanelController
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />
      <div className="relative flex flex-col items-center w-full gap-6 pt-6 px-2 h-full rounded-t-2xl">
        <AboutMe />
        <SkillsSection />
        <PortfolioSection />
      </div>
    </>
  );
}
