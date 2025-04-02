import { useState, useEffect } from 'react';

const useTimer = (initialTime = '23:59:59') => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  
  useEffect(() => {
    const timer = setInterval(() => {
      // Format the countdown
      const [hours, minutes, seconds] = timeLeft.split(':').map(Number);
      let newSeconds = seconds - 1;
      let newMinutes = minutes;
      let newHours = hours;
      
      if (newSeconds < 0) {
        newSeconds = 59;
        newMinutes -= 1;
      }
      
      if (newMinutes < 0) {
        newMinutes = 59;
        newHours -= 1;
      }
      
      if (newHours < 0) {
        // Timer ended
        clearInterval(timer);
        return;
      }
      
      setTimeLeft(
        `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
      );
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft]);
  
  return [timeLeft, setTimeLeft];
};

export default useTimer;