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
    <div id="projects" className="relative flex flex-col bg-zinc-950 items-center w-full gap-4 p-2 ">
      <h1 className="text-3xl text-center text-white">Recent Projects</h1>
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
        <div id="project-display-container" className="sticky top-0 container w-full">
          <ProjectDisplay project={project} />
        </div>
      </div>
    </div>
  );
}
