import { useNavigate } from 'react-router-dom';

import {
  Call,
  FilledLocation,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  SalonNavbar,
  Star,
  Text,
  theme,
  Time,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';
import { ShopPhotos } from '@salon/components/my/ShopPhotos';

import { DesignerInfo } from './DesignerInfo';

const MyShopPage = () => {
  const navigate = useNavigate();
  const handleClickBackButton = () => {
    navigate('/');
  };

  return (
    <MobileLayout>
      <Header title="마이샵" backIcon onClickBack={handleClickBackButton} />
      <ShopInfoContainer
        direction="column"
        align="flex-start"
        padding="0 20px 137px"
      >
        <MainImg
          src={
            'https://s3-alpha-sig.figma.com/img/b451/cdeb/1b126206922d93851b0f7d50c8e39562?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZI~FkT7vXniXT8Kwm-tEkVdtP0PUf8YfdcOEtpO0P1PQAJlG6dJz-VvaTRl8k-IiXvleuMayGOw8k53CfVHh7Qnw9Q0U9QRyhDZ71dxK7NWKSghjD6O4LcTalyZ0-RNYovDwZEfc90WDYmHid49LMyhX0qlxFyhNQtqKt-dvtu92SGG1LiTbKkH3xoeLg3QsJBTezqIvQA7UE16KuPQx-73RML9nR3gPs9~69sI-Aw3lcZC8s0xEo9lIqZ-WhjbyRWdFoXYpl8TDM8x160IDZG51zx-R3n-OFoaLHYntEj2jZchfuKNsX8GJvN6ia8XCouQ5bdvPU2lBWNDAdx9EcA__'
          }
        />
        {/**헤더 */}
        <HeightFitFlex direction="column" gap={8} margin="24px 0 0 0">
          <Flex gap={17} justify="flex-start" margin="0 0 9px 0">
            <Text typo="Body2">댕댕샵</Text>
            <WidthFitFlex gap={7}>
              <Star width={14} />
              <Text typo="Label3">4.9 (120)</Text>
            </WidthFitFlex>
          </Flex>

          <Flex gap={6} justify="flex-start">
            <FilledLocation width={21} />
            <TextLine typo="Caption3" colorCode={theme.palette.Gray400}>
              <MarkText>{`354m | `}</MarkText>
              서울특별시 강남구 188-16 101호
            </TextLine>
          </Flex>

          <Flex gap={10} justify="flex-start" margin="0 0 0 4px">
            <Call width={16} />
            <Text typo="Caption3" colorCode={theme.palette.Link}>
              02-111-1111
            </Text>
          </Flex>

          <Flex gap={10} justify="flex-start" margin="0 0 0 4px">
            <Time width={16} />
            <Text typo="Caption3">9:00 ~ 18:00</Text>
          </Flex>
        </HeightFitFlex>

        <HeightFitFlex
          justify="flex-start"
          backgroundColor={theme.palette.Gray_White}
          padding="15px 16px"
          borderRadius={12}
          margin="26px 0 0 0"
        >
          <TextHeight typo="Caption2" colorCode={theme.palette.Gray500}>
            안녕하세요! <br />
            꼼꼼하고 소중히 미용하는 댕댕샵입니다.
          </TextHeight>
        </HeightFitFlex>

        {/**디자이너 */}
        <HeightFitFlex
          direction="column"
          margin="18px 0"
          align="flex-start"
          gap={24}
        >
          <Text typo="Title3">디자이너 소개</Text>
          <DesignerInfo
            version="vertical"
            designerId={1}
            name="김댕댕"
            age={30}
            gender="남성"
            experience={5}
            roles={['반려견 스타일리스트', '펫테이너']}
            imageUrl="https://s3-alpha-sig.figma.com/img/06a3/855c/666ff7b8f7c18c7121369ac3b3132d84?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHnZaYFZ9lw11funsRnXLgiFg5Rwsg7mFn7dItWEmC-GWXDmtViBiw1KYXRDvjiutCH3s32c4r2kyPD10nx86gKJxZJWeJMVAfXaTRJVMlkBDHRajnbgbaQXd1s7JKwyNMZVxf64jzNBjyrhdCPZJk8npT8Ubb-OKkhsHGIq2zn9soSWjKqcmV9nsclfu6hFEnQlnUi77tBHKLROr8baKtikIlyYVqvOencSVUwSi~tU2Yq4DE3zhHyt9oVhIFwPcxAmS8M8d245IgP4Oehq2FUHEPyxExXdlVW6iZdRSas0SojaIv3ksehA3EH-8IMraM1RQGixX~iXhGZj6OPPtg__"
          />
        </HeightFitFlex>

        {/**샵 내부 */}
        <HeightFitFlex
          direction="column"
          gap={24}
          margin="36px 0 0 0"
          align="flex-start"
        >
          <Text typo="Title3">샵 내부</Text>
          <ShopPhotos />
        </HeightFitFlex>
      </ShopInfoContainer>
      <SalonNavbar />
    </MobileLayout>
  );
};

export default MyShopPage;

const ShopInfoContainer = styled(Flex)`
  overflow-y: auto;
`;

const MarkText = styled.span`
  font-weight: 600;
`;

const TextLine = styled(Text)`
  display: inline;
`;

const TextHeight = styled(Text)`
  line-height: 140%;
`;

const MainImg = styled.img`
  width: 100%;
  aspect-ratio: 330 / 180;
  border-radius: 12px;
  object-fit: cover;
`;
