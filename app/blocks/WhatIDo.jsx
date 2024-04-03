import SkillsAccordion from "../components/sandbox/skillsAccordion/skillsAccordion";

const quote1 =
  "If there’s one thing I’ve learned as a developer, it is to fall in love with the process.";

export default function WhatIDoBlock() {
  return (
    <>
      <div
        id="what-i-do-block"
        className="bg-zinc-950 h-full min-h-screen w-full py-[100px]"
      >
        <div className=" bg-[#c9ccbb] flex flex-col justify-between items-end h-screen min-h-screen w-full rounded-t-[50px] my-[100px] pt-[100px]">
          <h1 className="text-9xl font-bold text-white/30 self-center my-[100px]">
            What I Do.
          </h1>
          <div
            id="skills-container"
            className=" h-full w-full flex flex-row justify-around items-center text-center gap-3 px-4 text-7xl font-bold "
          >
            <SkillsAccordion skill={"Frontend"} />
            <div className="min-h-full text-base text-white/20 ">{quote1}</div>
            <SkillsAccordion skill={"Backend"} />
          </div>
          <div className="h-[200px] mt-[100px] w-full border-t-1"></div>
        </div>
      </div>
    </>
  );
}
