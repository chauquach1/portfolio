// import {Image} from "@nextui-org/react"
import Image from "next/image";
import profile from "../../public/profile.png";
import SkillsSection from "./SkillsSection";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const funFacts = {
  location: "San Diego, CA",
  interests: "Snowboarding, Music, Cooking",
  pets: "Magnus",
};

export default function IntroCard() {
  return (
    <>
      <div className="container flex flex-row self-center items-center justify-center sm:rounded-2xl w-full p-4 pb-10">
        <div className="flex flex-col">
          <h1 className={`${calistoga.className} text-2xl sm:text-8xl text-center text-white`}>
            Chau Quach
          </h1>
          <h2 className="text-md relative right-1 bottom-4 font-thin italic text-end text-blue-800">
            Fullstack Developer
          </h2>
        </div>
      </div>
    </>
  );
}