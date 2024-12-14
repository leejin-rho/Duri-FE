import { useNavigate } from 'react-router-dom';

import {
  Call,
  Flex,
  Pencil,
  ProfileImage,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface UserInfoProps {
  name: string;
  phone: string;
  profileImg: string | null;
}

function handleFormatPhone(target: string) {
  return target
    .replace(/[^0-9]/g, '')
    .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, '$1.$2.$3');
}

export const UserInfo = ({ name, phone, profileImg }: UserInfoProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/my/info');
  };

  return (
    <>
      <Flex justify="space-between" padding="0 6px">
        <Text typo="Heading">
          {name}님,
          <br />
          안녕하세요!
        </Text>
        <ProfileImageWrapper onClick={handleNavigate}>
          <ProfileImage
            width={100}
            height={100}
            borderRadius={40}
            src={profileImg === null ? undefined : profileImg}
          />
          <PencilWrapper
            backgroundColor={theme.palette.Black}
            borderRadius={99}
            height={29}
          >
            <Pencil width={17} height={17} />
          </PencilWrapper>
        </ProfileImageWrapper>
      </Flex>
      <Flex justify="flex-start" gap={10} margin="8px 0 24px 6px">
        <Call width={16} height={16} />
        <Text typo="Label3">
          {phone ? handleFormatPhone(phone) : '등록이 안된 전화번호입니다.'}
        </Text>
      </Flex>
    </>
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
