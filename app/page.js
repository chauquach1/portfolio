import NavBar from "./components/NavBar";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import IntroCard from "./components/IntroCard";
import PortfolioSection from "./components/PortfolioSection";
import ContactMeSection from "./components/ContactMeSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <section
        id="intro"
        className="row flex flex-row justify-center w-full h-1/2 py-6"
      >
        <IntroCard />
      </section>
      <section
        id="skills"
        className="row flex flex-row justify-center bg-white/20 w-full h-1/2 py-6"
      >
        <SkillsSection />
      </section>
      <section
        id="portfolio"
        className="row flex flex-row justify-center w-full h-[900px] px-6"
      >
        <PortfolioSection />
      </section>
      <section
        id="contact"
        className="container flex flex-row items-center justify-between h-fit max-w-3xl py-8"
      >
        <h1>Let's Connect!</h1>
        <ContactMeSection />
      </section>
    </main>
  );
}
