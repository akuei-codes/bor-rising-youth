import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-bor-rising.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Bor County Youth Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm text-primary">
            <Star className="h-4 w-4" />
            <span>Celebrating Bor County Youth</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              <span className="bg-gradient-sunset bg-clip-text text-transparent">
                Bor Rising
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Empowering the youth of Bor County through connection, opportunity, and cultural pride
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Join a digital community that showcases the talents, stories, and aspirations of 
            Bor County's youth, both at home and in the diaspora.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-gradient-hero hover:shadow-cultural transition-all text-lg px-8 py-6">
              <Users className="h-5 w-5 mr-2" />
              Join Our Community
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <MapPin className="h-5 w-5 mr-2" />
              Explore Profiles
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">500+</div>
              <div className="text-sm text-primary-foreground/70">Youth Profiles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">5</div>
              <div className="text-sm text-primary-foreground/70">Payams Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">50+</div>
              <div className="text-sm text-primary-foreground/70">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">20+</div>
              <div className="text-sm text-primary-foreground/70">Opportunities Posted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;