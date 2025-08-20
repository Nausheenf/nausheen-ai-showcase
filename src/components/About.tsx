import { Card } from "@/components/ui/card";
import { Brain, Code, Lightbulb, Target } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & ML Passion",
      description: "Dedicated to exploring the frontiers of artificial intelligence and machine learning"
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Strong foundation in programming languages and modern development practices"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Always seeking creative solutions to complex problems through technology"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Committed to continuous learning and making meaningful contributions to tech"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm M Nausheen Fathima, a passionate AI & ML student currently pursuing my degree 
              with a focus on transforming innovative ideas into intelligent technological solutions. 
              My journey in artificial intelligence and machine learning is driven by curiosity and 
              a desire to contribute meaningfully to the tech industry.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With a strong foundation in programming and data science, I enjoy working on projects 
              that challenge conventional thinking and push the boundaries of what's possible with 
              modern technology. I believe in the power of continuous learning and collaboration 
              to drive innovation.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to leverage AI and ML technologies to create solutions that make a positive 
              impact on society while continuously expanding my expertise in this rapidly evolving field.
            </p>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover-lift border-none card-gradient">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}