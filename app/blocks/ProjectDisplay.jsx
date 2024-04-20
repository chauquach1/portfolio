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
      <div className="flex flex-col 2xl:flex-row w-full min-h-full h-full gap-2">
        <ProjectPreview previews={project.images}  />
        <ProjectSummary project={project} />
        <ProjectTags project={project} />
      </div>
    </div>
  );
}