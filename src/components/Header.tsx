import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Globe, Users, MapPin, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

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
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/profiles" className="text-foreground hover:text-primary transition-colors">
              Profiles
            </Link>
            <Link to="/map" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Map
            </Link>
            <Link to="/projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/opportunities" className="text-foreground hover:text-primary transition-colors">
              Opportunities
            </Link>
            <Link to="/admin" className="text-foreground hover:text-primary transition-colors">
              Admin
            </Link>
          </nav>

          {/* Language Toggle & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Globe className="h-4 w-4 mr-1" />
              EN
            </Button>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage 
                        src={user.user_metadata?.avatar_url || user.user_metadata?.picture} 
                        alt={user.user_metadata?.full_name || user.email || 'User'} 
                      />
                      <AvatarFallback>
                        {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem className="flex-col items-start">
                    <div className="font-medium">{user.user_metadata?.full_name || 'User'}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button size="sm" className="bg-gradient-hero hover:shadow-warm transition-all" asChild>
                  <Link to="/join">Join Community</Link>
                </Button>
              </>
            )}
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
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/profiles" className="text-foreground hover:text-primary transition-colors">
                Profiles
              </Link>
              <Link to="/map" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Map
              </Link>
              <Link to="/projects" className="text-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/opportunities" className="text-foreground hover:text-primary transition-colors">
                Opportunities
              </Link>
              <Link to="/admin" className="text-foreground hover:text-primary transition-colors">
                Admin
              </Link>
            </nav>
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              {user ? (
                <div className="flex items-center space-x-3 p-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage 
                      src={user.user_metadata?.avatar_url || user.user_metadata?.picture} 
                      alt={user.user_metadata?.full_name || user.email || 'User'} 
                    />
                    <AvatarFallback>
                      {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{user.user_metadata?.full_name || 'User'}</div>
                    <div className="text-xs text-muted-foreground">{user.email}</div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleSignOut}>
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/signin">Sign In</Link>
                  </Button>
                  <Button size="sm" className="w-full bg-gradient-hero hover:shadow-warm transition-all" asChild>
                    <Link to="/join">Join Community</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;