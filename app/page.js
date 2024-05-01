import HeroSection from "./sections/HeroSection";
import ContentContainer from "./components/containers/ContentContainer";
import AboutMeSection from "./sections/AboutMeSection";
import SkillsSection from "./sections/SkillsSection";
import PortfolioSection2 from "../app/components/sandbox/portfolioSection/PortfolioSectionV2";
import SkillsAccordion from "./components/sandbox/skillsAccordion/skillsAccordion";


export default function Home() {
  return (
    <main className="min-w-screen w-screen">
        <HeroSection />
        <AboutMeSection />
        <PortfolioSection2 />
    </main>
  );
}
