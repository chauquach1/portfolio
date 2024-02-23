"use client";
import {useState, useEffect} from "react";

export default function TypeWriter({text, speed, closeLoadIn, setCloseLoadIn}) {
  const [startType, setStartType] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStartType(true);
    }, 300);
  }, []);

  useEffect(() => {
    if (startType && index < text.length) {
      setTimeout(() => {
        setDisplayText(displayText + text[index]);
        setIndex(index + 1);
      }, speed);
    }

    if (index === text.length) {
      setTimeout(() => {
        setCloseLoadIn(true);
      }, 1200);
    }
  }, [startType, index]);


  return (
      <h1 className="my-auto text-center text-white">{displayText}</h1>
  )
}