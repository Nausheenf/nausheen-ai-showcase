import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Target, Zap, BookOpen, Users } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Consistent high performance in AI & ML coursework with CGPA of 8.5/10",
      category: "Academic",
      year: "2024"
    },
    {
      icon: Award,
      title: "Python Internship Certification",
      description: "Successfully completed professional Python development internship program",
      category: "Professional",
      year: "2024"
    },
    {
      icon: Target,
      title: "Project Innovation Award",
      description: "Recognition for innovative approach in Stadium Management System development",
      category: "Technical",
      year: "2024"
    },
    {
      icon: Zap,
      title: "Leadership Excellence",
      description: "Demonstrated exceptional leadership skills in academic and project environments",
      category: "Leadership",
      year: "2023-2024"
    },
    {
      icon: BookOpen,
      title: "Research Contribution",
      description: "Active participation in AI/ML research initiatives and academic publications",
      category: "Research",
      year: "2024"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Mentoring junior students and contributing to tech community initiatives",
      category: "Community",
      year: "2023-2024"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Academic: "bg-blue-100 text-blue-800 border-blue-200",
      Professional: "bg-green-100 text-green-800 border-green-200",
      Technical: "bg-purple-100 text-purple-800 border-purple-200",
      Leadership: "bg-orange-100 text-orange-800 border-orange-200",
      Research: "bg-indigo-100 text-indigo-800 border-indigo-200",
      Community: "bg-pink-100 text-pink-800 border-pink-200"
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key milestones and recognitions that highlight my dedication to excellence 
            in academics, leadership, and technical innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift border-none card-gradient animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <achievement.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-right">
                  <Badge className={`text-xs ${getCategoryColor(achievement.category)}`}>
                    {achievement.category}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.year}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-primary mb-3">
                {achievement.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">8.5</div>
            <div className="text-sm text-muted-foreground">Current CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">1</div>
            <div className="text-sm text-muted-foreground">Internship</div>
          </div>
        </div>
      </div>
    </section>
  );
}