import React from 'react';

const BottomNav = ({ activeTab, setActiveTab }) => {
  return (
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
  );
};

export default BottomNav;