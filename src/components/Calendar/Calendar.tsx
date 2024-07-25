import { useState } from "react";
import useCalendar from "../../hooks/useCalendar";
import styled from "styled-components";
import CalendarHeader from "./Calendar-Header";
import CalendarDate from "./Calendar-Date";

const Calendar = () => {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const days = useCalendar(year, month);

  const handleNextMonth = () => {
    setMonth((prevMonth) => (prevMonth + 1) % 12);
    if (month === 11) setYear(year + 1);
  };

  const handlePreviousMonth = () => {
    setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    if (month === 0) setYear(year - 1);
  };

  return (
    <div>
      <Title>
        <button onClick={handlePreviousMonth}>{"<"}</button>
        <h1>{`${year} ${month + 1}월`}</h1>
        <button onClick={handleNextMonth}>{">"}</button>
      </Title>
      <CalendarContainer>
        <CalendarHeader />
        {days.map((day) => (
          <CalendarDate
            day={day}
            displayedMonth={month}
            key={day.getMonth() + "m" + day.getDate()}
          />
        ))}
      </CalendarContainer>
    </div>
  );
};

const Title = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  & button {
    background-color: transparent;
    border: none;
    font-size: 32px;
    &:hover {
      color: gray;
    }
  }
`;

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export default Calendar;
