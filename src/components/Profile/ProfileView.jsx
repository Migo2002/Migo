import React, { useState } from 'react';
import ProfileTabs from './ProfileTabs';
import AccountDetails from './AccountDetails';
import FavoritesList from './FavoritesList';

const ProfileView = ({ xtcBalance, formatXtc }) => {
  // Profile subtabs state
  const [profileSubtab, setProfileSubtab] = useState('account');
  
  // Sample favorites data
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'VINTAGE DENIM JACKET', seller: 'BLUE COLLAR VINTAGE', inStock: true },
    { id: 2, name: 'LEATHER COMBAT BOOTS', seller: 'RETRO FOOTWEAR', inStock: true },
    { id: 3, name: 'WOOL PEACOAT', seller: 'WINTER CLASSICS', inStock: false },
    { id: 4, name: 'STRIPED COTTON SHIRT', seller: 'MODERN BASICS', inStock: true }
  ]);
  
  // Remove item from favorites
  const removeFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };
  
  return (
    <div className="h-full flex flex-col">
      {/* XTC Balance */}
      <div className="bg-blue-50 px-2 py-0.5 rounded-full self-center mb-2 inline-flex">
        <span className="text-blue-700 text-xs font-medium">{formatXtc(xtcBalance)}</span>
      </div>
      
      {/* User Profile Header */}
      <div className="text-center mb-2">
        <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-1 flex items-center justify-center">
          <span className="text-gray-500 text-xs">PHOTO</span>
        </div>
        <h2 className="text-sm font-bold mb-0">John Doe</h2>
        <p className="text-gray-500 text-xs">@johndoe</p>
      </div>
      
      {/* Profile Tabs */}
      <ProfileTabs 
        activeTab={profileSubtab} 
        setActiveTab={setProfileSubtab} 
      />
      
      {/* Tab Content */}
      {profileSubtab === 'account' ? (
        <AccountDetails />
      ) : (
        <FavoritesList 
          favorites={favorites} 
          removeFavorite={removeFavorite} 
        />
      )}
    </div>
  );
};

export default ProfileView;