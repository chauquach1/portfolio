import Tile from "./Tile";
import TileCollection from "./TileCollection";


const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, labore! Odio debitis quis, dolorum exercitationem architecto fugiat! In porro cumque laudantium quasi? Modi, ullam. Eos facere ea vitae totam delectus?";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-row flex-wrap md:flex-nowrap overflow-visible text-white p-4 gap-4"
    >
      <div className="flex flex-col bg-white/10 w-full">
        <h1 className="text-3xl text-start font-bold">Hi,</h1>
        <h1>
          I'm Chau{" "}
          <span className="font-extralight italic text-cyan-600">
            ( yes like the noodle, dog, etc. )
          </span>
        </h1>
        <h1>{lorem}</h1>
      </div>
      <TileCollection />
    </section>
  );
}