import { BottomSheet } from 'react-spring-bottom-sheet';
import { useNavigate } from 'react-router-dom';

import {
  Call,
  DownArrow,
  FilledLocation,
  Flex,
  FrontBtn,
  HardText,
  HeightFitFlex,
  Image,
  RatingStars,
  Send,
  Star,
  Text,
  theme,
  Time,
  WidthFitFlex,
} from '@duri-fe/ui';
import { PetInfo } from '@duri-fe/ui';
import { useBottomSheet } from '@duri-fe/utils';
import styled from '@emotion/styled';

import { DesignerInfo } from './DesignerInfo';
import { SendRequestQBox } from './SendRequesQBox';
import { ShopPhotos } from './ShopPhotos';

export const ShopInfo = () => {
  const navigate = useNavigate();
  const { openSheet, bottomSheetProps } = useBottomSheet({
    maxHeight: 556,
  });

  return (
    <>
      <ShopInfoContainer
        direction="column"
        align="flex-start"
        padding="0 20px 160px 20px"
      >
        <HeightFitFlex justify="flex-start" onClick={() => navigate(-1)}>
          <DownArrow width={42} />
        </HeightFitFlex>

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

        {/**리뷰 */}
        <HeightFitFlex
          direction="column"
          align="flex-start"
          margin="32px 0 0 0"
          gap={24}
        >
          <WidthFitFlex gap={7}>
            <Text typo="Title3">리뷰</Text>
            <WidthFitFlex>
              <Text typo="Label3">4.2</Text>
              <RatingStars score={4.2} size={14} />
              <Text typo="Label3">(120)</Text>
            </WidthFitFlex>
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
                  <Image
                    width={34}
                    height={34}
                    borderRadius={99}
                    src="https://s3-alpha-sig.figma.com/img/7288/e8cb/765917075a0ff1a9f4ef89045ec486ce?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FDDOGuRE9PUwUSJD3az-348Joz46rPqEOTzo5IqA8ObqlYOWwKNvLUsN6Ott~hYM6PfvLpc7Gstq40t4bGUjoZj1LeuJJ62OFG4rT0JD3g5JjzYj4OyvrfkHaUG-0FmlFH15DNpO3Eo~e57ZBR0fvREFHfhkUQQTBXlUjosuiC8T5VRmeQ0LbqXdtcdGADfp5ZhYUqlKIoO-gLyyIBFByAsSEp-6DhDbXP7EXh6-Qu5vnZa2C45f1btioFBhlVaiX2jANivzU54rG8yP-mLq2bm6~fHOqH4hl9ykm0ORTKsfgibi0viOI9foKlB5ADUIY8F1zgXBcb719YuHxLqt8w__"
                  />
                  <WidthFitFlex direction="column" align="flex-start" gap={6}>
                    <Text>사용자 이름</Text>
                    <RatingStars score={4.2} size={12} />
                  </WidthFitFlex>
                </WidthFitFlex>
              </HeightFitFlex>
              <HardText typo="Caption5" colorCode={theme.palette.Gray300}>
                2024-12-26
              </HardText>
            </Flex>
            <Text typo="Label3" margin="8px 0 0 0">
              후기를 작성하는 곳 ~~ 아주 좋았습니다. 후기를작성하는
              칸입니다.후기를작성하는 칸입니다.후기를작성하는 칸입니다.
            </Text>
            <HeightFitFlex
              borderRadius={8}
              padding="6px 12px"
              backgroundColor={theme.palette.Gray_White}
              margin="12px 0 0 0"
            >
              <PetInfo
                themeVariant="compact"
                name="신참이"
                image="https://s3-alpha-sig.figma.com/img/2b3d/3445/169b817c088e24ca9f6999b9f7c18e5a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UNX-HCHQvf6OGFxdmOjpEf~gbzgcXfr7L~ZILgiSxtXRAt2cDJemS7sJOHFn177dH4-rXFgC0mu0iSo4mT02cqw0ybPZ7D-2GK5ch4XLi20GbfJjcy3yPJSXbtOonwpHQFjJDgbjRDu0VK~iz3DJSvLzAjmn5GvFaikpRDWTtJX51eL-YTGIBt7Q1vYxt66nU2dyREh1wb7u5chrtXImto2iEdFviMwJgZKP~f3K1457j~KdS~gM5gtOtm7ozWPTjdraKskNXGJhWWe9wfE74HFPFG~Tj~lY89I2fPd5TNnQI0CCghKbFOLIUyGtrJ0KceIW-gsIic-A3GWQ9IFCyg__"
                age={7}
                breed="시츄"
                gender="여아"
                weight={7.3}
                neutering={true}
              />
            </HeightFitFlex>
          </ShadowFlex>
        </HeightFitFlex>
      </ShopInfoContainer>
      <FrontBtn
        height="53px"
        borderRadius="0"
        bg={theme.palette.Black}
        fontColor={theme.palette.White}
        onClick={openSheet}
      >
        <Send width={18} height={17} color={theme.palette.White} />
        <Text typo="Body2" margin="0 0 0 12px">
          요청서 보내기
        </Text>
      </FrontBtn>
      <BottomSheet {...bottomSheetProps}>
        <SendRequestQBox />
      </BottomSheet>
    </>
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

const ShadowFlex = styled(HeightFitFlex)`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;
