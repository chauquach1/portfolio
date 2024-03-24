import HeroSection from "./sections/HeroSection";
import ContentContainer from "./components/containers/ContentContainer";
import AboutMeSection from "./sections/AboutMeSection";
import SkillsSection from "./sections/SkillsSection";
import PortfolioSection from "./sections/PortfolioSection";

export default function Home() {
  return (
    <main className="bg-transparent flex flex-col w-full overflow-auto items-center justify-start">
      <HeroSection />
      <ContentContainer>
        <div className="h-[200px]"></div>
        <AboutMeSection />
        <div className="h-[200px]"></div>
        <SkillsSection />
        <div className="h-[200px]"></div>
        <PortfolioSection />
      </ContentContainer>
    </main>
  );
}
