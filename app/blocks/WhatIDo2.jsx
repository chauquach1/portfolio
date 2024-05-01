import SkillsAccordion from "../components/sandbox/skillsAccordion/skillsAccordion";

const quotes = [
  "What I Do.",
  "If there’s one thing I’ve learned as a developer, it is to fall in love with the process.",
  "There’s always something new to learn, and that’s pretty exciting!",
];

export default function WhatIDoBlock() {
  return (
    <>
      <div
        id="what-i-do-block"
        className="bg-shark flex flex-col justify-between min-h-screen h-max p-2 gap-[100px] w-full border-t-1"
      >
          <h1 className="text-6xl font-bold text-white/30 my-[100px] self-start sm:self-center">
            {quotes[0]}
          </h1>
          <div
            id="skills-container"
            className=" min-h-max h-max w-full md:grid grid-cols-3 grid-rows-5 justify-around items-center text-center gap-y-0 gap-x-3 px-4 text-7xl font-bold "
          >
            <SkillsAccordion skill={"Frontend"} />
            <div className="relative col-span-1 row-span-4  flex flex-col h-full min-h-full w-full text-base items-center text-white ">
              <p className="relative z-50 my-auto max-w-[590px]">{quotes[1]}</p>
            </div>
            <SkillsAccordion skill={"Backend"} />
          </div>
          <p className="mb-[100px] text-end w-full m-auto">{quotes[2]}</p>
      </div>
    </>
  );
}
