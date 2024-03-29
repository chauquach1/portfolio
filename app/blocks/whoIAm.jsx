import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import snowboardingSelfie from "../../public/snowboarding-selfie.jpeg";
import GreenDoodle from "../components/doodles/GreenDoodle";
import PurpleDoodle from "../components/doodles/PurpleDoodle";
import RedDoodle from "../components/doodles/RedDoodle";


const description = "Software engineer driven by passion. I'm all about learning, adapting, and tackling challenges head-on. Let's create something amazing!";

export default function WhoIAmBlock() {
  return (
    <div className=" flex flex-col justify-between items-start min-h-screen w-full p-6 border-b-1">
      <div>
        <h1 className="text-6xl text-white/30">Hello,</h1>
        <p>I'm Chau!</p>
      </div>

      <div className="flex flex-row justify-center w-full h-max">
        <div className="z-10 first:w-[300px] h-[300px] self-center rounded-[80px] overflow-hidden bg-white/20">
          <NextImage
            // isBlurred
            width={600}
            height={600}
            src={snowboardingSelfie}
            alt="selfie"
            classNames="m-5"
          />
        </div>
        <GreenDoodle />
        <PurpleDoodle />
        <RedDoodle />
      </div>

      <div className="text-2xl text-white/30 text-end self-end">
        <p>
          Software engineer driven by passion.
          <br />
          I'm all about learning, adapting, and tackling challenges head-on.
          <br /> Let's create something amazing!
        </p>
      </div>
    </div>
  );
}