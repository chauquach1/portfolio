import HeroSection from "./sections/HeroSection";
import ContentContainer from "./components/containers/ContentContainer";
import AboutMeSection from "./sections/AboutMeSection";
import SkillsSection from "./sections/SkillsSection";
import PortfolioSection from "./sections/PortfolioSection";
import SkillsAccordion from "./components/sandbox/skillsAccordion/skillsAccordion";


export default function Home() {
  return (
    <main className="">
        <HeroSection />
        <AboutMeSection />
        <PortfolioSection />
    </main>
  );
}
