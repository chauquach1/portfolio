"use client";
import { useEffect, useState } from "react";

const skillsData = {
  Frontend: {
    Languages: ["HTML", "CSS", "JavaScript"],
    "Frameworks & Libraries": ["Next.js", "React", "TailwindCSS", "Bootstrap"],
    Tools: ["Figma", "Photoshop", "Illustrator"],
  },
  Backend: {
    Languages: ["Node.js", "Python", "Java"],
    "Frameworks & Libraries": ["Express", "Flask", "Spring"],
    Tools: ["MongoDB", "MySQL", "PostgreSQL"],
  },
};

export default function SkillsAccordion({ skill }) {
  const [showDetails, setShowDetails] = useState(false);

  const titleColors = {
    Frontend: "text-[#AEB372]",
    Backend: "text-[#567198]",
    Default: "text-[#000000]",
  };

  const toggleDetails = () => setShowDetails(prevShowDetails => !prevShowDetails);

  const titleColor = titleColors[skill] || titleColors.Default;

  const skillsSection = skillsData[skill];

  const h2Classes = "underline text-3xl text-[#828282] font-bold";
  const pClasses = "text-xl text-white";

  return (
    <>
      <div
        className={`flex flex-col w-full ${titleColor} text-5xl font-bold`}
        onClick={toggleDetails} role="button" tabIndex="0"
      >
        <h1>{skill}</h1>
        {showDetails ? (
          <div>
            {Object.entries(skillsSection).map(([section, items]) => (
              <div key={section} className="flex flex-col gap-3">
                <h2 className={h2Classes}>{section}</h2>
                <p className={pClasses}>{items.join(" | ")}</p>
              </div>
            ))}
          </div>
        ) : null}
        <h1>Development</h1>
      </div>
    </>
  );
}
