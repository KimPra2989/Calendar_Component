## 개요
여기저기 쓰는 것 같길래 뷰와 데이터 분리해서 만들어본 캘린더

스펙 : React, TS, Vite, styled-component
![결과물](https://github.com/user-attachments/assets/384eb971-2469-4182-93a4-ec422d16a1d4)

## 상세

### hook
- useCalendar : 특정 달의 날짜들을 가져올 수 있습니다.
  - 만약 그 달의 1일이 일요일이 아닌 경우 지난달의 마지막 주 일요일부터의 Date 객체를 배열로 가져옵니다.

- useCalenadarHeader : 요일명을 배열로 가져옵니다.
  - 인자로 language와 length를 넘겨서 한글/영어, 축약/전체를 선택할 수 있습니다.

### 업데이트
1. 2024년 공휴일 추가함
1. 일정 mock데이터 추가함

### todo
- component 테스트 작성
