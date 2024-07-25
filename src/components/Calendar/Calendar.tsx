import { useState } from "react";
import useCalendar from "../../hooks/useCalendar";
import styled from "styled-components";
import CalendarHeader from "./Calendar-Header";
import CalendarDate from "./Calendar-Date";
import CalendarNavigation from "./Calendar-Navigation";

interface CalendarProps {
  displayedYear?: number;
  displayedMonth?: number;
}

const Calendar = ({ displayedYear, displayedMonth }: CalendarProps) => {
  const now = new Date();
  const [year, setYear] = useState(displayedYear ?? now.getFullYear());
  const [month, setMonth] = useState(displayedMonth ?? now.getMonth());
  const days = useCalendar(year, month);

  return (
    <>
      <CalendarNavigation
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
      />
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
    </>
  );
};

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export default Calendar;
