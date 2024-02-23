export default function PanelController({activePanel, setActivePanel}) {

  const buttonText = {
    about: "About Me",
    skills: "Skills",
    work: "Projects",
    contact: "Contact Me",
  }

  return (
      <div className="flex flex-col self-start items-end min-w-fit p-4 font-thin">
        {Object.keys(buttonText).map((panel, index) => {
          return (
            <button
              key={index}
              className={`text-white hover:scale-125 transition-all ease-in-out rounded-lg p-2 ${
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