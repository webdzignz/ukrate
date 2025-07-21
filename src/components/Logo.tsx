import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'dark';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'default', 
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const colorClasses = {
    default: 'text-gray-900',
    white: 'text-white',
    dark: 'text-gray-900'
  };

  const moveColorClasses = {
    default: 'text-orange-600',
    white: 'text-orange-400',
    dark: 'text-orange-600'
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Logo Image */}
      <div className={`${sizeClasses[size]} flex items-center justify-center bg-white rounded-lg shadow-sm`}>
        <img 
          src="/rr-logo-new2.png" 
          alt="The Rate Move Logo"
          className={`${sizeClasses[size]} object-contain p-1`}
        />
      </div>
      
      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <div className={`${textSizeClasses[size]} font-bold ${colorClasses[variant]} leading-tight flex items-baseline`}>
            <span>The Rate</span>
            <span className={`ml-2 ${moveColorClasses[variant]} font-bold`}>
              Move
            </span>
          </div>
          {(size === 'lg' || size === 'xl') && (
            <span className={`text-xs ${variant === 'white' ? 'text-gray-300' : 'text-gray-500'} font-medium uppercase tracking-wide`}>
              Investment Solutions
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;