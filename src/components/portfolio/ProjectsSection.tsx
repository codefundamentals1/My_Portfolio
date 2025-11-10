import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
const projects = [
 
  {
    title: "E-Commerce Web Application (MERN Stack)",
    category: "Full-Stack",
    description:
      "Designed a full-stack e-commerce platform with product catalog, cart, checkout, and order tracking. Built secure REST APIs using Node.js, Express.js, and MongoDB with JWT authentication. Integrated a responsive React.js frontend with a microservices-based architecture.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/codefundamentals1/E_com_App",
    live: "#",
  },
  {
    title: "RadMac – Music Streaming Web App",
    category: "MERN Stack",
    description:
      "Engineered a music streaming platform to upload, process, and stream audio files using FFmpeg. Implemented search, playlists, and favorites features. Optimized backend performance for smooth streaming.",
    tech: ["React.js", "Node.js", "MongoDB", "FFmpeg", "Audio Processing"],
    github: "https://github.com/abhijay-7/RadMac",
    live: "#",
  },
  {
    title: "QueueCTL — CLI-Based Background Job Queue System",
    category: "Node js",
    description:
      "A robust, CLI-driven background job queue built in Node.js using SQLite for persistence. Supports multi-worker execution, automatic retries with exponential backoff, Dead Letter Queue (DLQ), and crash recovery with audit logging.",
    tech: ["SQL", "Express.js", "Database Design", "Query Optimization"],
    github: "A robust, CLI-driven background job queue built in Node.js using SQLite for persistence. Supports multi-worker execution, automatic retries with exponential backoff, Dead Letter Queue (DLQ), and crash recovery with audit logging.",
    live: "#",
  },
  {
    title: "Flight Booking System (SQL-Focused)",
    category: "SQL/Backend",
    description:
      "Developed a relational database-backed flight booking system with tables for flights, bookings, passengers, and payments. Wrote complex SQL queries for seat allocation, availability checks, fare calculations, and passenger history.",
    tech: ["SQL", "Express.js", "Database Design", "Query Optimization"],
    github: "#",
    live: "#",
  },
  {
    title: "ExploreMate – AI Itinerary Planner",
    category: "AI Integration",
    description:
      "Built a web platform generating personalized itineraries using the Cohere AI API. Developed frontend in React.js and backend in Express.js with REST APIs for user queries and AI responses. Focused on scalability and responsive design.",
    tech: ["React.js", "Express.js", "Cohere AI", "REST APIs"],
    github: "https://github.com/codefundamentals1/Exploremate_Ai_Itenenraryplanner",
    live: "#",
  },
   {
    title: "Crop Market Analysis (AI/ML)",
    category: "AI/ML",
    description:
      "Developed a time-series forecasting model predicting crop prices for the next 12 months using Python, Pandas, and scikit-learn. Processed 10+ years of datasets with feature engineering and visualization. Built Flask/FastAPI API for serving predictions.",
    tech: ["Python", "Pandas", "scikit-learn", "Flask", "FastAPI"],
    github: "https://github.com/codefundamentals1/Crop_Market_Analysis",
    live: "#",
  },
];


  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto w-[80%]">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-primary/50">{"// "}</span>
            <span className="text-primary">Featured</span>
            <span className="text-muted-foreground">.projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all animate-fade-in group hover:border-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="font-mono text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  <span className="text-muted-foreground">{"{"}</span>
                  {project.title}
                  <span className="text-muted-foreground">{"}"}</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10 font-mono flex-1"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono flex-1"
                  onClick={() => window.open(project.live, "_blank")}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <Button
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10 font-mono"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <Github size={18} className="mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
