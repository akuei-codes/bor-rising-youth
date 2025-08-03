import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InteractiveMap from "@/components/InteractiveMap";
import YouthShowcase from "@/components/YouthShowcase";
import CommunityFeatures from "@/components/CommunityFeatures";
import { NeuroMorphicCard } from "@/components/NeuroMorphicCard";
import { QuantumLoader } from "@/components/QuantumLoader";
import { ParticleSystem } from "@/components/ParticleSystem";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Heart, Users, Zap, Brain, Rocket, Star, Sparkles, Network, Shield, Target, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <HeroSection />
      
      {/* Floating Mission Cards with Advanced Animations */}
      <section className="relative py-32 bg-gradient-radial from-primary/5 via-background to-secondary/10">
        <ParticleSystem particleCount={40} theme="holographic" className="opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 mb-20">
            <Badge variant="outline" className="px-6 py-3 text-lg holographic-border">
              <Brain className="h-5 w-5 mr-2" />
              Neural Mission Protocol
            </Badge>
            
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-text bg-clip-text text-transparent">
              Our Digital DNA
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Quantum-powered connections bridging<br />
              <span className="holographic-text font-bold">heritage & innovation</span>
            </p>
          </div>
          
          {/* Hexagonal Grid Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Top Row */}
            <div className="flex justify-center gap-8 mb-8">
              <NeuroMorphicCard 
                intensity="strong" 
                glowEffect={true}
                className="w-80 h-80 p-8 hexagon-shape relative group hover:scale-105 transition-all duration-700"
              >
                <div className="text-center space-y-6 h-full flex flex-col justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto pulse-glow">
                      <Users className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <QuantumLoader size="lg" className="absolute -top-2 -right-2" />
                  </div>
                  <h3 className="text-2xl font-bold holographic-text">Neural Connect</h3>
                  <p className="text-muted-foreground">Quantum entanglement of minds across all Payams</p>
                  <div className="flex justify-center">
                    <Badge className="bg-primary/20 text-primary">1,247+ Nodes</Badge>
                  </div>
                </div>
              </NeuroMorphicCard>
              
              <NeuroMorphicCard 
                intensity="strong" 
                glowEffect={true}
                className="w-80 h-80 p-8 hexagon-shape relative group hover:scale-105 transition-all duration-700"
              >
                <div className="text-center space-y-6 h-full flex flex-col justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-success rounded-full flex items-center justify-center mx-auto pulse-glow">
                      <Zap className="h-10 w-10 text-success-foreground" />
                    </div>
                    <QuantumLoader size="lg" variant="spin" className="absolute -top-2 -right-2" />
                  </div>
                  <h3 className="text-2xl font-bold holographic-text">Power Core</h3>
                  <p className="text-muted-foreground">Unlock infinite potential through AI mentorship</p>
                  <div className="flex justify-center">
                    <Badge className="bg-success/20 text-success">89% Success Rate</Badge>
                  </div>
                </div>
              </NeuroMorphicCard>
            </div>
            
            {/* Middle Row */}
            <div className="flex justify-center gap-8 mb-8">
              <NeuroMorphicCard 
                intensity="strong" 
                glowEffect={true}
                className="w-80 h-80 p-8 hexagon-shape relative group hover:scale-105 transition-all duration-700"
              >
                <div className="text-center space-y-6 h-full flex flex-col justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto pulse-glow">
                      <Globe className="h-10 w-10 text-accent-foreground" />
                    </div>
                    <QuantumLoader size="lg" variant="pulse" className="absolute -top-2 -right-2" />
                  </div>
                  <h3 className="text-2xl font-bold holographic-text">Global Matrix</h3>
                  <p className="text-muted-foreground">Interdimensional gateway to worldwide opportunities</p>
                  <div className="flex justify-center">
                    <Badge className="bg-accent/20 text-accent">156 Portals</Badge>
                  </div>
                </div>
              </NeuroMorphicCard>
              
              <NeuroMorphicCard 
                intensity="strong" 
                glowEffect={true}
                className="w-80 h-80 p-8 hexagon-shape relative group hover:scale-105 transition-all duration-700"
              >
                <div className="text-center space-y-6 h-full flex flex-col justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto pulse-glow">
                      <Heart className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <QuantumLoader size="lg" variant="morphing" className="absolute -top-2 -right-2" />
                  </div>
                  <h3 className="text-2xl font-bold holographic-text">Cultural Nexus</h3>
                  <p className="text-muted-foreground">Digital preservation of our sacred heritage</p>
                  <div className="flex justify-center">
                    <Badge className="bg-primary/20 text-primary">∞ Stories</Badge>
                  </div>
                </div>
              </NeuroMorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Content Sections with Floating Elements */}
      <section className="relative">
        <div className="floating-element" style={{ animationDelay: '0s' }}>
          <InteractiveMap />
        </div>
        
        <div className="floating-element" style={{ animationDelay: '0.5s' }}>
          <YouthShowcase />
        </div>
        
        <div className="floating-element" style={{ animationDelay: '1s' }}>
          <CommunityFeatures />
        </div>
      </section>
      
      {/* Revolutionary CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <ParticleSystem particleCount={60} theme="quantum" className="opacity-40" />
        
        <div className="absolute inset-0 bg-gradient-conic from-primary/20 via-secondary/20 to-accent/20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background"></div>
        
        <div className="container mx-auto px-4 text-center space-y-12 relative z-10">
          <div className="space-y-8">
            <Badge variant="outline" className="px-8 py-4 text-xl holographic-border">
              <Rocket className="h-6 w-6 mr-3" />
              Activation Protocol Initiated
            </Badge>
            
            <h2 className="text-6xl md:text-8xl font-black bg-gradient-text bg-clip-text text-transparent">
              Join the Network
            </h2>
            
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light">
              Become a <span className="holographic-text font-bold">digital pioneer</span> in Bor County's
              <br />technological renaissance
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <button className="neural-button px-16 py-8 text-2xl font-bold text-white rounded-2xl relative overflow-hidden group">
              <span className="relative z-10 flex items-center space-x-4">
                <Users className="h-8 w-8" />
                <span>Initialize Profile</span>
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 group-hover:scale-110 transition-transform duration-500"></div>
            </button>
            
            <NeuroMorphicCard 
              intensity="strong" 
              glowEffect={true}
              className="px-12 py-8 text-2xl font-bold text-primary-foreground border-primary/60 hover:border-primary transition-all duration-500"
            >
              <span className="flex items-center space-x-4">
                <Network className="h-8 w-8" />
                <span>Explore Matrix</span>
                <QuantumLoader size="sm" />
              </span>
            </NeuroMorphicCard>
          </div>
          
          {/* Floating Achievement Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
            {[
              { icon: Brain, label: "Neural Efficiency", value: "99.7%", color: "primary" },
              { icon: Shield, label: "Security Matrix", value: "Quantum", color: "success" },
              { icon: Target, label: "Precision Rate", value: "100%", color: "accent" },
              { icon: Lightbulb, label: "Innovation Index", value: "∞", color: "primary" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center space-y-4 p-6 card-3d"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <NeuroMorphicCard 
                  intensity="medium"
                  glowEffect={true}
                  className="text-center space-y-4 p-6"
                >
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-${stat.color} rounded-full flex items-center justify-center mx-auto pulse-glow`}>
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <QuantumLoader size="sm" className="absolute -top-1 -right-1" />
                </div>
                <div className="text-3xl font-black holographic-text">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
                </NeuroMorphicCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Futuristic Footer */}
      <footer className="relative bg-gradient-to-b from-secondary/50 to-secondary py-20">
        <ParticleSystem particleCount={30} theme="neural" className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <NeuroMorphicCard intensity="subtle" className="inline-flex items-center space-x-3 px-4 py-2">
                <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Network className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="font-black text-2xl holographic-text">BorNet</span>
              </NeuroMorphicCard>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Quantum-powered digital evolution for Bor County's next generation.
              </p>
              <div className="flex space-x-2">
                <Badge variant="outline" className="holographic-border">Neural</Badge>
                <Badge variant="outline" className="holographic-border">Quantum</Badge>
                <Badge variant="outline" className="holographic-border">Digital</Badge>
              </div>
            </div>
            
            {[
              {
                title: "Neural Network",
                links: ["Youth Profiles", "Payam Matrix", "Success Algorithms", "AI Mentorship"]
              },
              {
                title: "Quantum Opportunities", 
                links: ["Job Portals", "Scholarships", "Project Hub", "Digital Volunteering"]
              },
              {
                title: "System Core",
                links: ["Mission Protocol", "Community Guidelines", "Privacy Matrix", "Contact Portal"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-bold mb-6 text-lg holographic-text">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors hover:holographic-text">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-16 pt-8 text-center">
            <p className="text-secondary-foreground/60">
              &copy; 2024 <span className="holographic-text">BorNet</span>. Engineered with ❤️ and ⚡ for Bor County's digital future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
