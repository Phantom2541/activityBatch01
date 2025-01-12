import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);  // To store the number of seconds passed
  const [isRunning, setIsRunning] = useState(false);  // To track if the timer is running or paused

  // This effect runs every second when the timer is running
  useEffect(() => {
    let interval;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);  // Clear the interval when the timer is paused
    }

    // Cleanup the interval on component unmount or when isRunning changes
    return () => clearInterval(interval);
  }, [isRunning]);

  // Start or pause the timer
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Reset the timer to 0
  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  // Convert seconds into HH:MM:SS format
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);  // Get hours
    const minutes = Math.floor((totalSeconds % 3600) / 60);  // Get minutes
    const remainingSeconds = totalSeconds % 60;  // Get remaining seconds

    // Pad single digit numbers with leading zeros
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <h2>Timer: {formatTime(seconds)}</h2>
      <button onClick={toggleTimer}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
