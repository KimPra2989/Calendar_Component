import styled from "styled-components";
import useCalendarHeader from "../../hooks/useCalendarHeader";

function CalendarHeader() {
  const header = useCalendarHeader();
  return (
    <>
      {header.map((day) => (
        <Container key={day}>{day}</Container>
      ))}
    </>
  );
}

const Container = styled.div`
  height: 40px;
  line-height: 40px;
  padding: 4px 6px;
  border: 1px solid black;
  border-right: none;
  border-bottom: none;
  padding: 6px 8px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;

  &:first-child {
    color: var(--red);
  }

  &:nth-child(7n) {
    border-right: 1px solid black;
    color: var(--yellow);
  }
`;

export default CalendarHeader;
