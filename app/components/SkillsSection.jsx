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



export default function SkillsSection() {
  return (
    <div className="container flex flex-col flex-wrap justify-around px-6 text-white">
      <h1 className="text-center">Skills</h1>
        {/* First Column */}
        <div className="flex flex-row flex-wrap">
        <div className="flex-1 text-center">
          <h2 className="text-xl font-semibold">Languages</h2>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="flex-1 text-center">
          <h2 className="text-xl font-semibold">Databases</h2>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Supabase</li>
          </ul>
        </div>
      
        {/* Third Column */}
        <div className="flex-1 text-center">
          <h2 className="text-xl font-semibold">Frameworks</h2>
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>Express.js</li>
            <li>Django</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="flex-1 text-center">
          <h2 className="text-xl font-semibold">Other Skills</h2>
          <ul>
            <li>RESTful Routing</li>
            <li>JSON API</li>
            <li>Supabase Auth</li>
          </ul>
        </div>
        </div>
    </div>
  );
}
