import HeroSection from "./sections/HeroSection";
import ContentContainer from "./components/containers/ContentContainer";
import AboutMeSection from "./sections/AboutMeSection";
import SkillsSection from "./sections/SkillsSection";
import PortfolioSection from "./sections/PortfolioSection";

export default function Home() {
  return (
    <main className="">
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <PortfolioSection />
    </main>
  );
}
