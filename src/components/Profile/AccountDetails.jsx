import React from 'react';

const AccountDetails = () => {
  const handleLogout = () => {
    console.log('Logged out');
    // Add your logout logic here
  };

  return (
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
        onClick={handleLogout}
        className="py-1.5 bg-gray-200 rounded text-center text-gray-700 text-xs"
      >
        Log Out
      </button>
    </div>
  );
};

export default AccountDetails;