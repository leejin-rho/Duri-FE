import { theme } from "@duri-fe/ui";
import styled from "@emotion/styled"

interface StatusBarProps {
  /** 현재 단계 */
  current: number,
  /** 전체 단계 */
  total: number,
}

const StatusBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  background-color: ${theme.palette.Gray100};
  border-radius: 10px;
`;

const CurrentStatus = styled.div<StatusBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ current, total }) => `${(current / total) * 100}%`};
  height: 6px;
  background-color: ${theme.palette.Normal500};
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
`;

export const StatusBar: React.FC<StatusBarProps> = ({
  current,
  total,
}) => {
  return (
    <StatusBarContainer>
      <CurrentStatus 
        current={current}
        total={total}
      />
    </StatusBarContainer>
  )
}