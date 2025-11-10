import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import TiltedCard from "../TiltedCard/TiltedCard";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-Stack Developer & DSA enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 pt-20"
    >
      
      {/* Background effects (unchanged) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Centered container (80% width) */}
      <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 animate-fade-in">
        {/* --- LEFT SIDE CONTENT --- */}
        <div className="flex-1 text-center md:text-left">
          <div className="mb-6 font-mono text-primary text-sm">
            <span className="text-muted-foreground">{"const"}</span> developer ={" "}
            <span className="text-code-string">{"{"}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-mono leading-tight">
            <span className="text-muted-foreground">{"<"}</span>
            <span className="text-primary text-glow">Anish Raja</span>
            <span className="text-muted-foreground">{" />"}</span>
          </h1>

          <div className="h-12 mb-8 flex items-center justify-center md:justify-start">
            <span className="font-mono text-xl md:text-2xl text-muted-foreground mr-2">
              {">"}
            </span>
            <span className="font-mono text-xl md:text-2xl text-foreground">
              {displayText}
              <span className="animate-blink text-primary">|</span>
            </span>
          </div>

          <p className="text-muted-foreground max-w-lg mb-8 text-lg leading-relaxed">
            <span className="text-primary/50 font-mono">// </span>
            Final-year B.Tech student at IIIT Dharwad with hands-on experience
            in full-stack web development. Proficient in MERN stack, SQL, REST
            APIs, and DSA/problem-solving. Experienced in building end-to-end
            scalable applications integrating databases.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start mb-12 flex-wrap">
            <Button
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono border-glow"
            >
              <Mail className="mr-2" size={18} />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 font-mono"
              onClick={() => window.open("#", "_blank")}
            >
              View Resume
            </Button>
          </div>

          {/* Socials */}
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://github.com/codefundamentals1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/anish-raja-a1b694224"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:anishr888999@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE IMAGE --- */}
        <div className="flex-1 flex justify-center md:justify-center">
         
          <TiltedCard
            imageSrc="https://i.ibb.co/4Zgs2xBH/pic2.jpg"
            altText="Anish Raja"
            captionText="Anish Raja -Dev"
            containerHeight="600px"
            containerWidth="500px"
            imageHeight="500px"
            imageWidth="400px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            
          />
          
        </div>
      </div>

      {/* Scroll Down */}
      <button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
      >
        <ChevronDown size={32} />
      </button>

      {/* Floating image animation */}
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-floating {
          animation: floating 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
