import { phudu } from "../libs/fonts";
import NextImage from "next/image";
import snowboardingSelfie from "../../public/snowboarding-selfie.jpeg";
import GreenDoodle from "../components/doodles/GreenDoodle";
import PurpleDoodle from "../components/doodles/PurpleDoodle";
import RedDoodle from "../components/doodles/RedDoodle";


const description = "Software engineer driven by passion. I'm all about learning, adapting, and tackling challenges head-on. Let's create something amazing!";

export default function WhoIAmBlock() {
  return (
    <div className=" flex flex-col justify-between items-start min-h-screen w-full my-[100px]">
      <div>
        <h1
          className={`${phudu.className} font-bold text-7xl lg:text-8xl xl:text-9xl text-white/30 align-text-top`}
        >
          Who I Am.
        </h1>
        <div className="p-3 max-w-[800px]">
          <p>
            Nice to meet you! I'm Chau, a fullstack developer who loves seeing
            ideas become reality. I'm passionate about creating unique
            user-centric experiences that are scalable and reliable.{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full h-max">
        <div className="z-10 first:w-[300px] h-[300px] self-center rounded-[80px] overflow-hidden bg-white/20">
          <NextImage
            // isBlurred
            width={600}
            height={600}
            src={snowboardingSelfie}
            alt="selfie"
            classnames="m-5"
          />
        </div>
        <GreenDoodle />
        <PurpleDoodle />
        <RedDoodle />
      </div>

      <div className="text-2xl text-white/30 text-end self-end">
        Let's create something amazing!
      </div>
    </div>
  );
}