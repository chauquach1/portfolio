export default function PanelController({activePanel, setActivePanel}) {

  const buttonText = {
    about: "About Me",
    skills: "Skills",
    work: "Projects",
  }

  return (
    <div className="hidden lg:flex flex-col self-start items-end min-w-fit px-4 gap-2 font-thin">
      {Object.keys(buttonText).map((panel, index) => {
        return (
          <button
            key={index}
            className={`font-semibold hover:scale-125 transition-all ease-in-out rounded-lg ${
              activePanel === panel ? "text-slate-600 scale-125" : "text-white  bg-transparent"
            }`}
            onClick={() => setActivePanel(panel)}
          >
            {buttonText[panel]}
          </button>
        );
      })}
      <h1
        className={`hover:scale-90 transition-all ease-in-out rounded-lg ${
          activePanel === "contact" ? "text-slate-600" : "text-white  bg-transparent"
        }`}
        onClick={() => setActivePanel("contact")}
      >
        Contact Me
      </h1>
      <h1
        className={`hover:scale-90 transition-all ease-in-out rounded-lg ${
          activePanel === "resume" ? "text-slate-600" : "text-white bg-transparent"
        }`}
        onClick={() => setActivePanel("resume")}
      >
        Resume
      </h1>
    </div>
  );
}