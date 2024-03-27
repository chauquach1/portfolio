import { Divider } from "@nextui-org/react";
import Carousel from "../components/sandbox/aboutMeCarousel/aboutMeCarousel";
import AboutMeAccordion from "../components/sandbox/aboutMeAccordion/AboutMeAccordion";

const description =
  "Software engineer driven by passion. I'm all about learning, adapting, and tackling challenges head-on. Let's create something amazing!";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="flex flex-col w-full min-h-screen h-max md:flex-nowrap justify-between overflow-visible text-white gap-6 bg-gray-900/5"
    >
      <div className="flex flex-row flex-wrap justify-between min-h-screen items-center w-full md:flex-nowrap overflow-visible text-white gap-4 p-6">
        <div className="flex flex-col gap-[100px] justify-between items-start min-h-screen w-full">
          <h1 className="text-6xl text-white/30 justify-self-end">Who I Am</h1>
          <div className="text-3xl text-white/30 justify-self-end">
            {description}
          </div>
        </div>
        <Divider orientation="vertical" className="rounded-sm w-2 my-4" />
        {/* <hr className="w-full h-1 md:h-screen md:w-1 bg-white/30" /> */}
        <div className="flex flex-col justify-start min-h-screen gap-3 w-full">
          <h1 className="text-6xl text-white/30 justify-self-end">What I Do</h1>
          <AboutMeAccordion />
          <br />
        </div>
      </div>
      <Divider orientation="horizontal" className="rounded-sm  h-4 my-4" />
      {/* <br/> */}
      <Carousel />
    </section>
  );
}
