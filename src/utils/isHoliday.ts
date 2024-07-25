import { holidays } from "../constant/holiday";
import setDateString from "./setDateString";

const isHoliday = (date: Date) => {
  const dateString = setDateString(date);
  return holidays.find((holiday) => holiday.date === dateString);
};

export default isHoliday;
