import WhoIAm from "../blocks/WhoIAm";
import WhatIDo from "../blocks/WhatIDo";

export default function AboutMe() {
  return (
    <section
      className={`relative me-auto  overflow-y-hidden min-h-screen min-w-screen max-w-screen flex flex-col self-center items-center overflow-hidden justify-between `}
    >
      <WhoIAm />

      <WhatIDo />
    </section>
  );
}
