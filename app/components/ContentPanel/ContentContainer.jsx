"use client"
import { useState, useEffect } from "react";
import PortfolioSection from "../PortfolioSection";
import PanelController from "./PanelController";
import SkillsSection from "../SkillsSection";
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
      <div className="flex flex-col">
        <div className="bg-black/10 p-4 h-full rounded-xl">
          <h2>About Me</h2>
          <p>
            I am a software engineer with a passion for creating and learning. I
            have a background in computer science and have worked in a variety
            of industries including healthcare, finance, and education. I am
            currently working as a full stack developer at a startup in the
            healthcare industry.
          </p>
          
        </div>
        <SkillsSection />
        <PortfolioSection />
      </div>
    </div>
  );
}
