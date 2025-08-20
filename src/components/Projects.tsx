import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award, Gamepad2, Database } from "lucide-react";

export function Projects() {
  const projects = [
    {
      icon: Database,
      title: "Stadium Management System",
      description: "A comprehensive Python-based management system designed for efficient stadium operations, handling booking, scheduling, and resource management with an intuitive user interface.",
      technologies: ["Python", "Database Management", "GUI Development", "System Design"],
      features: [
        "Automated booking system",
        "Resource allocation tracking",
        "User-friendly interface",
        "Real-time data management"
      ],
      status: "Completed",
      certified: true,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      icon: Gamepad2,
      title: "FLAME Game",
      description: "An interactive Python game implementing the classic FLAME (Friends, Lovers, Affectionate, Marriage, Enemies) algorithm with modern gameplay mechanics and engaging user experience.",
      technologies: ["Python", "Game Development", "Algorithm Implementation", "UI/UX"],
      features: [
        "Interactive gameplay",
        "Modern UI design",
        "Algorithm visualization",
        "Score tracking system"
      ],
      status: "Completed",
      certified: false,
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills through practical projects that demonstrate 
            problem-solving abilities and programming expertise.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift border-none card-gradient animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                    <project.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                      {project.certified && (
                        <Badge variant="outline" className="border-accent text-accent">
                          <Award className="w-3 h-3 mr-1" />
                          Certified
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button variant="outline" size="sm" className="hover-lift">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}