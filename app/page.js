import NavBar from "./components/NavBar";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import IntroCard from "./components/IntroCard";
import ContentContainer from "./components/ContentPanel/ContentContainer";
import ContactMeSection from "./components/ContactMeSection";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full overflow-scroll items-center justify-start">
        <IntroCard />
        <ContentContainer />
        <div className="z-20 fixed top-0 w-full">
          <ContactMeSection />
        </div>
    </main>
  );
}
