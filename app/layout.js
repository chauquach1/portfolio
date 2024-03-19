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
      <body
        style={{ backgroundImage: `url(${painting.src})`, objectFit: "fill"}}
      >
        <LoadIn />
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
