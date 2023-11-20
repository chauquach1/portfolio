import NavBar from "./components/NavBar";
import IntroCard from "./components/IntroCard";
import PortfolioSection from "./components/PortfolioSection";
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
        id="portfolio"
        className="row flex flex-row justify-center w-full h-[900px]"
      >
        <PortfolioSection />
      </section>
    </main>
  );
}
