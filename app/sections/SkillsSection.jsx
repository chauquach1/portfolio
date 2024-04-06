"use client";

import * as React from "react";

// logo imports
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoPython,
} from "react-icons/io5";
import { HiMiniCircleStack } from "react-icons/hi2";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import {
  SiSupabase,
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiDjango,
} from "react-icons/si";
import { MdOutlineRoute, MdDataObject, MdLockPerson } from "react-icons/md";

const skills = {
  Languages: [
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "HTML", icon: <IoLogoHtml5 /> },
    { name: "CSS", icon: <IoLogoCss3 /> },
    { name: "Python", icon: <IoLogoPython /> },
    { name: "SQL", icon: <HiMiniCircleStack /> },
  ],
  Databases: [
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { name: "MongoDB", icon: <BiLogoMongodb /> },
    { name: "Supabase", icon: <SiSupabase /> },
  ],
  Frameworks: [
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
      className="relative z-10 w-full bg-zinc-950 rounded-3xl flex flex-row flex-wrap lg:flex-nowrap justify-center items-center h-screen p-4 gap-6 text-white "
    >
      <div className="container grid grid-cols-12 grid-rows-4 h-3/4 w-full justify-center rounded-3xl">
        <div className="col-span-full row-span-2 justify-center rounded-3xl bg-slate-900 items-center rounded-br-none"></div>
        <div className="col-span-3 row-span-2 justify-start bg-white/20 items-center ">
          <div className="rounded-3xl rounded-tr-none bg-slate-900  items-center w-full h-full ">
            {/* Small Compartment container */}
            <div className="h-full w-full rounded-tr-3xl bg-zinc-950  pr-2 pt-2">
              {/* Small Compartment */}
              <div className="h-full w-full text-center rounded-3xl bg-red-400/20 p-1">
                <h1>Small Compartment</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" z-10 col-span-9 row-span-2 justify-center rounded-b-3xl bg-slate-900 items-center"></div>
      </div>
    </section>
  );
}
