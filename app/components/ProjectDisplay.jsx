import { Link, Divider } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";

export default function ProjectDisplay({ project }) {
  const title = project.title;
  const features = project.features;
  const description = project.description;
  const frontEnd = project.frontEnd;
  const backEnd = project.backEnd;
  const languages = project.languages;
  const liveLink = project.liveLink;
  const github = project.github;
  const projectType = project.projectType;

  return (
    <div
      id="project-panel"
      className="hidden sm:flex flex-col min-h-full bg-white/20 rounded-2xl p-6 overflow-y-scroll"
    >
      <div id="project-links" className="flex flex-row justify-between">
        <h1 className="font-extrabold text-5xl">{title}</h1>
        <div id="link-container" className="flex flex-row items-center gap-2">
          <Link href={liveLink} color="primary" size="small" target="_blank">
            Live
          </Link>
          <Divider orientation="vertical" className="max-h-5" />
          <Link href={github} color="primary" size="small" target="_blank">
            <FaGithub />
          </Link>
        </div>
      </div>
      <div
        id="tools-container"
        className="w-full flex flex-row flex-wrap justify-start my-4 gap-4"
      >
        {!frontEnd ? null : (
          <div id="frontend-list">
            <p className="text-md font-thin">Front-end: </p>
            <ul className="flex flex-row gap-2">
              {frontEnd.map((framework, index) => {
                return (
                  <li key={index} className="inline-flex items-center gap-2">
                    <p>{framework}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {!backEnd ? null : (
          <div id="backend-list">
            <p className="text-md font-thin">Back-end: </p>
            <ul className="flex flex-row gap-2">
              {backEnd.map((framework, index) => {
                return (
                  <li key={index} className="inline-flex items-center gap-2">
                    <p>{framework}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div id="languages-lists">
          <p className="text-md font-thin">Languages: </p>
          <ul className="flex flex-row gap-2">
            {languages.map((language, index) => {
              return (
                <li key={index} className="inline-flex items-center gap-2">
                  <p>{language}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div id="description-container" className=" my-4">
        <p>{description}</p>
      </div>
      <div id="project-features" className="flex flex-col gap-2">
        <p className="text-md font-semibold">Features: </p>
        {features.map((feature, index) => {
          return (
            <div key={index} className="flex flex-row items-center gap-2">
              <p> {feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
