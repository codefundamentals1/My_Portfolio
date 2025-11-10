import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Navigation } from "@/components/portfolio/Navigation";
import SplashCursor from "../components/SplashCursor/SplashCursor";
import { useEffect, useState } from "react";
<SplashCursor />;
const Index = () => {
 

 
  

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <SplashCursor />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
