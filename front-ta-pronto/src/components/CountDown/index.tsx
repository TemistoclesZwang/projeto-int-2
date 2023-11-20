import React, { useState, useEffect } from 'react';

interface CountdownProps {
  initialMinutes: number;
  onTimerEnd: () => void;
  startTimer: boolean;
}

export function Countdown({ initialMinutes, onTimerEnd, startTimer }: CountdownProps) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: number;

    if (startTimer && minutes >= 0 && seconds >= 0) {
      interval = window.setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(9); //. tempo
          } else {
            clearInterval(interval);
            onTimerEnd();
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [startTimer, minutes, seconds, onTimerEnd]);

  return (
    <div>
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </div>
  );
}
