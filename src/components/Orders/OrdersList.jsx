import React from 'react';

const OrdersList = ({ orders }) => {
  return (
    <div className="space-y-2">
      {orders.map(order => (
        <div key={order.id} className="bg-white rounded-lg shadow p-2">
          <p className="text-xs text-gray-500 mb-0.5">Order #{order.id}</p>
          <p className="font-semibold text-sm">{order.name}</p>
          <p className="text-xs text-gray-600">Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default OrdersList;