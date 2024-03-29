import "./globals.css";
import LoadIn from "./components/load-in/LoadIn";
export const metadata = {
  title: "Chau Quach Dev",
  description: "Hi there!",
};

import painting from "../public/painting.jpeg";
import { Phudu, Roboto_Mono } from 'next/font/google'

const phudu = Phudu({
  subsets: ['latin'],
  variable: '--font-phudu',
  display: 'swap'
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap'
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${phudu.variable} ${robotoMono.variable}`}>
      <body
        className="bg-[#c9ccbb]"
      >
        {/* <LoadIn /> */}
        {children}
      </body>
    </html>
  );
}
