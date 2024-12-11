// import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import {
  DuriNavbar,
  Flex,
  HardText,
  Header,
  HeightFitFlex,
  Image,
  MobileLayout,
  RelativeFlex,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

const PortfolioDetail = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <RelativeFlex direction="column">
        <AbsoluteHeader
          backIcon={true}
          titleAlign="center"
          iconColor={theme.palette.White}
          onClickBack={() => navigate(-1)}
        />
        <AbsoluteWrapper>
          <Image
            height={439}
            src="https://s3-alpha-sig.figma.com/img/d8b5/f1ea/d9f377b90e254c2d1e40889b6d031880?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IRmjkp6U9smf2nODfEC6jVhKAe0R5ELxQocWnpkVcuK3FS0Pe6ks2UVP5Dj~L~h9JHSRMFNhM7pH-EjYfoQx5FI7GSyxLlpT1HGDtzhbfD5RaSzc7ufC-FxnBXvbyqYe8ioQY6WjmwYuJ5HAH-JAn6WV~uwGtdx5~I66pU2WBEEVMpqFzSJ2m5QVzuVNSPbc1diZFdaSykNfrWruUfq4-3tQmfKMOyFVr~cJiwEq6RGhSUkflnG~NTqFbBH5jjn9UoP9BQPJLA11hyXWKHYTZSeoSIRcPtt7KSHDL9DI~etLDo8TnaiGK0xq6NeBJhB5vEoxbB0PRXPsbIwSu6Iwzw__"
          />
        </AbsoluteWrapper>
      </RelativeFlex>

      {/** 피드백 및 후기 */}

      <Flex
        direction="column"
        margin="375px 0 152px 0"
        padding="0 24px"
        gap={14}
      >
        <Flex justify="space-between">
          <WidthFitFlex gap={16}>
            <Image
              width={34}
              height={34}
              borderRadius={99}
              src="https://s3-alpha-sig.figma.com/img/7288/e8cb/765917075a0ff1a9f4ef89045ec486ce?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FDDOGuRE9PUwUSJD3az-348Joz46rPqEOTzo5IqA8ObqlYOWwKNvLUsN6Ott~hYM6PfvLpc7Gstq40t4bGUjoZj1LeuJJ62OFG4rT0JD3g5JjzYj4OyvrfkHaUG-0FmlFH15DNpO3Eo~e57ZBR0fvREFHfhkUQQTBXlUjosuiC8T5VRmeQ0LbqXdtcdGADfp5ZhYUqlKIoO-gLyyIBFByAsSEp-6DhDbXP7EXh6-Qu5vnZa2C45f1btioFBhlVaiX2jANivzU54rG8yP-mLq2bm6~fHOqH4hl9ykm0ORTKsfgibi0viOI9foKlB5ADUIY8F1zgXBcb719YuHxLqt8w__"
            />
            <Text typo="Title1">김댕댕</Text>
          </WidthFitFlex>
          <HardText typo="Caption4" colorCode={theme.palette.Gray400}>
            2024-12-25
          </HardText>
        </Flex>

        <Flex>
          <LetterBox
            padding="20px 16px"
            backgroundColor={theme.palette.Gray_White}
          >
            <Text typo="Letter">
              너무 행복했던 뽀삐와의 미용이 있었어요 :D 너무 얌전하게 미용
              잘받고간 우리 뽀삐에게 박수^~^ 뽀삐 너무 귀여워요 우리 뽀삐 최고~
            </Text>
          </LetterBox>
        </Flex>
      </Flex>

      <DuriNavbar />
    </MobileLayout>
  );
};

export default PortfolioDetail;

const AbsoluteHeader = styled(Header)`
  position: absolute;
`;

const AbsoluteWrapper = styled(HeightFitFlex)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const LetterBox = styled(Flex)`
  border-radius: 0px 16px 16px 16px;
`;
