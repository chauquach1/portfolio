// import {Image} from "@nextui-org/react"
import Image from "next/image";
import profile from "../../public/profile.png";
import SkillsSection from "./SkillsSection";
import { Calistoga } from "next/font/google";
import TypeWriter from "./load-in/TypeWriter";

import selfie from "../../public/selfie.jpeg";

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

export default function IntroCard2() {
  return (
    <div
      id="home"
      className="sticky flex flex-col self-center items-center justify-center mt-auto min-h-screen w-full gap-2"
    >
      <div className="fixed z-10  flex flex-col items-center justify-center gap-2">
        {/* NAME */}
        <div
          className={`${calistoga.className} w-max transition delay-0 ease-in duration-100 inline-flex justify-center text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-start my-auto scale-100 opacity-0 text-white`}
          style={{
            animation: "scaleIn 1.3s ease-in-out 0.2s forwards",
          }}
        >
          &lt;
          <div className="typed-out">
            Chau Quach
            <div className="w-full relative text-end font-normal text-sm">
              Fullstack Developer
            </div>
          </div>
          /&gt;
        </div>
      </div>
    </div>
  );
}
