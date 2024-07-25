import { useState, useEffect } from "react";

const useCalendar = (year: number, month: number) => {
  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    const firstDayOfMonth = new Date(year, month, 1);

    // 이번달의 1일이 일요일이 아닌 경우에 지난달 마지막 주 추가
    let previousMonthDays: Date[] = [];
    if (firstDayOfMonth.getDay() !== 0) {
      previousMonthDays = getLastWeekOfPreviousMonth(year, month);
      // console.log('prev', previousMonthDays)
    }

    const currentMonthDays = getDaysInMonth(year, month);

    setDays([...previousMonthDays, ...currentMonthDays]);
  }, [year, month]);

  return days;
};

const getLastWeekOfPreviousMonth = (year: number, month: number) => {
  const lastDayOfPreviousMonth = new Date(year, month, 0); // 전달의 마지막 날
  const lastDayOfWeek = lastDayOfPreviousMonth.getDay(); // 전달의 마지막 날의 요일

  return Array.from(
    { length: lastDayOfWeek + 1 },
    (_, i) => new Date(year, month, -lastDayOfWeek + i)
  );
};

const getDaysInMonth = (year: number, month: number) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return Array.from(
    { length: daysInMonth },
    (_, i) => new Date(year, month, i + 1)
  );
};

export default useCalendar;
