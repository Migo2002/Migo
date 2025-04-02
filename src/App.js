import React, { useState, useEffect } from 'react';

const AuctionAppPreview = () => {
  // Define CSS for marquee animation
  const marqueeStyle = {
    '@keyframes marquee': {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(-100%)' }
    },
    animation: 'marquee 10s linear infinite',
    display: 'inline-block',
    paddingLeft: '100%',
    whiteSpace: 'nowrap'
  };
  // State variables from the original code
  const [xtcBalance, setXtcBalance] = useState(3428.92);
  const [timeLeft, setTimeLeft] = useState('23:59:59');
  const [currentTrack, setCurrentTrack] = useState({
    title: 'MIDNIGHT BLUES',
    artist: 'SARAH VAUGHAN'
  });
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState('main');
  const [profileSubtab, setProfileSubtab] = useState('account');
  
  // Sample favorites data
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'VINTAGE DENIM JACKET', seller: 'BLUE COLLAR VINTAGE', inStock: true },
    { id: 2, name: 'LEATHER COMBAT BOOTS', seller: 'RETRO FOOTWEAR', inStock: true },
    { id: 3, name: 'WOOL PEACOAT', seller: 'WINTER CLASSICS', inStock: false },
    { id: 4, name: 'STRIPED COTTON SHIRT', seller: 'MODERN BASICS', inStock: true }
  ]);
  
  // Format XTC balance with 2 decimal places
  const formatXtc = (value) => {
    return `${value.toFixed(2)} XTC`;
  };
  
  // Button handlers
  const handleBuyClick = () => {
    console.log('Buy clicked');
  };
  
  const handleSkipClick = () => {
    console.log('Skip clicked');
  };
  
  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  // Remove item from favorites
  const removeFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };
  
  // Render the main auction content
  const renderMainContent = () => (
    <div className="flex flex-col items-center">
      {/* XTC Balance - Smaller */}
      <div className="bg-blue-50 px-2 py-0.5 rounded-full mb-2 inline-flex">
        <span className="text-blue-700 text-xs font-medium">{formatXtc(xtcBalance)}</span>
      </div>
      
      {/* Time Left - No border box */}
      <div className="mb-3 text-center">
        <div className="text-gray-400 text-xs uppercase">TIME LEFT</div>
        <div className="font-bold text-base">{timeLeft}</div>
      </div>
      
      {/* Centered Item */}
      <div className="flex flex-col items-center w-full mb-3">
        {/* Item Image */}
        <div className="relative w-full max-w-xs h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
          <span className="text-gray-500 text-sm">ITEM IMAGE</span>
        </div>
        
        {/* Item Details - Centered */}
        <div className="text-center pt-2 px-2 w-full max-w-xs">
          <h2 className="font-bold text-base">VINTAGE LEATHER JACKET</h2>
          <p className="text-gray-600 text-xs mt-1">SELLER: RETRO THREADS VINTAGE</p>
          <p className="text-gray-600 text-xs mt-0.5">QUANTITY: 1</p>
        </div>
      </div>
      
      <div className="text-center mb-2 text-xs text-gray-500">
        Swipe right to buy, swipe left to skip
      </div>
      
      {/* Manual Action Buttons - Centered */}
      <div className="flex justify-center gap-4">
        <button
          onClick={handleSkipClick}
          className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <button
          className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>
        
        <button
          onClick={handleBuyClick}
          className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  );
  
  // Render orders content
  const renderOrdersContent = () => (
    <div className="h-full flex flex-col">
      {/* XTC Balance - Smaller */}
      <div className="bg-blue-50 px-2 py-0.5 rounded-full self-center mb-2 inline-flex">
        <span className="text-blue-700 text-xs font-medium">{formatXtc(xtcBalance)}</span>
      </div>
      
      <h2 className="text-base font-bold mb-2 text-center">Your Orders</h2>
      <div className="space-y-2">
        <div className="bg-white rounded-lg shadow p-2">
          <p className="text-xs text-gray-500 mb-0.5">Order #12345</p>
          <p className="font-semibold text-sm">VINTAGE LEATHER JACKET</p>
          <p className="text-xs text-gray-600">Status: Shipping</p>
        </div>
        <div className="bg-white rounded-lg shadow p-2">
          <p className="text-xs text-gray-500 mb-0.5">Order #12344</p>
          <p className="font-semibold text-sm">ANTIQUE RECORD PLAYER</p>
          <p className="text-xs text-gray-600">Status: Delivered</p>
        </div>
      </div>
    </div>
  );
  
  // Render profile content with tabs for account and favorites
  const renderProfileContent = () => (
    <div className="h-full flex flex-col">
      {/* XTC Balance - Smaller */}
      <div className="bg-blue-50 px-2 py-0.5 rounded-full self-center mb-2 inline-flex">
        <span className="text-blue-700 text-xs font-medium">{formatXtc(xtcBalance)}</span>
      </div>
      
      <div className="text-center mb-2">
        <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-1 flex items-center justify-center">
          <span className="text-gray-500 text-xs">PHOTO</span>
        </div>
        <h2 className="text-sm font-bold mb-0">John Doe</h2>
        <p className="text-gray-500 text-xs">@johndoe</p>
      </div>
      
      {/* Profile Tab Selector */}
      <div className="flex border-b mb-2">
        <button 
          onClick={() => setProfileSubtab('account')} 
          className={`flex-1 py-1.5 text-xs font-medium ${profileSubtab === 'account' 
            ? 'text-blue-500 border-b-2 border-blue-500' 
            : 'text-gray-500'
          }`}
        >
          Account
        </button>
        <button 
          onClick={() => setProfileSubtab('favorites')} 
          className={`flex-1 py-1.5 text-xs font-medium ${profileSubtab === 'favorites' 
            ? 'text-blue-500 border-b-2 border-blue-500' 
            : 'text-gray-500'
          }`}
        >
          Favorites
        </button>
      </div>
      
      {/* Profile Tab Content */}
      {profileSubtab === 'account' ? (
        // Account Details Tab
        <div className="flex-1 flex flex-col">
          <div className="bg-white rounded-lg shadow p-2 text-sm mb-2">
            <h3 className="font-semibold mb-1 text-left text-xs">Account Details</h3>
            <div className="flex justify-between py-0.5 border-b text-xs">
              <span className="text-gray-500">Email</span>
              <span>john.doe@example.com</span>
            </div>
            <div className="flex justify-between py-0.5 border-b text-xs">
              <span className="text-gray-500">Phone</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="flex justify-between py-0.5 text-xs">
              <span className="text-gray-500">Member Since</span>
              <span>Jan 2023</span>
            </div>
          </div>
          
          <button
            className="py-1.5 bg-gray-200 rounded text-center text-gray-700 text-xs"
          >
            Log Out
          </button>
        </div>
      ) : (
        // Favorites Tab
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto">
            {favorites.length > 0 ? (
              <div className="space-y-2">
                {favorites.map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow p-2 relative">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-gray-600">SELLER: {item.seller}</p>
                        <p className={`text-xs mt-1 font-medium ${item.inStock ? 'text-green-500' : 'text-red-500'}`}>
                          {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </p>
                      </div>
                      
                      <button 
                        onClick={() => removeFavorite(item.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-32">
                <p className="text-gray-500 text-sm">No favorites yet</p>
                <p className="text-gray-400 text-xs mt-1">Items you save will appear here</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
  
  // Select content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return renderOrdersContent();
      case 'profile':
        return renderProfileContent();
      default:
        return renderMainContent();
    }
  };
  
  return (
    <div className="h-screen max-h-screen bg-gray-50 flex flex-col font-sans overflow-hidden max-w-md mx-auto border border-gray-300">
      {/* Content Area - Fixed, no scrolling, more compact */}
      <div className="flex-1 p-2 flex flex-col">
        <div className="flex-1 flex flex-col">
          {renderContent()}
        </div>
      </div>
      
      {/* Simplified Live Radio Bar - Just show LIVE status, song info, and pause button */}
      <div className="bg-white border-t border-gray-200 px-2 py-1.5">
        <div className="flex items-center justify-between">
          {/* Live Radio Info */}
          <div className="flex items-center flex-1">
            {/* Red Live Indicator */}
            <div className="flex items-center mr-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></div>
              <span className="text-xs text-red-500 font-medium animate-pulse">LIVE</span>
            </div>
            {/* Track Info */}
            <div className="flex-1 overflow-hidden">
              <div className="relative">
                <div style={{
                  animation: 'marquee 8s linear infinite',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  <p className="font-semibold text-xs leading-tight">{currentTrack.title}</p>
                  <p className="text-gray-500 text-xs">{currentTrack.artist}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pause/Play Button Only */}
          <button 
            onClick={togglePlayPause} 
            className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center ml-2"
          >
            {isPlaying ? (
              // Pause Icon
              <div className="flex space-x-0.5">
                <div className="w-1 h-3 bg-gray-700"></div>
                <div className="w-1 h-3 bg-gray-700"></div>
              </div>
            ) : (
              // Play Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Bottom Navigation Bar - more compact */}
      <div className="bg-white border-t border-gray-200">
        <div className="flex justify-around">
          <button 
            className={`py-1.5 px-5 flex flex-col items-center justify-center ${activeTab === 'main' ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('main')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs">Main</span>
          </button>
          
          <button 
            className={`py-1.5 px-5 flex flex-col items-center justify-center ${activeTab === 'orders' ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('orders')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="text-xs">Orders</span>
          </button>
          
          <button 
            className={`py-1.5 px-5 flex flex-col items-center justify-center ${activeTab === 'profile' ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('profile')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuctionAppPreview;