import NavBar from "./components/NavBar";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import IntroCard from "./components/IntroCard";
import ContentContainer from "./components/ContentPanel/ContentContainer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-start bg-gray-950">
        <IntroCard />
      <div className="container flex flex-row items-center justify-center w-full">
        <ContentContainer />
      </div>
    </main>
  );
}
