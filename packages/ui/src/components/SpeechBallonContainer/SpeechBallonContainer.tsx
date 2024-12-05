import { Flex, SpeechBallon, Text } from "@duri-fe/ui";
import styled from "@emotion/styled";

interface SpeechBallonProps {
  label: string;
  textColor: string;
}

export const SpeechBallonContainer = ({
  label,
  textColor,
}: SpeechBallonProps) => {
  return (
    <Container>
      <SpeechBallon height={46} />
      <Label typo="Body3" colorCode={textColor}>{label}</Label>
    </Container>
  )
}

const Container = styled(Flex)`
  position: relative;
  width: fit-content;
  filter: drop-shadow(0px 0px 7.5px rgba(0, 0, 0, 0.10));
`

const Label = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(25%, 75%);
`