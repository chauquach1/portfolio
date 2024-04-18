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
        className="bg-zinc-950 h-full min-h-screen w-full"
      >
        <div className=" bg-[#C9CCBB] flex flex-col justify-between items-end h-[110vh] min-h-screen w-full rounded-t-[50px] mt-[100px] ">
          <h1 className="text-9xl font-bold text-white/30 self-center mt-[100px]">
            {quotes[0]}
          </h1>
          <div
            id="skills-container"
            className=" h-full w-full grid grid-cols-3 grid-rows-5 justify-around items-center text-center gap-y-0 gap-x-3 px-4 text-7xl font-bold "
          >
            <SkillsAccordion skill={"Frontend"} />
            <div className="relative col-span-1 row-span-4  flex flex-col h-full min-h-full w-full text-base items-center text-white ">
              <p className="relative z-50 my-auto max-w-[590px]">{quotes[1]}</p>
              <div
                className="absolute w-full h-full bg-[#D9D9D9] max-w-[400px]"
                style={{ clipPath: "circle(closest-side)" }}
              ></div>
            </div>
            <SkillsAccordion skill={"Backend"} />
          </div>
          <p className="z-50 mb-4 text-end ms-auto">{quotes[2]}</p>
          {/* spacer */}
          <div className="bg-[#c9ccbb] flex flex-col h-[200px] text-center items-start w-full mx-auto"></div>
        </div>
      </div>
    </>
  );
}
