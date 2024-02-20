// import {Image} from "@nextui-org/react"
import Image from "next/image";
import profile from "../../public/profile.png";
import SkillsSection from "./SkillsSection";

const funFacts = {
  location: "San Diego, CA",
  interests: "Snowboarding, Music, Cooking",
  pets: "Magnus",
};

export default function IntroCard() {
  return (
    <div className="flex flex-col w-full max-w-3xl gap-4">
      <div className="flex flex-col self-center bg-black/40 shadow-2xl rounded-2xl w-full max-w-2xl p-2">
        <div className="w-fit self-center">
          <h1 className="text-2xl sm:text-5xl text-center text-white">
            Chau Quach
          </h1>
          <h2 className="text-xs sm:text-sm relative left-4 bottom-2 font-thin italic text-end text-gray-300">
            Fullstack Developer
          </h2>
        </div>
        <div className="relative text-center">
          {" "}
          {/* Use relative positioning and text-center */}
          <ul className="font-thin italic text-gray-300/20 text-start text-sm sm:text-2xl md:text-3xl ">
            <p>&#123; seek opportunities</p>
            <p>create solutions</p>
            <p>invite new ideas &#125;</p>
          </ul>
          <div className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              priority
              src={profile}
              alt="Picture of Chau"
              style={{ objectFit: "contain" }}
              className="h-20 w-20 sm:h-32 sm:w-32"
            />
          </div>
          <div
            className="z-9 absolute top-1/2 -right-28 transform
          -translate-x-28 -translate-y-1/2 
          sm:-translate-x-30 sm:-translate-y-30"
          >
            <ul className="font-thin italic text-gray-300/20 text-end text-sm sm:text-2xl md:text-3xl">
              
              <p>&#123; san diego, ca</p>
              <p>snowboarding</p>
              <p>i love dogs &#125;</p>
            </ul>
          </div>
        </div>
        <div className="p-3 sm:p-7 text-small sm:text-lg text-center">
          <p>
            I am a creative, a team leader, and a problem solver turned
            developer!
          </p>
        </div>
      </div>
    </div>
  );
}
