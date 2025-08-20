import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent/20 animate-float"></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 rounded-full bg-accent-light/30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 rounded-full bg-accent/25 animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            M Nausheen 
            <span className="block text-accent">Fathima</span>
          </h1>
          <div className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-4">
            AI & ML Student
          </div>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about transforming ideas into intelligent solutions through 
            artificial intelligence and machine learning
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift group px-8 py-3 text-lg font-semibold"
            onClick={() => window.open("https://drive.google.com/file/d/1F7S_vCAkQJ_3JorCOFf08JeONLYW39YM/view?usp=drivesdk", '_blank')}
          >
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Download Resume
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover-lift group px-8 py-3 text-lg"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Let's Connect
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}