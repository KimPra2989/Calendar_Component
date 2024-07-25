import { Color } from "./components/Calendar/Calendar-Contents";

type MockDate = {
  startDate: string;
  endDate: string;
  content: string;
  color: Color;
}[];

const mockdate: MockDate = [
  {
    startDate: "2024-07-19",
    endDate: "2024-07-20",
    content: "정기회의",
    color: "purple",
  },
];

export default mockdate;
