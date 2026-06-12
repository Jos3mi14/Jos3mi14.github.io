import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/shared/ScrollToTopBtn";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import {
  HERO_DATA,
  ABOUT_DATA,
  SKILLS_DATA,
  PROJECTS_DATA,
  CONTACT_DATA,
} from "../data/portfolioData";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content">
        <HeroSection data={HERO_DATA} />
        <AboutSection data={ABOUT_DATA} />
        <SkillsSection data={SKILLS_DATA} />
        <ProjectsSection data={PROJECTS_DATA} />
        <ContactSection data={CONTACT_DATA} />
      </main>
      <Footer />
      <ScrollToTopBtn />
    </>
  );
}
