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

export default function SkillsDetails({ showDetails, skillsSection }) {
  const h2Classes = "underline text-xl text-[#828282] font-bold";
  const pClasses = "text-xs text-white";

  const height = useMotionValue(0);

  const scaleY = useTransform(height, [0, 1], [0, 1]);

  const springScale = useSpring(scaleY, { damping: 50, stiffness: 1000 });

  useMotionValueEvent(scaleY, "change", (latest) => {
    console.log(latest);
  });

  return (
    <>
      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="h-full w-full flex flex-col gap-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 1, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {Object.entries(skillsSection).map(([section, items]) => (
              <div key={section} className="flex flex-col gap-3">
                <h2 className={h2Classes}>{section}</h2>
                <p className={pClasses}>{items.join(" | ")}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
