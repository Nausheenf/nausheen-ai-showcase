import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  MessageSquare,
  Send,
  User,
  FileText,
  Code2,
  Trophy
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9902378914",
      link: "tel:+919902378914",
      description: "Available for calls"
    },
    {
      icon: Mail,
      label: "Email",
      value: "nausheenf260@gmail.com",
      link: "mailto:nausheenf260@gmail.com",
      description: "Primary contact"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ballari, Karnataka",
      link: "#",
      description: "Based in India"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nausheen-fathima-5a529b2aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "text-blue-600 hover:text-blue-700",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Nausheenf",
      color: "text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white",
      gradient: "from-gray-800 to-gray-900"
    },
    {
      icon: Code2,
      label: "LeetCode",
      link: "https://leetcode.com/u/Nausheen_fathima/",
      color: "text-orange-600 hover:text-orange-700",
      gradient: "from-orange-600 to-orange-700"
    },
    {
      icon: Trophy,
      label: "HackerRank",
      link: "https://www.hackerrank.com/profile/nausheenf260",
      color: "text-emerald-600 hover:text-emerald-700",
      gradient: "from-emerald-600 to-emerald-700"
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:nausheenf260@gmail.com",
      color: "text-red-600 hover:text-red-700",
      gradient: "from-red-600 to-red-700"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      link: "https://wa.me/919902378914",
      color: "text-green-600 hover:text-green-700",
      gradient: "from-green-600 to-green-700"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Let's Connect</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborations, or just want to say hello? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary mb-8">Get In Touch</h3>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover-lift border-none card-gradient">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-1">{info.label}</h4>
                      <a 
                        href={info.link}
                        className="text-accent hover:text-accent/80 transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-primary mb-6">Connect & Explore</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="hover-lift group relative overflow-hidden border-none bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <social.icon className={`w-4 h-4 mr-2 ${social.color} group-hover:scale-110 transition-transform duration-200`} />
                    <span className="relative z-10 font-medium">{social.label}</span>
                  </Button>
                ))}
              </div>
              
              {/* Creative showcase */}
              <div className="mt-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
                <p className="text-sm text-muted-foreground text-center">
                  <Trophy className="inline w-4 h-4 mr-1 text-accent" />
                  Follow my coding journey across platforms
                </p>
              </div>
            </div>
            
            {/* Availability Status */}
            <div className="mt-8">
              <Card className="p-4 border-none bg-accent/10">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <p className="font-medium text-primary">Available for opportunities</p>
                    <p className="text-sm text-muted-foreground">Open to internships, projects, and collaborations</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 border-none card-gradient">
              <h3 className="text-2xl font-semibold text-primary mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Web3Forms Access Key */}
                <input type="hidden" name="access_key" value="2353ebac-227f-4a36-928e-a348c09c4bda" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="hover-lift"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="hover-lift"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="hover-lift"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project or opportunity..."
                    rows={5}
                    required
                    className="hover-lift resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover-lift group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}