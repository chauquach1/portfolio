"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// logo imports
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoPython } from "react-icons/io5";
import { HiMiniCircleStack } from "react-icons/hi2";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { SiSupabase, SiNextdotjs, SiReact, SiExpress, SiDjango } from "react-icons/si";
import { MdOutlineRoute, MdDataObject, MdLockPerson } from "react-icons/md";

const skills = {
  "Languages": [
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "HTML", icon: <IoLogoHtml5 /> },
    { name: "CSS", icon: <IoLogoCss3 /> },
    { name: "Python", icon: <IoLogoPython /> },
    { name: "SQL", icon: <HiMiniCircleStack /> },
  ],
  "Databases": [
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { name: "MongoDB", icon: <BiLogoMongodb /> },
    { name: "Supabase", icon: <SiSupabase /> },
  ],
  "Frameworks": [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React", icon: <SiReact /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Django", icon: <SiDjango /> },
  ],
  "Other Skills": [
    { name: "RESTful Routing", icon: <MdOutlineRoute /> },
    { name: "JSON API", icon: <MdDataObject /> },
    { name: "Supabase Auth", icon: <MdLockPerson /> },
  ],
};  


export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full flex flex-col flex-wrap justify-around h-full my-4 p-4 gap-6 text-white rounded-2xl bg-white/20"
    >
      <h1 className="text-center text-3xl">Skills</h1>
      <div className="flex flex-row flex-wrap justify-around">
        {Object.keys(skills).map((skill, index) => {
          return (
            <div
              key={`${skill}-section`}
              className="flex flex-col gap-1 text-center"
            >
              <div className="border-b-1">
                <h1 className="text-xl">{skill}</h1>
              </div>
              <ul className="">
                {skills[skill].map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex flex-row items-center gap-1 bg-transparent"
                    >
                      {item.icon}
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
