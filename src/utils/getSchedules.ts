import mockdate from "../mockdate";
import setDateString from "./setDateString";

const getSchedules = (date: Date) => {
  const dateString = setDateString(date);
  const contents = mockdate.filter(({ date }) => date === dateString);

  return contents;
};

export default getSchedules;
