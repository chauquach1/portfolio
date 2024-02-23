export default function PanelController({activePanel, setActivePanel}) {

  const buttonText = {
    about: "About Me",
    skills: "Skills",
    work: "Projects",
    contact: "Contact Me",
    resume: "Resume",
  }

  return (
      <div className="hidden lg:flex flex-col self-start items-end min-w-fit px-4 gap-2 font-thin">
        {Object.keys(buttonText).map((panel, index) => {
          return (
            <button
              key={index}
              className={`text-white hover:scale-125 transition-all ease-in-out rounded-lg ${
                activePanel === panel
                  ? "text-slate-600"
                  : "bg-transparent"
              }`}
              onClick={() => setActivePanel(panel)}
            >
              {buttonText[panel]}
            </button>
          );
        }
        )}
      </div>
  );
}