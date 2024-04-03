import WhoIAmBlock from "../blocks/WhoIAm";
import WhatIDoBlock from "../blocks/WhatIDo";

export default function AboutMe() {
  return (
    <section
      className={`relative me-auto  overflow-y-hidden min-h-screen min-w-screen max-w-screen flex flex-col self-center items-center overflow-hidden justify-between `}
    >
      <WhoIAmBlock />

      <WhatIDoBlock />
    </section>
  );
}
