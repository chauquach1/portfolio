import "./globals.css";
import LoadIn from "./components/load-in/LoadIn";
import Image from "next/image";
export const metadata = {
  title: "Chau Quach Dev",
  description: "Hi there!",
};

import painting from "../public/painting.jpeg";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center h-screen  w-full">
        <Image
          src={painting}
          alt="Chau's selfie"
          // style={{ objectFit: "cover" }}
          // objectFit="cover" 
          // object-fit="fit"
          // layout="fill"
          fill={true}
          priority={true}
          quality={100}
        />
        {/* <LoadIn /> */}
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
