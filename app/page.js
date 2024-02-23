import NavBar from "./components/NavBar";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import IntroCard from "./components/IntroCard";
import ContentContainer from "./components/ContentPanel/ContentContainer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-start bg-gray-950">
      <section
        id="intro"
        className="container flex flex-col items-center p-0 sm:p-4 xl:p-2 2xl:p-6 h-max w-full"
      >
        <IntroCard />
      </section>
      <section
        id="about"
        className="container flex flex-col items-center p-0 sm:p-4 xl:p-2 2xl:p-6 h-full w-full"
      >
        <ContentContainer />
      </section>
    </main>
  );
}
