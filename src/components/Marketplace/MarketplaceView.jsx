import React, { useState } from 'react';
import ProductItem from './ProductItem';
import ActionButtons from './ActionButtons';
import BalanceBadge from '../common/BalanceBadge';

const MarketplaceView = ({ xtcBalance, formatXtc, timeLeft, product, onBuy, onSkip }) => {
  // Swipe states
  const [swipeX, setSwipeX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [swiping, setSwiping] = useState(false);
  
  const swipeThreshold = 100; // Minimum pixels to consider a swipe complete
  
  // Mouse event handlers
  const handleMouseDown = (e) => {
    setSwiping(true);
    setStartX(e.clientX);
  };
  
  const handleMouseMove = (e) => {
    if (!swiping) return;
    const deltaX = e.clientX - startX;
    setSwipeX(deltaX);
  };
  
  const handleMouseUp = () => {
    if (!swiping) return;
    
    if (Math.abs(swipeX) >= swipeThreshold) {
      if (swipeX > 0) {
        // Right swipe - Buy
        handleBuyClick();
      } else {
        // Left swipe - Skip
        handleSkipClick();
      }
    }
    
    // Reset
    setSwiping(false);
    setSwipeX(0);
  };
  
  // Touch event handlers
  const handleTouchStart = (e) => {
    setSwiping(true);
    setStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    if (!swiping) return;
    const deltaX = e.touches[0].clientX - startX;
    setSwipeX(deltaX);
    
    // Prevent default to avoid scrolling while swiping
    if (Math.abs(deltaX) > 10) {
      e.preventDefault();
    }
  };
  
  const handleTouchEnd = () => {
    if (!swiping) return;
    
    if (Math.abs(swipeX) >= swipeThreshold) {
      if (swipeX > 0) {
        // Right swipe - Buy
        handleBuyClick();
      } else {
        // Left swipe - Skip
        handleSkipClick();
      }
    }
    
    // Reset
    setSwiping(false);
    setSwipeX(0);
  };
  
  // Button handlers
  const handleBuyClick = () => {
    onBuy();
  };
  
  const handleSkipClick = () => {
    onSkip();
  };
  
  // Handle favorite action
  const handleFavoriteClick = () => {
    console.log('Added to favorites:', product);
    // Implement your favorite logic here
  };
  
  // Calculate indicator opacities
  const rightIndicatorOpacity = Math.min(Math.max(swipeX / 100, 0), 1);
  const leftIndicatorOpacity = Math.min(Math.max(-swipeX / 100, 0), 1);
  
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p>No products available</p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center">
      {/* XTC Balance */}
      <BalanceBadge balance={xtcBalance} formatXtc={formatXtc} />
      
      {/* Time Left */}
      <div className="mb-3 text-center">
        <div className="text-gray-400 text-xs uppercase">TIME LEFT</div>
        <div className="font-bold text-base">{timeLeft}</div>
      </div>
      
      {/* Product Item with Swipe */}
      <ProductItem 
        product={product}
        swipeX={swipeX}
        swiping={swiping}
        rightIndicatorOpacity={rightIndicatorOpacity}
        leftIndicatorOpacity={leftIndicatorOpacity}
        handleMouseDown={handleMouseDown}
        handleMouseMove={handleMouseMove}
        handleMouseUp={handleMouseUp}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
      />
      
      <div className="text-center mb-2 text-xs text-gray-500">
        Swipe right to buy, swipe left to skip
      </div>
      
      {/* Action Buttons */}
      <ActionButtons 
        onSkip={handleSkipClick}
        onBuy={handleBuyClick}
        onFavorite={handleFavoriteClick}
      />
    </div>
  );
};

export default MarketplaceView;