
import { Pencil, ProfileImage, theme, WidthFitFlex } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const ProfileModifyButton = ({
  onClick,
}: {
  onClick: () => void | Promise<void>;
}) => {
  return (
    <ProfileImageWrapper onClick={onClick}>
      <ProfileImage width={100} height={100} borderRadius={40} />
      <PencilWrapper
        backgroundColor={theme.palette.Black}
        borderRadius={99}
        height={29}
      >
        <Pencil width={17} height={17} />
      </PencilWrapper>
    </ProfileImageWrapper>
  );
};

const ProfileImageWrapper = styled(WidthFitFlex)`
  position: relative;
  cursor: pointer;
`;
const PencilWrapper = styled(WidthFitFlex)`
  position: absolute;
  border: 1.094px solid ${theme.palette.White};
  padding: 6px;
  top: 76px;
  left: 74px;
`;
