"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import SkillsDetails from "./skillsDetails";

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
  const titleColor = titleColors[skill] || titleColors.Default;
  const h2Classes = "underline text-xl text-[#828282] font-bold";
  const pClasses = "text-xs text-white";

  const skillsSection = skillsData[skill];

  const toggleDetails = () =>
    setShowDetails((prevShowDetails) => !prevShowDetails);

  const h = useMotionValue(0);

  const scaleHeight = useTransform(h, [0, 1], [0, 120]);

  const springScale = useSpring(scaleHeight, { damping: 50, stiffness: 1000 });

  useEffect(() => {
    console.log(`Show ${skill}`, showDetails);
  }, [showDetails]);

  useMotionValueEvent(h, "change", (latest) => {
    console.log("h latest: ", latest);
  });

  const variants = {
    open: { height: "250px" },
    closed: { height: "0px" },
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center w-max min-h-max h-[600px] ${titleColor} mx-auto text-5xl font-bold `}
        onClick={toggleDetails}
        role="button"
        tabIndex="0"
      >
        <h1>{skill}</h1>
        <div className="h-fit flex flex-col min-h-fit overflow-hidden">
          <motion.div
            className="min-h-full w-full flex flex-col gap-3"
            initial="closed "
            animate={showDetails ? "open" : "closed"}
            variants={variants}
          >
            {Object.entries(skillsSection).map(([section, items]) => (
              <div key={section} className="flex flex-col gap-3">
                <h2 className={h2Classes}>{section}</h2>
                <p className={pClasses}>{items.join(" | ")}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <h1>Development</h1>
      </div>
    </>
  );
}
