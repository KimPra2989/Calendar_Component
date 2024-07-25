## 개요
여기저기 쓰는 것 같길래 뷰와 데이터 분리해서 만들어본 캘린더

스펙 : React, TS, Vite, styled-component
![스크린샷 2024-07-25 193355](https://github.com/user-attachments/assets/13c5d13f-ff13-42bb-a319-ada440cc902c)

## 상세
### hook
- useCalendar로 특정 달의 날짜들을 가져올 수 있습니다.
  - 만약 그 달의 1일이 일요일이 아닌 경우 지난달의 일요일부터 Date 배열로 가져옵니다.
 
### todo
- component 테스트 작성
- mock-data를 달력에 연결
- 코드 구조 조금 더 고민해보기
