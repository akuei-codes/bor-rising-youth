import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  life: number;
  maxLife: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
  interactive?: boolean;
  theme?: 'neural' | 'quantum' | 'holographic';
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  particleCount = 100,
  className = '',
  interactive = true,
  theme = 'neural'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrame = useRef<number>();
  const mouse = useRef({ x: 0, y: 0 });

  const themeConfig = {
    neural: {
      colors: [15, 210, 125, 280], // Hue values
      connectionDistance: 120,
      particleSpeed: 0.5,
      glowIntensity: 0.8
    },
    quantum: {
      colors: [300, 200, 120, 60],
      connectionDistance: 150,
      particleSpeed: 0.3,
      glowIntensity: 1.2
    },
    holographic: {
      colors: [180, 240, 300, 360],
      connectionDistance: 100,
      particleSpeed: 0.7,
      glowIntensity: 0.6
    }
  };

  const config = themeConfig[theme];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * config.particleSpeed,
          vy: (Math.random() - 0.5) * config.particleSpeed,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          hue: config.colors[Math.floor(Math.random() * config.colors.length)],
          life: Math.random() * 200 + 50,
          maxLife: 200
        });
      }
    };

    const updateParticles = () => {
      particles.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Interactive mouse attraction
        if (interactive) {
          const dx = mouse.current.x - particle.x;
          const dy = mouse.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const force = (100 - distance) / 100;
            particle.vx += dx * force * 0.001;
            particle.vy += dy * force * 0.001;
          }
        }

        // Boundary reflection with energy damping
        if (particle.x < 0 || particle.x > canvas.offsetWidth) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.offsetWidth, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.offsetHeight) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.offsetHeight, particle.y));
        }

        // Life cycle
        particle.life -= 1;
        if (particle.life <= 0) {
          // Respawn particle
          particle.x = Math.random() * canvas.offsetWidth;
          particle.y = Math.random() * canvas.offsetHeight;
          particle.vx = (Math.random() - 0.5) * config.particleSpeed;
          particle.vy = (Math.random() - 0.5) * config.particleSpeed;
          particle.life = particle.maxLife;
          particle.hue = config.colors[Math.floor(Math.random() * config.colors.length)];
        }

        // Slowly change hue for holographic effect
        particle.hue += 0.5;
      });
    };

    const drawConnections = () => {
      particles.current.forEach((particle, i) => {
        particles.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.connectionDistance) {
            const opacity = (1 - distance / config.connectionDistance) * 0.3;
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 60%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${otherParticle.hue}, 100%, 60%, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
    };

    const drawParticles = () => {
      particles.current.forEach((particle) => {
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        
        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${particle.opacity * config.glowIntensity})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 50%, ${particle.opacity * 0.6})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 30%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add extra glow for quantum theme
        if (theme === 'quantum') {
          ctx.shadowColor = `hsla(${particle.hue}, 100%, 60%, 0.8)`;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      updateParticles();
      drawConnections();
      drawParticles();
      
      animationFrame.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    resizeCanvas();
    initParticles();
    animate();

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount, theme, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};