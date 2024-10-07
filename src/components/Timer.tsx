import React, { useEffect, useState } from 'react';

interface TimerProps {
  triggerStart: boolean;
}

const Timer: React.FC<TimerProps> = ({ triggerStart }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (triggerStart) {
      setIsRunning(true);
    }
  }, [triggerStart]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && time < 60) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (time >= 60) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  return (
    <div className="flex justify-center text-2xl">
      <p>{time}s</p>
    </div>
  );
};

export default Timer;
