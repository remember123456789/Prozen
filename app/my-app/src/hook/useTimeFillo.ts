import { useState, useRef, useEffect } from "react";

export const useTimeFillo = (initTime) => {
  const [time, setTime] = useState(initTime);
  const timer = useRef<any>(null);

  useEffect(() => {
    if (time > 0) {
      timer.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer.current);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [time]);

  return {
    time,
  };
};
