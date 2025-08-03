import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, Star } from "lucide-react";
import { ParticleSystem } from "./ParticleSystem";
import { NeuroMorphicCard } from "./NeuroMorphicCard";
import { QuantumLoader } from "./QuantumLoader";
import heroImage from "@/assets/hero-bor-rising.jpg";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentParticleTheme, setCurrentParticleTheme] = useState<'neural' | 'quantum' | 'holographic'>('neural');

  useEffect(() => {
    setIsLoaded(true);
    
    // Cycle through particle themes
    const themeInterval = setInterval(() => {
      setCurrentParticleTheme(prev => {
        const themes: Array<'neural' | 'quantum' | 'holographic'> = ['neural', 'quantum', 'holographic'];
        const currentIndex = themes.indexOf(prev);
        return themes[(currentIndex + 1) % themes.length];
      });
    }, 8000);

    return () => clearInterval(themeInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-container">
      {/* Multi-layered Background System */}
      <div className="absolute inset-0 z-0">
        {/* Base hero image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(1.1) saturate(1.2)',
          }}
        />
        
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-background/90 animate-pulse" 
             style={{ animationDuration: '4s' }}></div>
        
        {/* Neural network particle system */}
        <ParticleSystem 
          particleCount={80} 
          theme={currentParticleTheme}
          interactive={true}
          className="z-10 opacity-70"
        />
        
        {/* Holographic scanning lines */}
        <div className="absolute inset-0 z-20 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                animation: `data-stream ${3 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Ultra-Advanced Content Layer */}
      <div className="relative z-30 text-center space-y-8 px-4 max-w-6xl mx-auto">
        {/* Floating status badge with neural animation */}
        <div className="flex justify-center">
          <NeuroMorphicCard
            intensity="subtle"
            glowEffect={true}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 border-primary/30"
          >
            <div className="relative">
              <QuantumLoader size="sm" variant="pulse" />
              <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></span>
            </div>
            <span className="holographic-text text-sm font-medium">
              <Star className="h-4 w-4 inline mr-2" />
              Neural Network: {Math.floor(Math.random() * 1000 + 5000)}+ Youth Connected
            </span>
          </NeuroMorphicCard>
        </div>

        {/* Revolutionary Main Heading with 3D Effects */}
        <div className="space-y-6 floating-element">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-primary-foreground leading-tight card-3d">
              <span className="holographic-text glitch-hover neural-glow">
                BorNet
              </span>
            </h1>
            
            {/* Dynamic subtitle with typewriter effect */}
            <div className="mt-4 h-8 md:h-12">
              <p className="text-xl md:text-3xl text-primary-foreground/90 font-light tracking-wide">
                <span className="morphing-border px-4 py-2 inline-block">
                  {isLoaded ? 'Empowering Digital Futures' : ''}
                </span>
              </p>
            </div>
            
            {/* Floating descriptors */}
            <div className="absolute -left-20 -top-10 hidden lg:block">
              <NeuroMorphicCard intensity="subtle" className="px-3 py-1 text-xs text-primary">
                Neural
              </NeuroMorphicCard>
            </div>
            <div className="absolute -right-16 top-16 hidden lg:block">
              <NeuroMorphicCard intensity="subtle" className="px-3 py-1 text-xs text-secondary">
                Quantum
              </NeuroMorphicCard>
            </div>
          </div>
        </div>

        {/* Revolutionary CTA Buttons with Neural Enhancement */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center magnetic-element">
          <button className="neural-button px-10 py-4 text-lg font-bold text-white rounded-xl relative overflow-hidden group">
            <span className="relative z-10 flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Initialize Connection</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300"></div>
          </button>
          
          <NeuroMorphicCard 
            intensity="medium" 
            glowEffect={true}
            className="px-8 py-4 text-lg font-semibold text-primary-foreground border-primary/40 hover:border-primary/80 transition-all duration-500"
          >
            <span className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Explore Network</span>
              <div className="w-3 h-3 border border-current rounded-full animate-spin"></div>
            </span>
          </NeuroMorphicCard>
        </div>

        {/* Real-time Neural Network Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
          {[
            { value: '1,247+', label: 'Neural Nodes', color: 'primary', icon: '🧠' },
            { value: '12', label: 'Network Clusters', color: 'secondary', icon: '🌐' },
            { value: '89', label: 'Success Algorithms', color: 'accent', icon: '⚡' },
            { value: '156', label: 'Quantum Opportunities', color: 'primary', icon: '🚀' }
          ].map((stat, index) => (
            <NeuroMorphicCard 
              key={index}
              intensity="medium"
              glowEffect={true}
              className="text-center space-y-3 p-4 data-stream-bg"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className={`text-2xl md:text-4xl font-black holographic-text`}>
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80 font-medium">
                {stat.label}
              </div>
              <div className="w-full h-1 bg-background/20 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-primary to-primary/50 rounded-full animate-pulse`}
                  style={{ width: `${60 + Math.random() * 40}%` }}
                ></div>
              </div>
            </NeuroMorphicCard>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;