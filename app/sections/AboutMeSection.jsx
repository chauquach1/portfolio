import WhoIAmBlock from "../blocks/WhoIAm.jsx";
import WhatIDoBlock from "../blocks/WhatIDo.jsx";

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
