"use client"
import TypeWriter from "./TypeWriter"
import {useState, useEffect, use} from "react";

export default function LoadIn() {
  const [closeLoadIn, setCloseLoadIn] = useState(false);

  const style = {
    '--transition-duration': closeLoadIn ? '0.5s' : '0s', // Update duration based on state
  };

  return (
    <div
      className={`close-intro-effect fixed flex flex-col min-h-screen w-full z-50 bg-slate-900 top-0 ease-in-out ${
        closeLoadIn ? "-translate-y-full opacity-0" : ""
      }`}
      style={style}
    >
      <TypeWriter
        text="Hi there friend!"
        speed={80}
        closeLoadIn={closeLoadIn}
        setCloseLoadIn={setCloseLoadIn}
      />
    </div>
  );
}