import styled from "styled-components";
import CalendarContents from "./Calendar-Contents";
import mockdate from "../../mockdate";

interface CalendarDateProps {
  day: Date;
  displayedMonth: number;
}

function CalendarDate({ day, displayedMonth }: CalendarDateProps) {
  const date = day.getDate();
  const isLastMonth = day.getMonth() !== displayedMonth;

  return (
    <>
      <Container>
        <Date $isLastMonth={isLastMonth}>{date}</Date>
        <CalendarContents contents={mockdate} />
      </Container>
    </>
  );
}

const Container = styled.div`
  aspect-ratio: 4 / 3;
  border: 1px solid black;
  border-right: none;
  border-bottom: none;
  box-sizing: border-box;
  padding: 6px 8px;

  &:nth-child(7n) {
    border-right: 1px solid black;
    color: var(--yellow);
  }

  &:nth-child(7n - 6) {
    color: var(--red);
  }

  &:nth-last-child(-n + 7) {
    border-bottom: 1px solid black;
  }

  &:last-child {
    border-right: 1px solid black;
  }
`;

const Date = styled.span<{ $isLastMonth: boolean }>`
  font-size: 20px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
  color: ${({ $isLastMonth }) => ($isLastMonth ? "#999" : "inherit")};
`;

export default CalendarDate;
