import NavBar from "./components/NavBar";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import IntroCard from "./components/IntroCard";
import ContentContainer from "./components/ContentPanel/ContentContainer";
import ContactMeSection from "./components/ContactMeSection";

export default function Home() {
  return (
    <main className="bg-transparent flex flex-col w-full overflow-auto items-center justify-start">
      <IntroCard />
      <ContentContainer />
    </main>
  );
}
