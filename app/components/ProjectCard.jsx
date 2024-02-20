import {useHover} from 'react-aria';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import {useState} from "react";


export default function ProjectCard({project, projectIndex, setProjectIndex}) {


  switch (project.title) {
    case "Planur":
      projectIndex = 0;
      break;
    case "Reactemon":
      projectIndex = 1;
      break;
    case "Wurdle":
      projectIndex = 2;
      break;
    default:
      projectIndex = 0;
      break;
  }

  const handlePress = () => {
    setProjectIndex(projectIndex);
  };

  const handleHoverEnter = () => {
    setProjectIndex(projectIndex);
  }

  return (
    <Card
      className="w-[300px] bg-transparent border-1 rounded-xl text-white hover:text-red-200 hover:bg-blue-300 transition-all duration-300 ease-in-out"
      onMouseEnter={() => handleHoverEnter()}
      onPress={handlePress}
      isHoverable
    >
      <CardHeader className="pb-0">
        <h3 className="text-2xl">{project.title}</h3>
      </CardHeader>
      <CardBody className="">
        <p>{project.summary}</p>
      </CardBody>
    </Card>
  );
}
