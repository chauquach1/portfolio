"use client";
import {useState, useEffect} from "react";

export default function TypeWriter({text, speed, initialDelay}) {
  const [startType, setStartType] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStartType(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (startType && index < text.length) {
      setTimeout(() => {
        setDisplayText(displayText + text[index]);
        setIndex(index + 1);
      }, speed);
    }
  }, [startType, index]);


  return (
      <h1 className="my-auto text-center text-white">{displayText}</h1>
  )
}