import WhoIAmBlock from "../blocks/WhoIAm2";
import WhatIDoBlock from "../blocks/WhatIDo2";

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
