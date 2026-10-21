import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [hash]);

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
