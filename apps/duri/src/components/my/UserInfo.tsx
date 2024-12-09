import { useNavigate } from 'react-router-dom';

import {
  Call,
  FilledLocation,
  Flex,
  Text,
} from '@duri-fe/ui';

import { ProfileModifyButton } from './ProfileModifyButton';

interface UserInfoProps {
  userId: number;
  userName: string;
  location?: string;
  phone: string;
}

function handleFormatPhone(target: string) {
  target = target
    .replace(/[^0-9]/g, '')
    .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, '$1.$2.$3');
  return target;
}

export const UserInfo = ({
  userId,
  userName,
  location,
  phone,
}: UserInfoProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/my/user', { state: userId });
  return (
    <>
      <Flex justify="space-between" padding="0 6px">
        <Text typo="Heading2">
          {userName}님,
          <br />
          안녕하세요!
        </Text>
        <ProfileModifyButton onClick={handleNavigate}/>
      </Flex>
      <Flex justify="flex-start" gap={6} margin="30px 0 0 0">
        <FilledLocation width={22} height={22} />
        {location ? (
          <Text typo="Label3">{location}</Text>
        ) : (
          <Text typo="Label3">위치를 찾을 수 없습니다.</Text>
        )}
      </Flex>
      <Flex justify="flex-start" gap={10} margin="8px 0 24px 6px">
        <Call width={16} height={16} />
        <Text typo="Label3">{handleFormatPhone(phone)}</Text>
      </Flex>
    </>
  );
};
