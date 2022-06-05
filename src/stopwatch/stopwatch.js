import { useEffect, useState } from "react";

export function StopWatch() {
  const [time, setTime] =  useState (0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let newIntervalId;
    if (isRunning) {
      newIntervalId = setInterval(() => {
        setTime((currentTime) => currentTime + 100);
      }, 100);
      setIntervalId(newIntervalId);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [isRunning]);

  function getSeconds(ms) {
    const seconds = Math.floor(ms / 1000) % 60;
    return seconds < 10 ? `0${seconds}` : seconds;
  }

  function getMinutes(ms) {
    const minutes = Math.floor(ms / (1000 * 60));
    return minutes < 10 ? `0${minutes}` : minutes;
  }

  function getHours(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    return hours < 10 ? `0${hours}` : hours;
  }

  return (
    <div>
      <div>
        <span>{getHours(time)}</span>:<span>{getMinutes(time)}</span>:
        <span>{getSeconds(time)}</span>
      </div>
      <div>
        {!isRunning && time === 0 && (
          <button onClick={() => setIsRunning(true)}>Start</button>
        )}
        {isRunning && <button onClick={() => setIsRunning(false)}>Stop</button>}
        {!isRunning && time !== 0 && (
          <button onClick={() => setIsRunning(true)}>Resume</button>
        )}
        {!isRunning && time !== 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
      </div>
    </div>
  );
}
