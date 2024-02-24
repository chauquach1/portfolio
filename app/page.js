import NavBar from "./components/NavBar";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import IntroCard from "./components/IntroCard";
import ContentContainer from "./components/ContentPanel/ContentContainer";
import ContactMeSection from "./components/ContactMeSection";

export default function Home() {
  return (
    <main className="flex flex-col h-max w-full items-center justify-start p-0 md:p-10 overflow-y-visible bg-gray-950">
        <IntroCard />
      <div className="relative container flex flex-row items-center justify-center w-full h-full">
        <ContentContainer />
      </div>
      <div className="fixed top-0 w-full bg-white">
      <ContactMeSection />
      </div>
    </main>
  );
}
