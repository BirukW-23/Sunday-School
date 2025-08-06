import { InteractiveHeader } from "@/components/InteractiveHeader";
import { RepresentativeCard } from "@/components/RepresentativeCard";
import { FloatingElements } from "@/components/FloatingElements";
import { StatsCounter } from "@/components/StatsCounter";
import { representatives } from "@/data/representatives";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating Background Elements */}
      <FloatingElements />
      
      {/* Hero Section */}
      <InteractiveHeader />
      
      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gold/20 text-gold border-gold/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              Numbers That Tell Our Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our social media representatives deliver measurable results across all platforms
            </p>
          </div>
          <StatsCounter />
        </div>
      </section>
      
      {/* Representatives Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-navy-light/50 text-gold border-gold/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Meet the Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Social Media
              <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent"> Representatives</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each member of our team brings unique skills and perspectives to create compelling digital experiences that resonate with our audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {representatives.map((representative, index) => (
              <RepresentativeCard 
                key={representative.id} 
                representative={representative} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="relative z-10 py-20 px-6 bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to <span className="text-gold">Collaborate</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect with our social media team to discuss partnerships, collaborations, or learn more about our services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-6 shadow-elevated border border-gold/20 hover:shadow-glow transition-all duration-300">
              <Mail className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground">social@company.com</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-elevated border border-gold/20 hover:shadow-glow transition-all duration-300">
              <Phone className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-elevated border border-gold/20 hover:shadow-glow transition-all duration-300">
              <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">123 Digital Ave, Creative City</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-gradient-primary/90 text-navy font-bold px-12 py-4 text-lg shadow-gold hover:shadow-glow transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-gold/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Social Media Representatives Showcase. Crafted with passion for digital excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
