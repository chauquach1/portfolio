"use client"
import { useState, useEffect } from "react";
import PanelController from "./PanelController";
import AboutMe from "../AboutSection/AboutMe"
import SkillsSection from "../SkillsSection";
import PortfolioSection from "../PortfolioSection";
export default function ContentContainer() {
  const [activePanel, setActivePanel] = useState("about");
  useEffect(() => {
    console.log(activePanel);
  }, [activePanel]);
  
  return (
    <div className="flex flex-row items-center justify-end w-full">
      <PanelController
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />
      <div className="flex flex-col gap-6 pt-1">
        <AboutMe />
        <SkillsSection />
        <PortfolioSection />
      </div>
    </div>
  );
}
