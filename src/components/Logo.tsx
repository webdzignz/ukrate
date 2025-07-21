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
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  const colorClasses = {
    default: 'text-[#012169]',
    white: 'text-white',
    dark: 'text-gray-900'
  };

  const moveColorClasses = {
    default: 'text-orange-500',
    white: 'text-orange-300',
    dark: 'text-orange-600'
  };

  return (
    <div className="flex items-center space-x-3">
      {/* TRM Logo - using existing RR logo temporarily */}
      <div className={`${sizeClasses[size]} flex items-center justify-center bg-white rounded-lg p-1 shadow-sm`}>
        <img 
          src="/rr-logo-new2.png" 
          alt="The Rate Move Logo"
          className={`${sizeClasses[size]} object-contain`}
        />
      </div>
      
      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <div className={`${textSizeClasses[size]} font-bold ${colorClasses[variant]} leading-tight flex items-baseline`}>
            <span>The Rate</span>
            <span className={`ml-2 ${moveColorClasses[variant]} font-extrabold italic transform -skew-x-12 bg-gradient-to-r ${variant === 'white' ? 'from-orange-300 to-orange-200' : 'from-orange-500 to-orange-600'} bg-clip-text text-transparent drop-shadow-sm`}>
              Move
            </span>
          </div>
          {size === 'lg' || size === 'xl' ? (
            <span className={`text-sm ${variant === 'white' ? 'text-red-100' : 'text-gray-600'} font-medium`}>
            <span className={`text-sm ${variant === 'white' ? 'text-orange-100' : 'text-gray-600'} font-medium`}>
              UK Bond Investment Specialists
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Logo;