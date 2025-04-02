import React from 'react';

const ProductItem = ({ 
  product,
  swipeX, 
  swiping, 
  rightIndicatorOpacity, 
  leftIndicatorOpacity,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd
}) => {
  if (!product) {
    return null;
  }
  
  return (
    <div className="flex flex-col items-center w-full mb-3">
      {/* Item Image with swipe functionality */}
      <div 
        className="relative w-full max-w-xs h-40 bg-gray-100 flex items-center justify-center overflow-hidden"
        style={{ 
          transform: `translateX(${swipeX}px)`,
          transition: swiping ? 'none' : 'transform 0.3s ease'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <span className="text-gray-500 text-sm">ITEM IMAGE</span>
        
        {/* Buy Indicator (Right Swipe) */}
        <div 
          className="absolute top-0 right-0 bottom-0 w-16 bg-green-500 flex items-center justify-center"
          style={{ opacity: rightIndicatorOpacity }}
        >
          <span className="text-white font-bold">BUY</span>
        </div>
        
        {/* Skip Indicator (Left Swipe) */}
        <div 
          className="absolute top-0 left-0 bottom-0 w-16 bg-gray-500 flex items-center justify-center"
          style={{ opacity: leftIndicatorOpacity }}
        >
          <span className="text-white font-bold">SKIP</span>
        </div>
      </div>
      
      {/* Item Details */}
      <div className="text-center pt-2 px-2 w-full max-w-xs">
        <h2 className="font-bold text-base">{product.name}</h2>
        <p className="text-gray-600 text-xs mt-1">SELLER: {product.seller}</p>
        <p className="text-gray-600 text-xs mt-0.5">QUANTITY: {product.quantity}</p>
        <p className="text-blue-700 font-medium text-sm mt-2">${product.price?.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductItem;