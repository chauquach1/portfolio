import "./globals.css";
import LoadIn from "./components/load-in/LoadIn";
// import { Phudu, Roboto_Mono } from 'next/font/google'

import {phudu, robotoMono} from './fonts'

export const metadata = {
  title: "Chau Quach Dev",
  description: "Hi there!",
};


// const phudu = Phudu({
//   subsets: ['latin'],
//   variable: '--font-phudu',
//   display: 'swap'
// })

// const robotoMono = Roboto_Mono({
//   subsets: ['latin'],
//   variable: '--font-roboto-mono',
//   display: 'swap'
// })



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${phudu.variable} ${robotoMono.variable}`}>
      <body
        className=""
      >
        {/* <LoadIn /> */}
        {children}
      </body>
    </html>
  );
}
