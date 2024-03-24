import TileCollection from "../components/sandbox/aboutMeTiles/TileCollection";


const description = "Software engineer driven by passion. I'm all about learning, adapting, and tackling challenges head-on. Let's create something amazing!";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="block w-full h-screen min-h-[1000px] md:flex-nowrap overflow-visible text-white bg-gray-900/5 p-4 gap-4"
    >
      <div className="flex flex-row h-full">
        <div className="flex flex-col justify-between flex-grow w-full">
          <h1 className="text-6xl text-white/30 justify-self-end">About Me</h1>
          <br />
          <p className="text-4xl text-white/30 justify-self-end mt-auto">
            {description}
          </p>
        </div>
        <TileCollection />
      </div>
    </section>
  );
}