import { useEffect, useState } from 'react';
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
import { UseGetGroomerInfo } from '@duri-fe/utils';
import {
  GroomerInfoType,
  ShopInfoType,
} from '@duri-fe/utils/src/apis/types/my';
import styled from '@emotion/styled';
import { OwnerInfo } from '@salon/components/my/info/OwnerInfo';
import { ShopInfoCard } from '@salon/components/my/info/ShopInfoCard';
import { Status } from '@salon/components/my/info/Status';
import useGroomerStore from '@salon/stores/groomerStore';

const MyPage = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => navigate(path);

  const groomerId = useGroomerStore((state) => state.groomerId);

  const [shopProfile, setShopProfile] = useState<ShopInfoType>();
  const [groomerProfile, setGroomerProfile] = useState<GroomerInfoType>();

  const { data } = UseGetGroomerInfo({
    groomerId: groomerId,
  });

  useEffect(() => {
    if (data) {
      setGroomerProfile(data.groomerProfileDetail);
      setShopProfile(data.shopProfileDetail);
    }
  }, [data]);

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
        {shopProfile && groomerProfile ? (
          <>
            <OwnerInfo
              shopId={shopProfile.id}
              shopName={shopProfile.name}
              image={groomerProfile.image}
            />
            <Flex direction="column" margin="40px 0 0">
              <Status reservationCnt={3} noShowCnt={1} />
              <Flex direction="column" margin="8px 0" gap={8}>
                <ShopInfoCard
                  shopId={1}
                  shopName={shopProfile.name}
                  address={shopProfile.address}
                  image={shopProfile.imageURL}
                  shopTag1={shopProfile.tags[0]}
                  shopTag2={shopProfile.tags[1]}
                  shopTag3={shopProfile.tags[2]}
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
          </>
        ) : (
          <Text>등록된 정보가 없습니다.</Text>
        )}
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
