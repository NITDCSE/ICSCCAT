"use client"
import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function CountdownTimer() {
  const targetDate = 236* 24 * 60 * 60 * 1000 + new Date().getTime();
  
  var date1 = moment("2024-08-02");
  var date2 = moment();

  var Months = date1.diff(date2, 'months');
  date2.add(Months, "months")

  var Days = date1.diff(date2, 'days');
  date2.add(Days, "days")

  var Hours = date1.diff(date2, 'hours');
  date2.add(Hours, "hours")

  var Minutes = date1.diff(date2, 'minutes');
  date2.add(Minutes, "minutes")

  var Seconds = date1.diff(date2, 'seconds');

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
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className="show-counter">
      <div className="countdown">
        <div className="digit-container">
          <span className="digit">{formatTime(Months)}</span>
          <span className="countdown-label">Months</span>
        </div> 
        
        <div className="digit-container">
          <span className="digit">{formatTime(Days)}</span>
          <span className="countdown-label">Days</span>
        </div> 
        
        <div className="digit-container">
          <span className="digit">{formatTime(Hours)}</span>
          <span className="countdown-label">Hours</span>
        </div> 
        
        <div className="digit-container">
          <span className="digit">{formatTime(Minutes)}</span>
          <span className="countdown-label">Minutes</span>
        </div> 
        
        <div className="digit-container">
          <span className="digit">{formatTime(Seconds)}</span>
          <span className="countdown-label">Seconds</span>
        </div> 
      </div>
    </div>
  );
}
