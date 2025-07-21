import React from 'react';
import Logo from './Logo';

const LoadingPage: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
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
          <div className="bg-gray-700 rounded-full h-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full animate-loading-bar"></div>
          </div>
        </div>

        {/* Minimal spinner */}
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;