import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Navigation } from "@/components/portfolio/Navigation";
import SplashCursor from "../components/SplashCursor/SplashCursor";
import { useEffect, useState } from "react";
import Particles from "@/components/Particles/Particles";
<SplashCursor />;
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div
        
          style={{ width: "100%", height: "800px", position: "absolute" }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <SplashCursor />
        <HeroSection />

        <div
          className="absolute inset-0 z-0"
          style={{
            width: "100%",
            height: "3000px",
            position: "absolute",
          }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={1500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
