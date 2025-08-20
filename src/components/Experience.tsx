import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Calendar, Award, ExternalLink } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical experience gained through internships and projects that have shaped 
            my understanding of real-world software development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hover-lift border-none card-gradient animate-slide-up">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex items-start mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4 mt-1">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Python Development Internship</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Software Development Internship Program</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="bg-accent/20 text-accent border-accent/30">
                      Python Development
                    </Badge>
                    <Badge variant="outline" className="border-accent text-accent">
                      <Award className="w-3 h-3 mr-1" />
                      Certified
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-primary mb-3">Key Responsibilities & Achievements:</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3 mt-2"></div>
                  <span>Developed Python applications with focus on clean, maintainable code</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3 mt-2"></div>
                  <span>Collaborated with development teams on software architecture and design</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3 mt-2"></div>
                  <span>Implemented best practices in version control and code documentation</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3 mt-2"></div>
                  <span>Gained practical experience in agile development methodologies</span>
                </li>
                <li className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3 mt-2"></div>
                  <span>Successfully completed internship with official certification</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-primary mb-3">Skills Developed:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python Programming", 
                  "Software Architecture", 
                  "Code Review", 
                  "Team Collaboration", 
                  "Project Management",
                  "Technical Documentation"
                ].map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-border">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}