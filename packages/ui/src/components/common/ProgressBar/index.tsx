import styled from "@emotion/styled"

interface ProgressBarProps {
  current: number,
  total: number,
}

const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  background-color: #DFDFE2;
  border-radius: 10px;
`;

const CurrentProgress = styled.div<ProgressBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ current, total }) => `${(current / total) * 100}%`};
  height: 6px;
  background-color: #E0F931;
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
}) => {
  return (
    <ProgressBarContainer>
      <CurrentProgress 
        current={current}
        total={total}
      />
    </ProgressBarContainer>
  )
}

export default ProgressBar;