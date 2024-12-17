import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Flex,
  Header,
  MobileLayout,
  SalonNavbar,
  Store,
  Text,
  theme,
  Write,
} from '@duri-fe/ui';
import styled from '@emotion/styled';
import { OwnerInfo } from '@salon/components/my/info/OwnerInfo';
import { ShopInfoCard } from '@salon/components/my/info/ShopInfoCard';
import { Status } from '@salon/components/my/info/Status';

const MyPage = () => {
  // const { data: petData, isError: getPetInfoError } = useGetPetInfo();

  const navigate = useNavigate();
  const handleNavigate = (path: string) => navigate(path);

  const logout = () => {
    localStorage.removeItem('authorization_shop');
    navigate('/login');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header />
      <FlexGrow
        direction="column"
        padding="0 18px"
        margin="0 0 100px 0"
        justify="flex-start"
      >
        <OwnerInfo
          shopId={1}
          shopName="댕댕샵"
          image="https://s3-alpha-sig.figma.com/img/5b50/d64c/95d20406ab3b574f56884957339f0d31?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eNE9xuMJQZbEhvL0CtmCDqfkz8U1jH~dmE1ZpS-~hUFKUROxtqXyi74W7h6unp~kUhFSyo7mS-o~t0oiQ8uK3~To9dBh2FGWO35SSXX1rJirRqDyhn31MciCEIsnlbAz0mnrTkPwfawsIxqc4cZLLJ3TYp2G9XiwTOYR8jY3GL567Wr602Vt9iMk5Ajg4GPaRRKhyUf~fAce32ZdmiN1YJNrNBZu1eKGPM0e~4CFNQmr5NSpWVlDCV-S77mnJbWZmO3pk2m3qRJT3dqIh-VXDVscyuhth64eJ4yDb7NpQ0tW80O1d6-qdcqymm3xm1goNdLWcqagfgojaIRZoTQ8Tg__"
        />
        <Flex direction="column" margin="40px 0 0">
          <Status reservationCnt={3} noShowCnt={1} />
          <Flex direction="column" margin="8px 0" gap={8}>
            <ShopInfoCard
              shopId={1}
              shopName="댕댕샵"
              address="서울특별시 강남구 188-16 101호"
              image=""
              shopTag1="노견전문"
              shopTag2="소형견"
              shopTag3="프리미엄"
            />
            <Flex gap={10}>
              <FlexButton
                padding="13px 35px"
                backgroundColor={theme.palette.White}
                borderRadius={8}
                gap={5}
                onClick={() => handleNavigate('/my/income')}
              >
                <Store width={28} height={28} />
                <Text typo="Label1">매출관리</Text>
              </FlexButton>
              <FlexButton
                padding="15px 35px"
                backgroundColor={theme.palette.White}
                borderRadius={8}
                gap={5}
                onClick={() => handleNavigate('/my/review')}
              >
                <Write width={24} height={24} />
                <Text typo="Label1">후기관리</Text>
              </FlexButton>
            </Flex>
          </Flex>
        </Flex>
      </FlexGrow>
      <FlexButton margin="0 0 100px" onClick={logout}>
        <Text typo="Caption2" colorCode={theme.palette.Gray300}>
          로그아웃
        </Text>
      </FlexButton>
      <SalonNavbar />
    </MobileLayout>
  );
};

export default MyPage;

const FlexButton = styled(Flex)`
  cursor: pointer;
`;

const FlexGrow = styled(Flex)`
  flex: 1;
`;
