import { Color } from "./types/color";

type MockDate = {
  date: string;
  content: string;
  color: Color;
}[];

const mockdate: MockDate = [
  { date: "2024-01-03", content: "긴급회의", color: "red" },
  { date: "2024-01-14", content: "외출", color: "yellow" },
  { date: "2024-01-14", content: "외출", color: "yellow" },
  { date: "2024-01-25", content: "정기회의", color: "green" },
  { date: "2024-02-02", content: "정기회의", color: "green" },
  { date: "2024-02-08", content: "팀회의", color: "purple" },
  { date: "2024-02-09", content: "정기회의", color: "green" },
  { date: "2024-02-10", content: "외출", color: "yellow" },
  { date: "2024-02-18", content: "팀회의", color: "purple" },
  { date: "2024-02-22", content: "긴급회의", color: "red" },
  { date: "2024-03-05", content: "정기회의", color: "green" },
  { date: "2024-03-05", content: "외출", color: "yellow" },
  { date: "2024-03-06", content: "긴급회의", color: "red" },
  { date: "2024-03-15", content: "외출", color: "yellow" },
  { date: "2024-03-17", content: "정기회의", color: "green" },
  { date: "2024-04-01", content: "정기회의", color: "green" },
  { date: "2024-04-02", content: "팀회의", color: "purple" },
  { date: "2024-04-15", content: "긴급회의", color: "red" },
  { date: "2024-04-20", content: "팀회의", color: "purple" },
  { date: "2024-05-05", content: "긴급회의", color: "red" },
  { date: "2024-05-08", content: "외출", color: "yellow" },
  { date: "2024-05-21", content: "외출", color: "yellow" },
  { date: "2024-05-21", content: "정기회의", color: "green" },
  { date: "2024-06-03", content: "팀회의", color: "purple" },
  { date: "2024-06-03", content: "정기회의", color: "green" },
  { date: "2024-06-18", content: "긴급회의", color: "red" },
  { date: "2024-06-30", content: "정기회의", color: "green" },
  { date: "2024-07-01", content: "외출", color: "yellow" },
  { date: "2024-07-01", content: "긴급회의", color: "red" },
  { date: "2024-07-08", content: "긴급회의", color: "red" },
  { date: "2024-07-13", content: "정기회의", color: "green" },
  { date: "2024-07-19", content: "외출", color: "yellow" },
  { date: "2024-08-02", content: "정기회의", color: "green" },
  { date: "2024-08-07", content: "정기회의", color: "green" },
  { date: "2024-08-19", content: "팀회의", color: "purple" },
  { date: "2024-09-02", content: "외출", color: "yellow" },
  { date: "2024-09-02", content: "긴급회의", color: "red" },
  { date: "2024-09-09", content: "긴급회의", color: "red" },
  { date: "2024-09-13", content: "정기회의", color: "green" },
  { date: "2024-09-13", content: "외출", color: "yellow" },
  { date: "2024-09-19", content: "외출", color: "yellow" },
  { date: "2024-10-01", content: "정기회의", color: "green" },
  { date: "2024-10-20", content: "팀회의", color: "purple" },
  { date: "2024-11-06", content: "긴급회의", color: "red" },
  { date: "2024-11-18", content: "외출", color: "yellow" },
  { date: "2024-12-02", content: "정기회의", color: "green" },
  { date: "2024-12-15", content: "팀회의", color: "purple" },
  { date: "2024-12-28", content: "긴급회의", color: "red" },
];

export default mockdate;
