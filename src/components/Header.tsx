import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Users, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center shadow-warm">
              <Users className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">Bor Rising</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Youth Community</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/profiles" className="text-foreground hover:text-primary transition-colors">
              Profiles
            </a>
            <a href="/map" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Map
            </a>
            <a href="/community" className="text-foreground hover:text-primary transition-colors">
              Community
            </a>
            <a href="/opportunities" className="text-foreground hover:text-primary transition-colors">
              Opportunities
            </a>
          </nav>

          {/* Language Toggle & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Globe className="h-4 w-4 mr-1" />
              EN
            </Button>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-hero hover:shadow-warm transition-all">
              Join Community
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-2 pt-4 pb-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/profiles" className="text-foreground hover:text-primary transition-colors">
                Profiles
              </a>
              <a href="/map" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Map
              </a>
              <a href="/community" className="text-foreground hover:text-primary transition-colors">
                Community
              </a>
              <a href="/opportunities" className="text-foreground hover:text-primary transition-colors">
                Opportunities
              </a>
            </nav>
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full bg-gradient-hero hover:shadow-warm transition-all">
                Join Community
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;