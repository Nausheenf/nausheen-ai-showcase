import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Building2 } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Enterprise-Grade AI",
      issuer: "IBM",
      issueDate: "2024",
      credentialType: "Professional Certificate",
      skills: ["Artificial Intelligence", "Machine Learning", "Enterprise Solutions", "AI Strategy"],
      description: "Comprehensive certification covering enterprise-level AI implementation, strategy, and best practices for business applications.",
      logo: "🏢",
      verified: true,
      link: "#"
    },
    {
      title: "Enterprise-Grade Data Science",
      issuer: "IBM",
      issueDate: "2024",
      credentialType: "Professional Certificate",
      skills: ["Data Science", "Analytics", "Big Data", "Statistical Analysis"],
      description: "Advanced data science certification focusing on enterprise-scale data analytics, machine learning models, and business intelligence.",
      logo: "📊",
      verified: true,
      link: "#"
    },
    {
      title: "Digital 101 Journey",
      issuer: "Future Skills",
      issueDate: "2024",
      credentialType: "Digital Literacy Certificate",
      skills: ["Digital Transformation", "Tech Fundamentals", "Future Skills", "Innovation"],
      description: "Foundation certification in digital technologies and future skills essential for modern technology professionals.",
      logo: "🚀",
      verified: true,
      link: "#"
    },
    {
      title: "Python Internship Certificate",
      issuer: "Professional Development Program",
      issueDate: "2024",
      credentialType: "Internship Completion",
      skills: ["Python Programming", "Software Development", "Project Management", "Team Collaboration"],
      description: "Official certification for successful completion of professional Python development internship program.",
      logo: "🐍",
      verified: true,
      link: "#"
    }
  ];

  const getCredentialTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "Professional Certificate": "bg-blue-100 text-blue-800 border-blue-200",
      "Digital Literacy Certificate": "bg-green-100 text-green-800 border-green-200",
      "Internship Completion": "bg-purple-100 text-purple-800 border-purple-200"
    };
    return colors[type] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section id="certifications" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Certifications & Credentials</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in AI, data science, 
            and software development from recognized industry leaders.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift border-none card-gradient animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{cert.logo}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">{cert.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Building2 className="w-4 h-4 mr-1" />
                      {cert.issuer}
                    </div>
                  </div>
                </div>
                {cert.verified && (
                  <div className="flex items-center text-accent">
                    <Award className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <Badge className={`${getCredentialTypeColor(cert.credentialType)}`}>
                  {cert.credentialType}
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {cert.issueDate}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3">Skills Validated:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover-lift"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Certification Summary */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="inline-block p-6 border-none card-gradient">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">4</div>
                <div className="text-sm text-muted-foreground">Total Certificates</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">3</div>
                <div className="text-sm text-muted-foreground">Industry Partners</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}