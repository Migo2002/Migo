import React from 'react';

const BalanceBadge = ({ balance, formatXtc }) => {
  return (
    <div className="bg-blue-50 px-2 py-0.5 rounded-full mb-2 inline-flex">
      <span className="text-blue-700 text-xs font-medium">{formatXtc(balance)}</span>
    </div>
  );
};

export default BalanceBadge;