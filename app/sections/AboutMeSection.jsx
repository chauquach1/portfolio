import { Divider } from "@nextui-org/react";
import Carousel from "../components/sandbox/aboutMeCarousel/aboutMeCarousel";
import AboutMeAccordion from "../components/sandbox/aboutMeAccordion/AboutMeAccordion";

const description =
  "Software engineer driven by passion. I'm all about learning, adapting, and tackling challenges head-on. Let's create something amazing!";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="flex flex-col w-full h-screen min-h-[1000px] md:flex-nowrap overflow-visible text-white bg-gray-900/5 p-4"
    >
      <div className="flex flex-row justify-between items-center w-full h-screen md:flex-nowrap overflow-visible text-white gap-4">
        <div className="flex flex-col justify-between flex-grow h-full w-full">
          <h1 className="text-6xl text-white/30 justify-self-end">Who I Am</h1>
          <p className="text-4xl text-white/30 justify-self-end mt-auto">
            {description}
          </p>
        </div>
        <Divider orientation="vertical" className="rounded-sm w-2 my-4" />
        <div className="flex flex-col justify-start flex-grow h-full w-full">
          <h1 className="text-6xl text-white/30 justify-self-end">What I Do</h1>
          <AboutMeAccordion />
          <br />
        </div>
      </div>
      <Divider orientation="horizontal" className="rounded-sm  h-4 my-4" />
      <Carousel />
    </section>
  );
}
