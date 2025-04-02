import React, { useState, useEffect } from 'react';
import ResponsiveLayout from './components/Layout/ResponsiveLayout';
import MarketplaceView from './components/Marketplace/MarketplaceView';
import OrdersView from './components/Orders/OrdersView';
import ProfileView from './components/Profile/ProfileView';
import useTimer from './hooks/useTimer';
import './App.css';

function App() {
  // User wallet balance
  const [xtcBalance, setXtcBalance] = useState(3428.92);
  
  // Timer state using custom hook
  const [timeLeft, setTimeLeft] = useTimer('23:59:59');
  
  // Current track for radio
  const [currentTrack, setCurrentTrack] = useState({
    title: 'MIDNIGHT BLUES',
    artist: 'SARAH VAUGHAN'
  });
  
  // Radio player state
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Navigation state
  const [activeTab, setActiveTab] = useState('main');
  
  // Products data state
  const [products, setProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  
  // Orders data state
  const [orders, setOrders] = useState([]);
  
  // Loading state
  const [loading, setLoading] = useState(true);
  
  // Fetch products from API
  useEffect(() => {
    // Simulated data fetch
    const fetchData = () => {
      // Sample products data
      const productsData = [
        { id: 1, name: 'VINTAGE LEATHER JACKET', seller: 'RETRO THREADS VINTAGE', price: 149.99, quantity: 1 },
        { id: 2, name: 'ANTIQUE RECORD PLAYER', seller: 'VINYL CLASSICS', price: 299.99, quantity: 1 },
        { id: 3, name: 'LEATHER COMBAT BOOTS', seller: 'RETRO FOOTWEAR', price: 129.99, quantity: 1 },
        { id: 4, name: 'DENIM JACKET', seller: 'BLUE COLLAR VINTAGE', price: 89.99, quantity: 1 }
      ];
      
      // Sample orders data
      const ordersData = [
        { id: '12345', name: 'VINTAGE LEATHER JACKET', status: 'Shipping', date: '2025-03-20' },
        { id: '12344', name: 'ANTIQUE RECORD PLAYER', status: 'Delivered', date: '2025-03-15' }
      ];
      
      setProducts(productsData);
      setOrders(ordersData);
      setLoading(false);
    };
    
    fetchData();
  }, []);
  
  // Format XTC balance with 2 decimal places
  const formatXtc = (value) => {
    return `${value.toFixed(2)} XTC`;
  };
  
  // Toggle play/pause for radio
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  // Handle buy action
  const handleBuy = () => {
    // Deduct balance
    const currentProduct = products[currentProductIndex];
    if (currentProduct && xtcBalance >= currentProduct.price) {
      setXtcBalance(xtcBalance - currentProduct.price);
      
      // Move to next product
      if (currentProductIndex < products.length - 1) {
        setCurrentProductIndex(currentProductIndex + 1);
      } else {
        setCurrentProductIndex(0); // Loop back to first product
      }
      
      // Add to orders (in a real app, this would be an API call)
      const newOrder = {
        id: `${Date.now()}`.slice(-5), // Simple ID generation
        name: currentProduct.name,
        status: 'Processing',
        date: new Date().toISOString().split('T')[0]
      };
      
      setOrders([newOrder, ...orders]);
    }
  };
  
  // Handle skip action
  const handleSkip = () => {
    // Move to next product
    if (currentProductIndex < products.length - 1) {
      setCurrentProductIndex(currentProductIndex + 1);
    } else {
      setCurrentProductIndex(0); // Loop back to first product
    }
  };
  
  // Render the appropriate view based on active tab
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex-1 flex items-center justify-center">
          <p>Loading...</p>
        </div>
      );
    }
    
    switch (activeTab) {
      case 'orders':
        return <OrdersView 
          xtcBalance={xtcBalance} 
          formatXtc={formatXtc} 
          orders={orders}
        />;
      case 'profile':
        return <ProfileView 
          xtcBalance={xtcBalance} 
          formatXtc={formatXtc}
        />;
      default:
        return <MarketplaceView 
          xtcBalance={xtcBalance} 
          formatXtc={formatXtc} 
          timeLeft={timeLeft}
          product={products[currentProductIndex]}
          onBuy={handleBuy}
          onSkip={handleSkip}
        />;
    }
  };
  
  return (
    <ResponsiveLayout
      currentTrack={currentTrack}
      isPlaying={isPlaying}
      togglePlayPause={togglePlayPause}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {renderContent()}
    </ResponsiveLayout>
  );
}

export default App;