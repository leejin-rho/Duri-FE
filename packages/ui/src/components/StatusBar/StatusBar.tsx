import { Flex, theme } from "@duri-fe/ui";
import styled from "@emotion/styled"

interface StatusBarProps {
  /** 현재 단계 */
  current: number,
  /** 전체 단계 */
  total: number,
  /** 온보딩/메인 모드 선택 */
  mode: "onboarding" | "main",
}

export const StatusBar: React.FC<StatusBarProps> = ({
  current,
  total,
  mode,
}) => {
  const dots = Array.from({ length: total+1 }, (_, index) => {
    if (index === 0) {
      return <HiddenDot key={index} width={9} height={9} borderRadius={5} backgroundColor={theme.palette.Normal500} />
    } else if (index <= current) {
      return <Dot key={index} width={9} height={9} borderRadius={5} backgroundColor={theme.palette.Normal500} />
    } else {
      return <Dot key={index} width={5} height={5} borderRadius={5} backgroundColor={theme.palette.Gray200} />
    }
  });

  return (
    <StatusBarContainer
      height={mode === "onboarding" ? "6" : "3"}
      backgroundColor={mode === "onboarding" ? theme.palette.Gray100 : theme.palette.Gray50}
      borderRadius={10}
      justify="space-between"
    >
      {mode === "main" && dots}
      <CurrentStatus
        widthPer={(current / total) * 100}
        height={mode === "onboarding" ? "6" : "3"}
        backgroundColor={theme.palette.Normal500}
        borderRadius={10}
        justify="end"
      >
      </CurrentStatus>
    </StatusBarContainer>
  )
}

const StatusBarContainer = styled(Flex)`
  position: relative;
`;

const CurrentStatus = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  transition: width 0.5s ease-in-out;
`;

const HiddenDot = styled(Flex)`
  visibility: hidden;
`;

const Dot = styled(Flex)``;