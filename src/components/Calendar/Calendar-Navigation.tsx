import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface CalendarNavigationProps {
  month: number;
  setMonth: Dispatch<SetStateAction<number>>;
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
}

function CalendarNavigation({
  month,
  setMonth,
  year,
  setYear,
}: CalendarNavigationProps) {
  const handleNextMonth = () => {
    setMonth((prevMonth) => (prevMonth + 1) % 12);
    if (month === 11) setYear(year + 1);
  };

  const handlePreviousMonth = () => {
    setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    if (month === 0) setYear(year - 1);
  };

  return (
    <Container>
      <button onClick={handlePreviousMonth}>{"<"}</button>
      <h1>{`${year} ${month + 1}월`}</h1>
      <button onClick={handleNextMonth}>{">"}</button>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  & button {
    background-color: transparent;
    border: none;
    font-size: 40px;
    &:hover {
      color: gray;
    }
  }
`;

export default CalendarNavigation;
