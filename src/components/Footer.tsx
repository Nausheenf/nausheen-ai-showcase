import { Button } from "@/components/ui/button";
import { Heart, ArrowUp, Linkedin, Github, Mail, MessageSquare, Code2, Trophy } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nausheen-fathima-5a529b2aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub", 
      link: "https://github.com/Nausheenf",
      color: "hover:text-gray-300"
    },
    {
      icon: Code2,
      label: "LeetCode",
      link: "https://leetcode.com/u/Nausheen_fathima/",
      color: "hover:text-orange-400"
    },
    {
      icon: Trophy,
      label: "HackerRank",
      link: "https://www.hackerrank.com/profile/nausheenf260",
      color: "hover:text-emerald-400"
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:nausheenf260@gmail.com",
      color: "hover:text-red-400"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      link: "https://wa.me/919902378914",
      color: "hover:text-green-400"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent/10 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-accent/5 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* About Section */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">M Nausheen Fathima</h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                AI & ML Student passionate about creating intelligent solutions 
                that make a meaningful impact. Always excited to connect with 
                fellow tech enthusiasts and explore new opportunities.
              </p>
              <div className="flex items-center text-accent">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">Available for opportunities</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-primary-foreground/80 hover:text-accent transition-colors duration-200 py-1"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-lg font-semibold mb-6">Let's Connect</h4>
              <div className="space-y-3 mb-6">
                <p className="text-primary-foreground/80">
                  <span className="font-medium">Email:</span><br />
                  <a href="mailto:nausheenf260@gmail.com" className="text-accent hover:text-accent/80 transition-colors">
                    nausheenf260@gmail.com
                  </a>
                </p>
                <p className="text-primary-foreground/80">
                  <span className="font-medium">Phone:</span><br />
                  <a href="tel:+919902378914" className="text-accent hover:text-accent/80 transition-colors">
                    +91 9902378914
                  </a>
                </p>
                <p className="text-primary-foreground/80">
                  <span className="font-medium">Location:</span><br />
                  Ballari, Karnataka, India
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={`hover-lift rounded-full w-12 h-12 p-0 text-primary-foreground/80 ${social.color} group relative overflow-hidden`}
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    <div className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                    <social.icon className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform duration-200" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                ))}
              </div>
              
              {/* Creative badge */}
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent text-xs">
                <Code2 className="w-3 h-3 mr-1" />
                Coding across platforms
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <p className="text-primary-foreground/60 text-sm">
                  © 2024 M Nausheen Fathima. Made with{" "}
                  <Heart className="inline h-4 w-4 text-red-400 mx-1" />
                  and cutting-edge tech.
                </p>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover-lift rounded-full text-primary-foreground/80 hover:text-accent group"
              >
                <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}