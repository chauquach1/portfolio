import ContactMeSection from "../ContactMeSection";

export default function PanelController({activePanel, setActivePanel}) {

  const buttonText = {
    about: "About Me",
    skills: "Skills",
    work: "Projects",
  }

  return (
    <div className="sticky top-0 hidden lg:flex flex-col self-start items-end min-w-fit px-4 gap-2 font-thin">
      {Object.keys(buttonText).map((panel, index) => {
        return (
          <button
            key={index}
            className={`font-semibold hover:scale-125 transition-all ease-in-out rounded-lg ${
              activePanel === panel
                ? "text-slate-600 scale-125"
                : "text-white  bg-transparent"
            }`}
            onClick={() => setActivePanel(panel)}
          >
            {buttonText[panel]}
          </button>
        );
      })}
      <div className="border-t-1 py-2 w-full text-right">
        <h1
          className={
            "hover:scale-95 active:scale-90 transition-all ease-in-out rounded-lg text-white bg-transparent"
          }
        >
          Resume
        </h1>
      </div>
    </div>
  );
}