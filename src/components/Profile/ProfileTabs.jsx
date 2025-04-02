import React from 'react';

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b mb-2">
      <button 
        onClick={() => setActiveTab('account')} 
        className={`flex-1 py-1.5 text-xs font-medium ${activeTab === 'account' 
          ? 'text-blue-500 border-b-2 border-blue-500' 
          : 'text-gray-500'
        }`}
      >
        Account
      </button>
      <button 
        onClick={() => setActiveTab('favorites')} 
        className={`flex-1 py-1.5 text-xs font-medium ${activeTab === 'favorites' 
          ? 'text-blue-500 border-b-2 border-blue-500' 
          : 'text-gray-500'
        }`}
      >
        Favorites
      </button>
    </div>
  );
};

export default ProfileTabs;