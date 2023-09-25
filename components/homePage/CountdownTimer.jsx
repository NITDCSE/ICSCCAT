'use client'
import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const calculateTimeRemaining = () => {
    const NOW_IN_MS = new Date().getTime();
    const timeRemaining = targetDate - NOW_IN_MS;

    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30); // Approximation: 30 days per month
// returbn
    return {
      months,
      days: days % 30,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className="show-counter">
      <div className="countdown">
        <div className="digit-container">
          <span className="digit">{formatTime(timeRemaining.months)}</span>
          <span className="countdown-label">Months</span>
        </div> 
        
        <div className="digit-container">
          <span className="digit">{formatTime(timeRemaining.days)}</span>
          <span className="countdown-label">Days</span>
        </div> 
        
        <div className="digit-container">
          <span className="digit">{formatTime(timeRemaining.hours)}</span>
          <span className="countdown-label">Hours</span>
        </div> 
        
        <div className="digit-container">
          <span className="digit">{formatTime(timeRemaining.minutes)}</span>
          <span className="countdown-label">Minutes</span>
        </div> 
        
        <div className="digit-container">
          <span className="digit">{formatTime(timeRemaining.seconds)}</span>
          <span className="countdown-label">Seconds</span>
        </div> 
      </div>
    </div>
  );
}
