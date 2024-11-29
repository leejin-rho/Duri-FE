import { Flex, Polygon, Text, theme } from "@duri-fe/ui";
import styled from "@emotion/styled";

interface SpeechBallonProps {
  label: string;
  textColor: string;
}

export const SpeechBallon = ({
  label,
  textColor,
}: SpeechBallonProps) => {
  return (
    <Container
      backgroundColor={theme.palette.White}
      borderRadius={99}
      height={36}
    >
      <SpeechBallonBody
        padding="10px"
      >
        <Text typo="Body3" colorCode={textColor}>{label}</Text>
      </SpeechBallonBody>
      <SpeechBallonTail width={13} height={13}>
        <Polygon />
      </SpeechBallonTail>
    </Container>
  )
}

const Container = styled(Flex)`
  position: relative;
  box-shadow: 0 0 7.5px rgba(0, 0, 0, 0.1);
  width: fit-content;
`

const SpeechBallonBody = styled(Flex)`
  /* position: relative; */
  min-width: 160px;
  width: fit-content;
`

const SpeechBallonTail = styled(Flex)`
  position: absolute;
  bottom: -10px;
`