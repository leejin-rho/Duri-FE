import salonDefault from '@assets/images/pngs/salonDefault.png';
import {
  Call,
  FilledLocation,
  Flex,
  HeightFitFlex,
  Star,
  Text,
  theme,
  Time,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

import { DesignerInfo } from './DesignerInfo';
import { ShopPhotos } from './ShopPhotos';

export const ShopInfo = () => {
  return (
    <ShopInfoContainer
      direction="column"
      align="flex-start"
      padding="0 20px 112px 20px"
    >
      <MainImg
        src={
          'https://s3-alpha-sig.figma.com/img/b451/cdeb/1b126206922d93851b0f7d50c8e39562?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZI~FkT7vXniXT8Kwm-tEkVdtP0PUf8YfdcOEtpO0P1PQAJlG6dJz-VvaTRl8k-IiXvleuMayGOw8k53CfVHh7Qnw9Q0U9QRyhDZ71dxK7NWKSghjD6O4LcTalyZ0-RNYovDwZEfc90WDYmHid49LMyhX0qlxFyhNQtqKt-dvtu92SGG1LiTbKkH3xoeLg3QsJBTezqIvQA7UE16KuPQx-73RML9nR3gPs9~69sI-Aw3lcZC8s0xEo9lIqZ-WhjbyRWdFoXYpl8TDM8x160IDZG51zx-R3n-OFoaLHYntEj2jZchfuKNsX8GJvN6ia8XCouQ5bdvPU2lBWNDAdx9EcA__'
        }
      />
      {/**헤더 */}
      <Flex direction="column" gap={8}>
        <Flex gap={17} justify="flex-start">
          <Text typo="Body2">댕댕샵</Text>
          <WidthFitFlex gap={7}>
            <Star width={14} />
            <Text typo="Label3">4.9 (120)</Text>
          </WidthFitFlex>
        </Flex>

        <Flex gap={17} justify="flex-start">
          <FilledLocation width={22} />
          <TextLine typo="Caption3" colorCode={theme.palette.Gray400}>
            <MarkText>{`354m | `}</MarkText>
            주소
          </TextLine>
        </Flex>

        <Flex gap={17} justify="flex-start">
          <Call width={16} />
          <Text typo="Caption3" colorCode={theme.palette.Link}>
            02-111-1111
          </Text>
        </Flex>

        <Flex gap={17} justify="flex-start">
          <Time width={16} />
          <Text typo="Caption3">9:00 ~ 1800</Text>
        </Flex>
      </Flex>

      <Flex
        justify="flex-start"
        backgroundColor={theme.palette.Gray_White}
        padding="15px 16px"
        borderRadius={12}
      >
        <TextHeight typo="Caption1" colorCode={theme.palette.Gray500}>
          안녕하세요! <br />
          꼼꼼하고 소중히 미용하는 댕댕샵입니다.
        </TextHeight>
      </Flex>

      {/**디자이너 */}
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

      {/**샵 내부 */}
      <Text typo="Title3">샵 내부</Text>
      <ShopPhotos />

      {/**리뷰 */}
      <WidthFitFlex gap={7}>
        <Text typo="Title3">리뷰</Text>
        <Star width={14} />
        <Text typo="Label3">4.9 (120)</Text>
      </WidthFitFlex>
      <ShadowFlex
        direction="column"
        gap={8}
        align="flex-start"
        padding="15px 17px"
        borderRadius={16}
      >
        <Flex justify="flex-start">
          <HeightFitFlex justify="space-between">
            <WidthFitFlex gap={16}>
              <ReviewerImg src={salonDefault} />
              <WidthFitFlex direction="column" align="flex-start" gap={2}>
                <Text>사용자 이름</Text>
                <Star width={12} />
              </WidthFitFlex>
            </WidthFitFlex>
          </HeightFitFlex>
          <Text typo="Caption5" colorCode={theme.palette.Gray300}>
            2024-12-26
          </Text>
        </Flex>
        <Text>후기를 작성하는 곳 ~~ 아주 좋았습니다</Text>
        <HeightFitFlex
          gap={20}
          backgroundColor={theme.palette.Gray_White}
          padding="12px"
          margin="16px 0 0 0"
        >
          <PetImg src={salonDefault} />
          <Flex direction="column" align="flex-start">
            <Text>신참이</Text>
            <Flex justify="flex-start">
              <Text>시츄,</Text> <Text>암컷,</Text> <Text>7세,</Text>
              <Text>7.3kg</Text>
            </Flex>
          </Flex>
        </HeightFitFlex>
      </ShadowFlex>
    </ShopInfoContainer>
  );
};
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

const ReviewerImg = styled.img`
  display: flex;
  width: 34px;
  height: 34px;
  border-radius: 99px;
`;

const PetImg = styled.img`
  display: flex;
  width: 77px;
  height: 77px;
  border-radius: 99px;
`;

const ShadowFlex = styled(HeightFitFlex)`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;
