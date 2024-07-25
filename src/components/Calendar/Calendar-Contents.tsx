import styled from "styled-components";
import Flex from "../shared/Flex";

function CalnedarContents({
  contents = [{ content: "content1", color: "red" as Color }],
}) {
  return (
    <Flex $direction="column" $gap={6}>
      {contents.map(({ content, color }, idx) => (
        <Container color={color} key={idx}>
          {content}
        </Container>
      ))}
    </Flex>
  );
}

export type Color = "red" | "yellow" | "green" | "purple";

interface ContainerProps {
  isContinue?: boolean;
  color?: Color;
}

const Container = styled.span<ContainerProps>`
  display: block;
  padding: 4px 6px;
  ${({ isContinue }) =>
    isContinue ? "margin-right : -8px;margin-left : -8px;" : null}
  color: var(--${({ color }) => (color ? color : "red")});
  background-color: var(--background-${({ color }) => (color ? color : "red")});
`;

export default CalnedarContents;
