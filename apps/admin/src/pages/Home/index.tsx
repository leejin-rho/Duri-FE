import { ShopInfoBox, ShopInfoBoxType } from '@admin/components/home/ShopBox';
import {
  Button,
  Doori,
  Flex,
  HeightFitFlex,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

const Home = () => {
  const dummyShopInfo: ShopInfoBoxType[] = [
    {
      shopName: '퍼피스타일',
      shopAddress: '서울특별시 강남구 강남대로 123',
      businessRegistration: '123-45-67890',
      groomerLicense: 'G-00123',
      designerName: '김도그',
      history: 5,
      license: ['소형견 미용 자격증', '중형견 미용 자격증'],
    },
    {
      shopName: '강아지 왕국',
      shopAddress: '서울특별시 서초구 서초대로 456',
      businessRegistration: '987-65-43210',
      groomerLicense: 'G-00567',
      designerName: '박퍼피',
      history: 3,
      license: ['반려견 스타일링 자격증'],
    },
    {
      shopName: '러블리 펫샵',
      shopAddress: '서울특별시 마포구 홍익로 78',
      businessRegistration: '234-56-78901',
      groomerLicense: 'G-00321',
      designerName: '이멍멍',
      history: 8,
      license: ['대형견 미용 자격증', '애견 미용 강사 자격증'],
    },
  ];

  const dummyShopInfo2: ShopInfoBoxType[] = [
    {
      shopName: '퍼피스타일',
      shopAddress: '서울특별시 강남구 강남대로 123',
      businessRegistration: '123-45-67890',
      groomerLicense: 'G-00123',
      designerName: '김도그',
      history: 5,
      license: ['소형견 미용 자격증', '중형견 미용 자격증'],
    },
    {
      shopName: '강아지 왕국',
      shopAddress: '서울특별시 서초구 서초대로 456',
      businessRegistration: '987-65-43210',
      groomerLicense: 'G-00567',
      designerName: '박퍼피',
      history: 3,
      license: ['반려견 스타일링 자격증'],
    },
    {
      shopName: '러블리 펫샵',
      shopAddress: '서울특별시 마포구 홍익로 78',
      businessRegistration: '234-56-78901',
      groomerLicense: 'G-00321',
      designerName: '이멍멍',
      history: 8,
      license: ['대형견 미용 자격증', '애견 미용 강사 자격증'],
    },
    {
      shopName: '개미소',
      shopAddress: '서울특별시 성동구 성수이로 12',
      businessRegistration: '345-67-89012',
      groomerLicense: 'G-00456',
      designerName: '정바크',
      history: 2,
      license: ['반려동물 피부관리 자격증'],
    },
    {
      shopName: '헬로펫',
      shopAddress: '서울특별시 동작구 상도로 98',
      businessRegistration: '456-78-90123',
      groomerLicense: 'G-00678',
      designerName: '최댕댕',
      history: 10,
      license: ['소형견 미용 자격증', '반려견 스타일링 자격증'],
    },
  ];

  return (
    <MobileLayout>
      <Flex direction="column" justify="start" padding="72px 21px">
        <HeightFitFlex justify="start" align="end" gap={10}>
          <Doori width={76} />
          <Text typo="Title3" margin="0 0 -1px">
            관리자
          </Text>
        </HeightFitFlex>

        <HeightFitFlex direction="column" align="start" margin="56px 0 28px">
          <Text typo="Caption1">입점 요청된 가게를 확인해주세요.</Text>
          <Text typo="Title2">들어온 입점 목록</Text>
        </HeightFitFlex>

        <HeightFitFlex direction="column" gap={8} padding="0 6px">
          {dummyShopInfo.map((shop) => {
            const {
              shopName,
              shopAddress,
              businessRegistration,
              groomerLicense,
              designerName,
              history,
              license,
            } = shop;
            return (
              <>
                <ShopInfoBox
                  key={shopName}
                  shopName={shopName}
                  shopAddress={shopAddress}
                  businessRegistration={businessRegistration}
                  groomerLicense={groomerLicense}
                  designerName={designerName}
                  history={history}
                  license={license}
                />
                <HeightFitFlex gap={8} padding="0 14px">
                  <FlexBtn flex="123" bg={theme.palette.Gray20}>
                    <Text typo="Body3">입점 거절</Text>
                  </FlexBtn>
                  <FlexBtn flex="173" bg={theme.palette.Black}>
                    <Text typo="Body3" colorCode={theme.palette.White}>
                      입점 수락
                    </Text>
                  </FlexBtn>
                </HeightFitFlex>
              </>
            );
          })}
        </HeightFitFlex>

        <HeightFitFlex direction="column" align="start" margin="28px 0">
          <Text typo="Caption1">현재 입점되어있는 가게에요!</Text>
          <Text typo="Title2">입점 현황</Text>
        </HeightFitFlex>

        <HeightFitFlex direction="column" gap={8}>
          {dummyShopInfo2.map((shop) => {
            const {
              shopName,
              shopAddress,
              businessRegistration,
              groomerLicense,
              designerName,
              history,
              license,
            } = shop;
            return (
              <ShopInfoBox
                key={shopName}
                shopName={shopName}
                shopAddress={shopAddress}
                businessRegistration={businessRegistration}
                groomerLicense={groomerLicense}
                designerName={designerName}
                history={history}
                license={license}
              />
            );
          })}
        </HeightFitFlex>
      </Flex>
    </MobileLayout>
  );
};

export default Home;

const FlexBtn = styled(Button)<{ flex: string }>`
  border-radius: 8px;
  height: 47px;
  flex: ${({ flex }) => flex};
`;
