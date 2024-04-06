"use client";
import {useState, useEffect } from "react";

export default function Tile({ color, outlineColor, textColor, height, width, label, content: Content, contentProps, children}) {
  const [revealContent, setRevealContent] = useState(true);

  // useEffect(() => {
  //     console.log("revealContent", revealContent);
  // }, [revealContent]);
  
  return (
    <div
      className={`flex flex-col outline-black/10 hover:bg-${color} hover:text-white ${textColor} font-bold bg-white/20 -outline-offset-2 outline outline-3 ${height} ${width} rounded-xl p-2 overflow-y-hidden`}
      // onMouseEnter={(e) => setRevealContent(true)}
      // onMouseLeave={(e) => setRevealContent(false)}
    >
      {/* <div className="flex-grow h-fit"> */}
      {label}
      {/* </div> */}
      {revealContent && Content ? <Content revealContent={revealContent} /> : children}
      
    </div>
  );
}