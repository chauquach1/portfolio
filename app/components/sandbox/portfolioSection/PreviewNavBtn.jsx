import { IoIosArrowForward } from "react-icons/io";
const btnClass = "z-10 absolute self-center w-[50px] h-max";

export default function PreviewNavBtn({role, paginate, pages, currPage}) {
  const action = role === "next" ? 1 : -1;
  const position = role === "next" ? "right-0" : "left-0";
  const isVisible = currPage + action > -1 && currPage + action < pages;
  const arrowDirection = role === "prev" ? "rotate-180" : null;


  return (
    <button
      className={`${btnClass} ${position} ${isVisible ? "visible" : "hidden"}`}
      onClick={() => paginate(action)}
    >
      <IoIosArrowForward className={`text-white text-4xl ${arrowDirection}`} />
    </button>
  );
}