"use client"
import { useState, useEffect } from "react";
import PanelController from "./PanelController";
import AboutMe from "../AboutSection/AboutMe"
import SkillsSection from "../SkillsSection";
import PortfolioSection from "../PortfolioSection";
import ContactMeSection from "../ContactMeSection";
export default function ContentContainer() {
  const [activePanel, setActivePanel] = useState("about");
  useEffect(() => {
    console.log(activePanel);
  }, [activePanel]);
  
  return (
    <>
      <PanelController
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />
      <div className="flex flex-col items-center w-full gap-6 pt-1 h-full rounded-t-2xl">
        <AboutMe />
        <SkillsSection />
        <PortfolioSection />
      </div>
    </>
  );
}
