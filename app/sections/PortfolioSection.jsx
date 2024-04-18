"use client";
import ProjectCard from "../components/portfolioComponents/ProjectCard";
import ProjectDisplay from "../components/portfolioComponents/ProjectDisplay";
import { useState, useEffect } from "react";
import projectDescriptions from "../libs/projectDescriptions";

export default function PortfolioSection() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [project, setProject] = useState(projectDescriptions[projectIndex]);

  useEffect(() => {
    setProject(projectDescriptions[projectIndex]);
  }, [projectIndex]);

  return (
    <div
      id="projects"
      className="relative flex flex-col min-h-screen bg-zinc-950 rounded-t-[50px] items-center w-full p-2 "
    >
      <div className=" flex flex-col h-[100px] text-center items-start w-full mx-auto"></div>
      <h1 className="w-full text-9xl font-bold text-end text-white">{"What I've Made."}</h1>
      <div
        id="project-container"
        className="w-full flex flex-row justify-center gap-0 sm:gap-2"
      >
        <div
          id="projects-index"
          className="container flex flex-col w-fit gap-2"
        >
          <ProjectCard
            id="planur-card"
            project={projectDescriptions[0]}
            setProjectIndex={setProjectIndex}
            projectIndex={projectIndex}
          />
          <ProjectCard
            id="reactemon-card"
            project={projectDescriptions[1]}
            setProjectIndex={setProjectIndex}
            projectIndex={projectIndex}
          />
          <ProjectCard
            id="wurdle-card"
            project={projectDescriptions[2]}
            setProjectIndex={setProjectIndex}
            projectIndex={projectIndex}
          />
        </div>
        <div
          id="project-display-container"
          className="sticky top-0 container w-full"
        >
          <ProjectDisplay project={project} />
        </div>
      </div>
    </div>
  );
}
