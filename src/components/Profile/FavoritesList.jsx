import React from 'react';

const FavoritesList = ({ favorites, removeFavorite }) => {
  return (
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
      
      <div className="text-xs text-gray-500 text-center mt-2 mb-1">
        To add items to favorites, tap the heart icon while browsing
      </div>
    </div>
  );
};

export default FavoritesList;