import { CSSProperties } from "react";
import styled from "styled-components";

interface FlexProps {
  $direction?: "row" | "column";
  $gap?: number;
  $justify?: CSSProperties["justifyContent"];
  $align?: CSSProperties["alignItems"];
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ $direction }) => ($direction ? $direction : "row")};
  gap: ${({ $gap }) => ($gap ? $gap + "px" : 0)};
  justify-content: ${({ $justify }) => $justify ?? "flex-start"};
  align-items: ${({ $align }) => $align ?? "center"};
`;

export default Flex;
