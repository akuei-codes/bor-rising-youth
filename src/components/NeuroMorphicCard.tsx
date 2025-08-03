import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NeuroMorphicCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  interactive?: boolean;
  glowEffect?: boolean;
  morphOnHover?: boolean;
}

export const NeuroMorphicCard: React.FC<NeuroMorphicCardProps> = ({
  children,
  className = '',
  intensity = 'medium',
  interactive = true,
  glowEffect = false,
  morphOnHover = true
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const intensityConfig = {
    subtle: {
      shadowLight: '5px 5px 10px rgba(0, 0, 0, 0.1)',
      shadowDark: '-5px -5px 10px rgba(255, 255, 255, 0.1)',
      hoverTransform: 'translateY(-2px)',
      tiltIntensity: 5
    },
    medium: {
      shadowLight: '10px 10px 20px rgba(0, 0, 0, 0.15)',
      shadowDark: '-10px -10px 20px rgba(255, 255, 255, 0.15)',
      hoverTransform: 'translateY(-5px)',
      tiltIntensity: 10
    },
    strong: {
      shadowLight: '15px 15px 30px rgba(0, 0, 0, 0.2)',
      shadowDark: '-15px -15px 30px rgba(255, 255, 255, 0.2)',
      hoverTransform: 'translateY(-8px)',
      tiltIntensity: 15
    }
  };

  const config = intensityConfig[intensity];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || !interactive) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      setMousePosition({ x: mouseX, y: mouseY });
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [interactive]);

  const getTiltTransform = () => {
    if (!interactive || !isHovered) return '';
    
    const { x, y } = mousePosition;
    const tiltX = (y / window.innerHeight) * config.tiltIntensity;
    const tiltY = -(x / window.innerWidth) * config.tiltIntensity;
    
    return `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const getGlowStyle = () => {
    if (!glowEffect || !isHovered) return {};
    
    return {
      filter: 'drop-shadow(0 0 20px hsla(var(--quantum-primary), 0.4))',
    };
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative transition-all duration-300 ease-out',
        'bg-gradient-to-br from-background/80 to-muted/50',
        'backdrop-blur-xl border border-border/50',
        'rounded-2xl p-6',
        morphOnHover && 'hover:scale-[1.02]',
        interactive && 'cursor-pointer',
        className
      )}
      style={{
        boxShadow: `${config.shadowLight}, ${config.shadowDark}`,
        transform: `${getTiltTransform()} ${isHovered ? config.hoverTransform : ''}`,
        ...getGlowStyle()
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Holographic border effect */}
      <div 
        className={cn(
          'absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300',
          'bg-gradient-to-r from-quantum-primary via-quantum-secondary to-quantum-tertiary',
          'p-[1px]',
          isHovered && 'opacity-30'
        )}
      >
        <div className="h-full w-full rounded-2xl bg-background" />
      </div>
      
      {/* Data stream effect */}
      {isHovered && (
        <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden rounded-t-2xl">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-quantum-primary to-transparent animate-slide-right" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Ambient glow overlay */}
      {glowEffect && isHovered && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-radial from-quantum-primary/10 via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  );
};

// Additional CSS for slide animation
const slideRightKeyframes = `
@keyframes slide-right {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-slide-right {
  animation: slide-right 1.5s ease-in-out infinite;
}

.bg-gradient-radial {
  background: radial-gradient(circle at center, var(--tw-gradient-stops));
}
`;