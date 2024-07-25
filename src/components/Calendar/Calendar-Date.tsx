import styled from "styled-components";
import getSchedules from "../../utils/getSchedules";
import isHoliday from "../../utils/isHoliday";
import Flex from "../shared/Flex";
import CalendarContents from "./Calendar-Contents";

interface CalendarDateProps {
  day: Date;
  displayedMonth: number;
}

function CalendarDate({ day, displayedMonth }: CalendarDateProps) {
  const schedules = getSchedules(day)
  const date = day.getDate();
  const isLastMonth = day.getMonth() !== displayedMonth;

  return (
    <>
      <Container>
        <Date $isLastMonth={isLastMonth} $isHoliday={!!isHoliday(day)}>
          <Flex $gap={12}>
            <span>{date}</span>
            <span>{isHoliday(day) ? isHoliday(day)?.name : null}</span>
          </Flex>
        </Date>
        <CalendarContents schedules={schedules} />
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

const Date = styled.div<{ $isLastMonth: boolean; $isHoliday: boolean }>`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ $isLastMonth, $isHoliday }) =>
    $isLastMonth ? "#999" : $isHoliday ? 'var(--red)' : "inherit"};
`;

export default CalendarDate;
