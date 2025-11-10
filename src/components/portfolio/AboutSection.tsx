import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies and frameworks",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively in agile environments",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto w-[80%]">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-primary/50">{"// "}</span>
            <span className="text-primary">About</span>
            <span className="text-muted-foreground">.me</span>
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="code-block mb-6">
              <pre className="text-sm leading-relaxed">
                <code>
                  <span className="text-code-keyword">class</span> <span className="text-code-function">Developer</span> {"{\n"}
                  {"  "}
                  <span className="text-code-comment">// Passionate about technology</span>
                  {"\n  "}
                  <span className="text-code-keyword">constructor</span>() {"{"}
                  {"\n    "}
                  <span className="text-code-keyword">this</span>.name = <span className="text-code-string">"Anish Raja"</span>;
                  {"\n    "}
                  <span className="text-code-keyword">this</span>.role = <span className="text-code-string">"Full-Stack Dev"</span>;
                  {"\n    "}
                  <span className="text-code-keyword">this</span>.passion = <span className="text-code-string">"Building Solutions"</span>;
                  {"\n  }"}
                  {"\n}"}
                </code>
              </pre>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
              With experience in modern web technologies, I focus on building responsive, user-friendly applications 
              that make a difference.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid gap-4 animate-fade-in">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-card border-primary/20 p-6 hover:border-primary/40 transition-all hover:border-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-lg mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
