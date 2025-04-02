import React, { useState, useEffect } from 'react';
import MainLayout from './MainLayout';
import LiveRadioBar from './LiveRadioBar';
import BottomNav from './BottomNav';

const ResponsiveLayout = ({ children, currentTrack, isPlaying, togglePlayPause, activeTab, setActiveTab }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-screen max-h-screen bg-gray-50 flex flex-col font-sans overflow-hidden">
      {/* Radio at the top for desktop - with thin black background */}
      {!isMobile && (
        <LiveRadioBar 
          currentTrack={currentTrack} 
          isPlaying={isPlaying} 
          togglePlayPause={togglePlayPause}
          className="bg-black text-white h-8" 
        />
      )}
      
      {/* Desktop top navigation (only visible on desktop) */}
      {!isMobile && (
        <div className="py-2 bg-gray-50">
          <div className="container mx-auto flex justify-center items-center">
            <nav className="flex space-x-6">
              <button 
                className={`px-3 py-1 rounded ${activeTab === 'main' ? 'bg-blue-50 text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('main')}
              >
                Market
              </button>
              <button 
                className={`px-3 py-1 rounded ${activeTab === 'orders' ? 'bg-blue-50 text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('orders')}
              >
                Orders
              </button>
              <button 
                className={`px-3 py-1 rounded ${activeTab === 'profile' ? 'bg-blue-50 text-blue-500' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
            </nav>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <MainLayout>
          {children}
        </MainLayout>
      </div>
      
      {/* Mobile bottom components */}
      {isMobile && (
        <>
          <LiveRadioBar 
            currentTrack={currentTrack} 
            isPlaying={isPlaying} 
            togglePlayPause={togglePlayPause} 
            className="border-t border-gray-200"
          />
          
          <BottomNav 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />
        </>
      )}
    </div>
  );
};

export default ResponsiveLayout;