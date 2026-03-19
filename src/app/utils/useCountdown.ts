import { useState, useEffect } from "react";
import dayjs from "dayjs";

type CountdownTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function useCountdown(endDate: string): CountdownTime {
  const [time, setTime] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = dayjs();
      const end = dayjs(endDate);

      const totalSeconds = end.diff(now, "second");

      if (totalSeconds <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTime({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return time;
}
