import styled from "styled-components";

interface FlexProps {
  $direction?: "row" | "column";
  $gap?: number;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ $direction }) => ($direction ? $direction : "row")};
  gap: ${({ $gap }) => ($gap ? $gap + "px" : 0)};
`;

export default Flex;
