import React from 'react';
import OrdersList from './OrdersList';

const OrdersView = ({ xtcBalance, formatXtc, orders = [] }) => {
  return (
    <div className="h-full flex flex-col">
      {/* XTC Balance */}
      <div className="bg-blue-50 px-2 py-0.5 rounded-full self-center mb-2 inline-flex">
        <span className="text-blue-700 text-xs font-medium">{formatXtc(xtcBalance)}</span>
      </div>
      
      <h2 className="text-base font-bold mb-2 text-center">Your Orders</h2>
      
      {orders.length > 0 ? (
        <OrdersList orders={orders} />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">No orders yet</p>
        </div>
      )}
    </div>
  );
};

export default OrdersView;