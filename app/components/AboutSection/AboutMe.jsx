import Tile from "./Tile";
import TileCollection from "./TileCollection";


const description = "Software engineer driven by passion. I'm all about learning, adapting, and tackling challenges head-on. Let's create something amazing!";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-row flex-wrap md:flex-nowrap overflow-visible text-white p-4 gap-4"
    >
      <div className="flex flex-col w-full">
        <h1 className="text-6xl text-white/30 justify-self-end">About Me</h1>
        <br/>
        <p className="text-4xl text-white/30 justify-self-end mt-auto">{description}</p>
      </div>
      <TileCollection />
    </section>
  );
}