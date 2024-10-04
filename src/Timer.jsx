import React, { useState, useEffect } from 'react';


function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTime = () => {
    setIsRunning(true);
  };

  const stopTime = () => {
    setIsRunning(false);
  };

  const resetTime = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          stopTime();
        } else {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          } else if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [hours, minutes, seconds, isRunning]);

  return (
    <div className="timer-container">
      <h1>
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </h1>
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(parseInt(e.target.value))}
        placeholder="Hours"
      />
      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(parseInt(e.target.value))}
        placeholder="Minutes"
      />
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(parseInt(e.target.value))}
        placeholder="Seconds"
      />
      <button onClick={startTime}>Start</button>
      <button onClick={stopTime}>Stop</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  );
}

export default Timer;