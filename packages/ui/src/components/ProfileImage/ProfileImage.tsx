import { Flex, Image, Profile, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface ProfileImageProps {
  width: number;
  height: number;
  borderRadius: number;
  src?: string;
  iconSize?: number;
}

export const ProfileImage = ({
  width,
  height,
  borderRadius,
  src,
  iconSize = 52,
}: ProfileImageProps) => {
  return src && src !== '' ? (
    <ProfileContainer
      width={width}
      height={height}
      backgroundColor={theme.palette.Gray20}
      borderRadius={borderRadius}
    >
      <Image width={width} height={height} src={src} alt="프로필 사진" />
    </ProfileContainer>
  ) : (
    <ProfileContainer
      width={width}
      height={width}
      backgroundColor={theme.palette.Gray20}
      borderRadius={borderRadius}
    >
      <Profile
        width={iconSize}
        height={iconSize}
        color={theme.palette.Gray200}
      />
    </ProfileContainer>
  );
};

const ProfileContainer = styled(Flex)`
  flex-shrink: 0;
  overflow: hidden;
`;
