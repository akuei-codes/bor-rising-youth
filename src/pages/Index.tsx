import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InteractiveMap from "@/components/InteractiveMap";
import YouthShowcase from "@/components/YouthShowcase";
import CommunityFeatures from "@/components/CommunityFeatures";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Heart, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To create a digital bridge that connects the brilliant youth of Bor County, 
            showcasing their talents, facilitating mentorship, and opening doors to 
            opportunities that honor our heritage while embracing our future.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Connect</h3>
              <p className="text-sm text-muted-foreground">Build meaningful relationships across all Payams</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Empower</h3>
              <p className="text-sm text-muted-foreground">Unlock potential through mentorship and opportunities</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Global Reach</h3>
              <p className="text-sm text-muted-foreground">Connect local talent with global opportunities</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Cultural Pride</h3>
              <p className="text-sm text-muted-foreground">Celebrate and preserve our rich heritage</p>
            </div>
          </div>
        </div>
      </section>

      <InteractiveMap />
      <YouthShowcase />
      <CommunityFeatures />
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Join BorNet?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Be part of a movement that's showcasing the incredible talent and potential 
            of Bor County's youth to the world.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white px-8 py-6 text-lg">
              <Users className="h-5 w-5 mr-2" />
              Create Your Profile
            </Button>
            <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-white/10 px-8 py-6 text-lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">BorNet</span>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Empowering the youth of Bor County through digital connection and cultural pride.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Community</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">Youth Profiles</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Payam Map</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mentorship</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Opportunities</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">Job Board</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Scholarships</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Volunteering</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">About</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community Guidelines</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; 2024 BorNet. Made with ❤️ for the youth of Bor County, South Sudan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
