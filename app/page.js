import NavBar from "./components/NavBar";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import IntroCard from "./components/IntroCard";
import PortfolioSection from "./components/PortfolioSection";
import ContactMeSection from "./components/ContactMeSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-950">
      <section
        id="intro"
        className="row flex flex-row h-screen justify-center p-6 w-full"
      >
        <IntroCard />
      </section>
      <section
        id="skills"
        className="row flex flex-row justify-center  w-full h-1/2 py-6"
      >
        <SkillsSection />
      </section>
      <section
        id="portfolio"
        className="justify-center min-w-full h-[900px] px-2"
      >
        <PortfolioSection />
      </section>
      <section
        id="contact"
        className="items-center justify-between h-fit max-w-3xl py-8"
      >
        <h1>Connect With Me</h1>
        <ContactMeSection />
      </section>
    </main>
  );
}
