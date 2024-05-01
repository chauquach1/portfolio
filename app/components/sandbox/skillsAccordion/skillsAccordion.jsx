"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SkillsCurtain from "./SkillsCurtain";

const skillsData = {
  Frontend: {
    Languages: ["HTML", "CSS", "JavaScript"],
    "Frameworks & Libraries": ["Next.js", "React", "TailwindCSS", "FramerMotion", "Bootstrap"],
    Tools: ["Figma", "Photoshop", "Illustrator"],
  },
  Backend: {
    Languages: ["Node.js", "Python", "Java"],
    "Frameworks & Libraries": ["Express", "Flask", "Spring"],
    Tools: ["MongoDB", "MySQL", "PostgreSQL"],
  },
};

// TAILWIND CLASSES
const h2Classes = "underline text-base lg:text-xl 2xl:text-2xl text-[#828282] font-bold";
const pClasses = "text-sm text-white";

export default function SkillsAccordion({ skill }) {
  const [showDetails, setShowDetails] = useState(false);
  const skillsSection = skillsData[skill];

  return (
    <div
      className={`relative col-span-1 row-span-4 flex flex-col gap-[250px] justify-center items-center w-full min-h-max h-full mx-auto `}
    >
      <div
        className={`relative w-full h-max flex flex-col items-center justify-center my-auto `}
      >
        <SkillsCurtain
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          label={skill}
        />
        <motion.div
          role="button"
          className="min-h-[300px] w-full mt-auto flex flex-col justify-between max-w-[500px] gap-3 rounded-2xl p-3"
          initial={{ clipPath: `inset(0% 0% 0% 0%)`, opacity: 0 }}
          animate={{
            clipPath: showDetails ? `inset(0% 0% 0% 0%)` : `inset(20% 30%)`,
            opacity: showDetails ? 1 : 0,
          }}
          transition={{ damping: 50, stiffness: 1000 }}
          onTap={() => setShowDetails(!showDetails)}
        >
          {Object.entries(skillsSection).map(([section, items]) => (
            <div key={section} className="h-full flex flex-col gap-1">
              <h2 className={h2Classes}>{section}</h2>
              <p className={pClasses}>{items.join(" | ")}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
