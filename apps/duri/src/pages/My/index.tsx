import { useNavigate } from 'react-router-dom';

import { PetInfoCard } from '@duri/components/my/PetInfoCard';
import { Status } from '@duri/components/my/Status';
import { UserInfo } from '@duri/components/my/UserInfo';
import {
  DuriNavbar,
  Flex,
  Header,
  MobileLayout,
  Scissors,
  Store,
  Text,
  theme,
  Write,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

const MyPage = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => navigate(path);
  const logout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Flex direction="column" padding="0 18px" margin="0 0 100px 0">
        <Header />
        <UserInfo userId={1} userName="김찬별" phone="01051778747" />
        <Status reservationCnt={3} noShowCnt={0} />
        <PetInfoCard
          petId={1}
          age={4}
          name="신참이"
          breed="시츄"
          gender="F"
          neutering={true}
          weight={3.5}
          imageURL={undefined}
        />

        <Flex direction="column" margin="8px 0" gap={8}>
          <Flex gap={10}>
            <FlexButton
              padding="13px 35px"
              backgroundColor={theme.palette.White}
              borderRadius={8}
              gap={10}
              onClick={() => handleNavigate('/my/shop')}
            >
              <Store width={28} height={28} />
              <Text typo="Label1">단골가게</Text>
            </FlexButton>
            <FlexButton
              padding="15px 35px"
              backgroundColor={theme.palette.White}
              borderRadius={8}
              gap={10}
              onClick={() => handleNavigate('/my/history')}
            >
              <Scissors width={24} height={24} />
              <Text typo="Label1">이용기록</Text>
            </FlexButton>
          </Flex>
          <FlexButton
            padding="13px 35px"
            backgroundColor={theme.palette.White}
            borderRadius={8}
            gap={10}
            onClick={() => handleNavigate('/my/review')}
          >
            <Write width={18} height={18} />
            <Text typo="Label1">내가 쓴 후기</Text>
          </FlexButton>
        </Flex>
        <FlexButton margin="40px 0 0 0" onClick={logout}>
          <Text typo="Caption2" colorCode={theme.palette.Gray300}>
            로그아웃
          </Text>
        </FlexButton>
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default MyPage;

const FlexButton = styled(Flex)`
  cursor: pointer;
`;
