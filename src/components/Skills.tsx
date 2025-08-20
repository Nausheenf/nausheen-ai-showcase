import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Users, Presentation } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Technical Skills",
      color: "accent",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 80 },
        { name: "Machine Learning", level: 85 },
        { name: "AI Development", level: 82 },
        { name: "Data Science", level: 88 },
        { name: "Database Management", level: 75 }
      ]
    },
    {
      icon: Brain,
      title: "AI & ML Specializations",
      color: "primary",
      skills: [
        { name: "Neural Networks", level: 80 },
        { name: "Deep Learning", level: 78 },
        { name: "Data Analysis", level: 90 },
        { name: "Algorithm Design", level: 85 },
        { name: "Statistical Modeling", level: 82 },
        { name: "Computer Vision", level: 75 }
      ]
    },
    {
      icon: Users,
      title: "Leadership & Soft Skills",
      color: "accent",
      skills: [
        { name: "Team Leadership", level: 88 },
        { name: "Project Management", level: 85 },
        { name: "Problem Solving", level: 92 },
        { name: "Communication", level: 90 },
        { name: "Innovation", level: 87 },
        { name: "Adaptability", level: 85 }
      ]
    },
    {
      icon: Presentation,
      title: "Professional Skills",
      color: "primary",
      skills: [
        { name: "Public Speaking", level: 85 },
        { name: "Technical Writing", level: 80 },
        { name: "Research", level: 88 },
        { name: "Critical Thinking", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Mentoring", level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive blend of technical expertise and soft skills developed through 
            academic pursuits and hands-on project experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift border-none card-gradient animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                  <category.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}