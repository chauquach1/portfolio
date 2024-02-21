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
      <div className="flex flex-row self-center items-start justify-between sm:rounded-2xl w-full p-4 pb-10">
        <div className="flex flex-row items-center justify-evenly w-full">
        <div className="absolute z-0 self-start me-auto left-2 sm:left-6 lg:left-8">
          <ul className="font-thin italic text-gray-600 text-start text-sm sm:text-lg md:text-2xl">
            <p>seek opportunities</p>
            <p>create solutions</p>
            <p>invite new ideas</p>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className={`${calistoga.className} text-2xl sm:text-8xl text-center text-white`}>
            Chau Quach
          </h1>
          <h2 className="text-md relative right-1 bottom-4 font-thin italic text-end text-blue-800">
            Fullstack Developer
          </h2>
        </div>
        <div
          className="absolute z-0 self-start ms-auto right-2 sm:right-6 lg:right-8"
        >
          <ul className="font-thin italic text-gray-600 text-end mx-auto text-sm sm:text-lg md:text-2xl">
            <p>san diego, ca</p>
            <p>snowboarding</p>
            <p>i love dogs</p>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
}


{/* <div className="translate-x-16 -translate-y-4">
<Image
  priority
  src={profile}
  alt="Picture of Chau"
  style={{ objectFit: "contain" }}
  className="h-20 w-20 sm:h-32 sm:w-32"
/>
</div> */}