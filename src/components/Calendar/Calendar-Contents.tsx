import styled from "styled-components";
import { Color } from "../../types/color";
import Flex from "../shared/Flex";

interface CalnedarContentsProps {
  schedules: { content: string; color: Color }[];
}

function CalnedarContents({ schedules }: CalnedarContentsProps) {
  return (
    <Flex $direction="column" $align="flex-start" $gap={6}>
      {schedules.map(({ content, color }, idx) => (
        <Container color={color} key={idx}>
          {content}
        </Container>
      ))}
    </Flex>
  );
}

interface ContainerProps {
  isContinue?: boolean;
  color?: Color;
}

const Container = styled.span<ContainerProps>`
  display: block;
  width: 100%;
  padding: 4px 6px;
  box-sizing: border-box;
  ${({ isContinue }) =>
    isContinue ? "margin-right : -8px;margin-left : -8px;" : null}
  color: var(--${({ color }) => (color ? color : "red")});
  background-color: var(--background-${({ color }) => (color ? color : "red")});
`;

export default CalnedarContents;
