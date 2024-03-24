import ContactMeSection from "../../sections/ContactMeSection";

export default function PanelController({activePanel, setActivePanel}) {

  const buttonText = {
    home: "Home",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
  }

  return (
    <div className="fixed left-0 top-0 hidden lg:flex flex-col self-start items-end min-w-fit py-6 mx-6 gap-2 font-thin">
      {Object.keys(buttonText).map((panel, index) => {
        return (
          <a
            key={index}
            href={`#${panel}`}
            className={`font-semibold hover:scale-125 transition-all ease-in-out rounded-lg ${
              activePanel === panel
                ? "text-slate-600/90 fill-white stroke-slate-100 scale-125"
                : "text-white  bg-transparent"
            }`}
            onClick={() => setActivePanel(panel)}
          >
            {buttonText[panel]}
          </a>
        );
      })}
      <div className="border-t-1 py-2 w-full text-right">
        <a
          href="/resume.pdf"
          target="_blank"
          className={
            "hover:scale-95 active:scale-90 transition-all ease-in-out rounded-lg text-white bg-transparent"
          }
        >
          Resume
        </a>
      </div>
    </div>
  );
}