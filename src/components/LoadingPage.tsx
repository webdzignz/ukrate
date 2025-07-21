import React from 'react';
import Logo from './Logo';

const LoadingPage: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#012169]/85 via-[#012169]/75 to-[#012169]/90 flex items-center justify-center z-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-[#C8102E]/30 to-transparent rounded-full animate-pulse transform rotate-45"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-pulse delay-1000 transform -rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-gradient-to-br from-[#C8102E]/20 to-transparent rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-gradient-to-br from-white/15 to-transparent rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-gradient-to-br from-[#C8102E]/25 to-transparent rounded-full animate-pulse delay-2000 transform rotate-12"></div>
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <Logo size="xl" variant="white" showText={true} />
        </div>

        {/* Loading text */}
        <h1 className="text-2xl font-semibold text-white mb-2">
          Preparing Your Investment Portal
        </h1>
        
        <p className="text-gray-300 mb-8">
          Connecting to institutional-grade opportunities...
        </p>

        {/* Professional loading indicator */}
        <div className="w-64 mx-auto mb-8">
          <div className="bg-white/20 rounded-full h-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#C8102E] to-white rounded-full animate-loading-bar"></div>
          </div>
        </div>

        {/* Minimal spinner */}
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-[#C8102E] rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;