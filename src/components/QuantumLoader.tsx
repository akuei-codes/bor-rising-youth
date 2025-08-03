import React from 'react';

interface QuantumLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spin' | 'pulse' | 'morphing';
  className?: string;
}

export const QuantumLoader: React.FC<QuantumLoaderProps> = ({
  size = 'md',
  variant = 'spin',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-20 h-20'
  };

  const SpinLoader = () => (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-quantum-primary border-r-quantum-secondary animate-spin"></div>
      <div className="absolute inset-1 rounded-full border-2 border-transparent border-b-quantum-tertiary border-l-quantum-accent animate-spin reverse-spin"></div>
      <div className="absolute inset-2 rounded-full bg-gradient-to-r from-quantum-primary to-quantum-secondary opacity-20 animate-pulse"></div>
    </div>
  );

  const PulseLoader = () => (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="absolute inset-0 rounded-full bg-quantum-primary opacity-75 animate-ping"></div>
      <div className="absolute inset-0 rounded-full bg-quantum-secondary opacity-50 animate-ping animation-delay-150"></div>
      <div className="absolute inset-0 rounded-full bg-quantum-tertiary opacity-25 animate-ping animation-delay-300"></div>
    </div>
  );

  const MorphingLoader = () => (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="absolute inset-0 bg-neural-gradient animate-morphing rounded-full"></div>
      <div className="absolute inset-1 bg-background rounded-full"></div>
      <div className="absolute inset-2 bg-quantum-primary opacity-60 rounded-full animate-pulse"></div>
    </div>
  );

  const loaderVariants = {
    spin: SpinLoader,
    pulse: PulseLoader,
    morphing: MorphingLoader
  };

  const LoaderComponent = loaderVariants[variant];

  return <LoaderComponent />;
};

// Add these animations to tailwind config or CSS
const additionalStyles = `
@keyframes reverse-spin {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes morphing {
  0% { border-radius: 50%; transform: rotate(0deg) scale(1); }
  25% { border-radius: 25%; transform: rotate(90deg) scale(1.1); }
  50% { border-radius: 10%; transform: rotate(180deg) scale(0.9); }
  75% { border-radius: 25%; transform: rotate(270deg) scale(1.1); }
  100% { border-radius: 50%; transform: rotate(360deg) scale(1); }
}

.reverse-spin {
  animation: reverse-spin 1s linear infinite;
}

.animate-morphing {
  animation: morphing 2s ease-in-out infinite;
}

.animation-delay-150 {
  animation-delay: 150ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}
`;