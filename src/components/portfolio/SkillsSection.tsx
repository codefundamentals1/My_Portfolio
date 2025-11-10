import { Card } from "@/components/ui/card";

export const SkillsSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript (ES6+)", "Java", "C++", "Python"],
      color: "primary",
    },
    {
      category: "Frontend",
      items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Redux"],
      color: "accent",
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Microservices",
        "Axios / API",
      ],
      color: "secondary",
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "MSSQL"],
      color: "primary",
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "Postman"],
      color: "accent",
    },
    {
      category: "concepts",
      items: [
        "OOP",
        "Design Patterns",
        "Scalable Systems Design",
        "DSA",
      ],
      color: "secondary",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto w-[80%]">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-primary/50">{"// "}</span>
            <span className="text-primary">Skills</span>
            <span className="text-muted-foreground">.stack</span>
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillSet, index) => (
            <Card
              key={index}
              className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all animate-fade-in hover:border-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-mono text-xl font-semibold mb-4 text-primary">
                <span className="text-muted-foreground">{"<"}</span>
                {skillSet.category}
                <span className="text-muted-foreground">{" />"}</span>
              </h3>
              <div className="space-y-3">
                {skillSet.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground font-mono text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 code-block animate-fade-in">
          <pre className="text-xs md:text-sm overflow-x-auto">
            <code>
              <span className="text-code-keyword">const</span>{" "}
              <span className="text-code-function">techStack</span> = {"{"}
              {"\n  "}
              <span className="text-foreground">languages</span>: [
              <span className="text-code-string">"JavaScript"</span>,{" "}
              <span className="text-code-string">"Java"</span>,{" "}
              <span className="text-code-string">"C++"</span>
              <span className="text-code-string">"Python"</span>
              ],
              {"\n  "}
              <span className="text-foreground">Web Dev</span>: [
              <span className="text-code-string">"MERN"</span>,{" "}
              <span className="text-code-string">"Node.js"</span>,{" "}
              <span className="text-code-string">"axios api "</span>,{" "}
              <span className="text-code-string">"Micro services"</span>, ],
              {"\n  "}
              <span className="text-foreground">frontend</span>: [
              <span className="text-code-string">"React.js"</span>,{" "}
              <span className="text-code-string">"TailwindCSS"</span>,{" "}
              <span className="text-code-string">"HTML5"</span>,{" "}
              <span className="text-code-string">"CSS3"</span>
              ],
              {"\n  "}
              <span className="text-foreground">backend</span>: [
              <span className="text-code-string">"Node.js"</span>,{" "}
              <span className="text-code-string">"Express.js"</span>,{" "}
              <span className="text-code-string">"REST APIs"</span>
              ],
              {"\n  "}
              <span className="text-foreground">databases</span>: [
              <span className="text-code-string">"MySQL"</span>,{" "}
              <span className="text-code-string">"MongoDB"</span>,{" "}
              <span className="text-code-string">"Redis"</span>
              ],
              {"\n  "}
              <span className="text-foreground">tools</span>: [
              <span className="text-code-string">"Git"</span>,{" "}
              <span className="text-code-string">"Postman"</span>,{" "}
              <span className="text-code-string">"VS Code"</span>
              ],
              {"\n  "}
              <span className="text-foreground">concepts</span>: [
              <span className="text-code-string">"OOP"</span>,{" "}
              <span className="text-code-string">"System Design"</span>,{" "}
              <span className="text-code-string">"DSA"</span>,{" "}
              <span className="text-code-string">"Scalable Systems"</span>
              ],
              {"\n  "}
              {"};"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};
