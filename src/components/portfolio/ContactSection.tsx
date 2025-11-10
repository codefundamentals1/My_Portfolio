import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "anishr888999@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9929xxxxxx" },
    { icon: MapPin, label: "Location", value: "Dharwad , Karnataka" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-primary/50">{"// "}</span>
            <span className="text-primary">Get</span>
            <span className="text-muted-foreground">.inTouch()</span>
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-card border-primary/20 p-4 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <info.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">{info.label}</p>
                      <p className="text-foreground font-mono">{info.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="code-block">
              <pre className="text-xs md:text-sm">
                <code>
                  <span className="text-code-keyword">function</span> <span className="text-code-function">sendMessage</span>() {"{"}
                  {"\n  "}
                  <span className="text-code-comment">// Fill the form →</span>
                  {"\n  "}
                  <span className="text-code-keyword">return</span> <span className="text-code-string">"Let's collaborate!"</span>;
                  {"\n}"}
                </code>
              </pre>
            </div>
          </div>

          <Card className="bg-card border-primary/20 p-6 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-sm text-muted-foreground mb-2 block">
                  <span className="text-primary/50">{"// "}</span>Your Name
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-primary/30 focus:border-primary font-mono"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="font-mono text-sm text-muted-foreground mb-2 block">
                  <span className="text-primary/50">{"// "}</span>Email Address
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-primary/30 focus:border-primary font-mono"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="font-mono text-sm text-muted-foreground mb-2 block">
                  <span className="text-primary/50">{"// "}</span>Message
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-primary/30 focus:border-primary font-mono min-h-32"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono border-glow"
              >
                <Mail className="mr-2" size={18} />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-primary/50"></span>
Built with ❤️ by Anish Raja             
          </p>
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-primary/50"></span>
          © Anish raja all right reserved
             
          </p>
        </div>
      </div>
    </section>
  );
};
