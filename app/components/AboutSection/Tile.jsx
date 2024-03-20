import {useState, useEffect } from "react";

export default function Tile({ color, outlineColor, textColor, height, width, label, content: Content, contentProps, children}) {
  const [revealContent, setRevealContent] = useState(false);

  useEffect(() => {
      console.log("revealContent", revealContent);
  }, [revealContent]);
  
  return (
    <div
      className={`outline-black/10 hover:bg-${color} hover:text-white ${textColor} font-bold bg-white/20 -outline-offset-2 outline outline-3 ${height} ${width} rounded-xl p-2`}
      onMouseEnter={(e) => setRevealContent(true)}
      onMouseLeave={(e) => setRevealContent(false)}
    >
      <div className="h-fit">
      {label}
      </div>
      {revealContent && Content ? <Content revealContent={revealContent} /> : children}
      
    </div>
  );
}