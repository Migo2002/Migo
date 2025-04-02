import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="flex-1 p-2 flex flex-col">
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;