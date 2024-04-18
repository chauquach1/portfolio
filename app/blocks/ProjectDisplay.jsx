import { useState, useEffect } from "react";
import projectDescriptions from "../libs/projectDescriptions";
import ProjectSummary from "../components/sandbox/portfolioSection/ProjectSummary";
import ProjectTags from "../components/sandbox/portfolioSection/ProjectTags";
import ProjectPreview from "../components/sandbox/portfolioSection/ProjectPreview";

export default function ProjectDisplay({activeIndex}) {
  const [project, setProject] = useState(projectDescriptions[activeIndex]);

  useEffect(() => {
    setProject(projectDescriptions[activeIndex]);
  }, [activeIndex]);
  
  return (
    <div className="flex flex-col w-full min-h-full h-full px-4">
      <h2 className="w-full 2xl:w-1/3 text-center">Project Title</h2>
      <div className="flex flex-col 2xl:flex-row w-full min-h-full h-full gap-2">
        <ProjectPreview project={project} />
        <ProjectSummary project={project} />
        <ProjectTags project={project} />
      </div>
    </div>
  );
}