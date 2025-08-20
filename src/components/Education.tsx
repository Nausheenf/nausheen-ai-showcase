import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react";

export function Education() {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      specialization: "AI & Machine Learning",
      institution: "University/College Name",
      location: "Ballari, Karnataka",
      period: "2022 - Present",
      status: "Current",
      grade: "CGPA: 8.5/10",
      highlights: [
        "Specialized in AI & ML coursework",
        "Active participation in tech clubs",
        "Project-based learning approach",
        "Research in emerging technologies"
      ]
    },
    {
      degree: "Pre-University Course (PUC)",
      specialization: "Science Stream",
      institution: "Pre-University College",
      location: "Ballari, Karnataka",
      period: "2020 - 2022",
      status: "Completed",
      grade: "Percentage: 85%",
      highlights: [
        "Strong foundation in Mathematics & Physics",
        "Computer Science specialization",
        "Academic excellence recognition",
        "Leadership roles in student activities"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Education Journey</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey building a strong foundation in computer science 
            with specialized focus on AI and machine learning.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-accent/30"></div>
            
            <div className="space-y-12">
              {educationData.map((education, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                    <Card className="p-6 hover-lift border-none card-gradient">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                            <GraduationCap className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <Badge 
                              variant={education.status === "Current" ? "default" : "secondary"}
                              className="mb-2"
                            >
                              {education.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center text-accent">
                          <Star className="w-4 h-4 mr-1" />
                          <span className="text-sm font-medium">{education.grade}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {education.degree}
                      </h3>
                      <p className="text-accent font-medium mb-3">{education.specialization}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          {education.institution}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {education.location}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {education.period}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {education.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}