import { theme } from "@duri-fe/ui";
import styled from "@emotion/styled"

interface StatusBarProps {
  /** 현재 단계 */
  current: number,
  /** 전체 단계 */
  total: number,
  /** 온보딩/메인 모드 선택 */
  mode: "onboarding" | "main",
}

interface DotProps {
  size: string,
  color: string,
  opacity: number,
}

const StatusBarContainer = styled.div<StatusBarProps>`
  position: relative;
  width: 100%;
  height: ${({ mode }) => mode === "onboarding" ? "6px" : "3px"};
  background-color: ${({ mode }) => mode === "onboarding" ? theme.palette.Gray100 : theme.palette.Gray50};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CurrentStatus = styled.div<StatusBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ current, total }) => `${(current / total) * 100}%`};
  height: ${({ mode }) => mode === "onboarding" ? "6px" : "3px"};
  background-color: ${theme.palette.Normal500};
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const Dot = styled.div<DotProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
`

export const StatusBar: React.FC<StatusBarProps> = ({
  current,
  total,
  mode,
}) => {
  const dots = Array.from({ length: total+1 }, (_, index) => {
    if (index <= current) {
      return <Dot
        key={index}
        size="5px"
        color={theme.palette.Normal500}
        opacity={0}
      />
    } else {
      return <Dot
        key={index}
        size="5px"
        color={theme.palette.Gray200}
        opacity={1}
      />
    }
  });

  return (
    <StatusBarContainer current={current} total={total} mode={mode}>
      {mode === "main" && dots}
      <CurrentStatus current={current} total={total} mode={mode}>
        {mode === "main" && <Dot size="9px" color={theme.palette.Normal500} opacity={1} />}
      </CurrentStatus>
    </StatusBarContainer>
  )
}