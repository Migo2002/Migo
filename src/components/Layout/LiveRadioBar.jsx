import React from 'react';

const LiveRadioBar = ({ currentTrack, isPlaying, togglePlayPause, className = "" }) => {
  // Determine if we're using dark theme based on className
  const isDark = className.includes('bg-black');
  
  return (
    <div className={`py-0.5 px-4 flex items-center ${className}`}>
      <div className="flex items-center justify-between w-full">
        {/* Live Radio Info */}
        <div className="flex items-center flex-1">
          {/* Red Live Indicator */}
          <div className="flex items-center mr-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse mr-1"></div>
            <span className={`text-xs ${isDark ? 'text-red-400' : 'text-red-500'} font-medium`}>LIVE</span>
          </div>
          
          {/* Track Info - On single line for web */}
          <div className="flex-1 truncate flex items-center">
            <p className={`font-semibold text-xs leading-tight truncate ${isDark ? 'text-white' : ''}`}>
              {currentTrack.title}
            </p>
            <span className={`mx-1 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
            <p className={`text-xs truncate ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {currentTrack.artist}
            </p>
          </div>
        </div>
        
        {/* Pause/Play Button */}
        <button 
          onClick={togglePlayPause} 
          className={`w-5 h-5 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} rounded-full flex items-center justify-center ml-2`}
        >
          {isPlaying ? (
            // Pause Icon
            <div className="flex space-x-0.5">
              <div className={`w-0.5 h-2 ${isDark ? 'bg-white' : 'bg-gray-700'}`}></div>
              <div className={`w-0.5 h-2 ${isDark ? 'bg-white' : 'bg-gray-700'}`}></div>
            </div>
          ) : (
            // Play Icon
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-2.5 w-2.5 ${isDark ? 'text-white' : 'text-gray-700'}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default LiveRadioBar;