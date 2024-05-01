import WhoIAmBlock from "../blocks/WhoIAm2";
import WhatIDoBlock from "../blocks/WhatIDo2";

export default function AboutMe() {
  return (
    <section
      className={`relative me-auto overflow-visible min-h-screen min-w-screen max-w-screen flex flex-col self-center items-center overflow-x-hidden justify-start `}
    >
      <WhoIAmBlock />

      <WhatIDoBlock />
    </section>
  );
}
