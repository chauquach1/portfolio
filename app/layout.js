import "./globals.css";
import LoadIn from "./components/load-in/LoadIn";
export const metadata = {
  title: "Chau Quach Dev",
  description: "Hi there!",
};

import painting from "../public/painting.jpeg";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ backgroundImage: `url(${painting.src})`, backgroundSize: "cover", backgroundAttachment: "fixed"}}
      >
        {/* <LoadIn /> */}
        {children}
      </body>
    </html>
  );
}
