import { useEffect, useState } from 'react';
import '../styles/clock/index.css';

const DigitalClock = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="digital-clock">
      <h1>{time}</h1>
    </div>
  );
};

export default DigitalClock;
