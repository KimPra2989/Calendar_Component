import {
  WEEKDAY_LONG_ENG,
  WEEKDAY_LONG_KOR,
  WEEKDAY_SHORT_ENG,
  WEEKDAY_SHORT_KOR,
} from "../constant/weekday";
import { Language } from "../types/language";

type Length = "LONG" | "SHORT";
const useCalendarHeader = (
  language: Language = "KOR",
  length: Length = "LONG"
) => {
  const header =
    language === "KOR"
      ? length === "LONG"
        ? WEEKDAY_LONG_KOR
        : WEEKDAY_SHORT_KOR
      : length === "LONG"
      ? WEEKDAY_LONG_ENG
      : WEEKDAY_SHORT_ENG;

  return header;
};

export default useCalendarHeader;
