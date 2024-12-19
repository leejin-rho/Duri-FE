import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoadingGIF from '@assets/images/gifs/Final_renderfile.gif';
import BabyCut from '@assets/images/pngs/BabyCut.png';
import BearCut from '@assets/images/pngs/BearCut.png';
import GuideDog1 from '@assets/images/pngs/GuideDog1.png';
import GuideDog2 from '@assets/images/pngs/GuideDog2.png';
import GuideDog3 from '@assets/images/pngs/GuideDog3.png';
import LionCut from '@assets/images/pngs/LionCut.png';
import { AIHeader } from '@duri/components/dooriAI/AIHeader';
import {
  Flex,
  FrontBtn,
  HeightFitFlex,
  Image,
  MobileLayout,
  Text,
  theme,
  UploadIcon,
  WidthFitFlex,
} from '@duri-fe/ui';
import { UsePostAIStyling } from '@duri-fe/utils';
import styled from '@emotion/styled';

const AIStyling = () => {
  const [imageFile, setImageFile] = useState<File | undefined>();
  const [imageURL, setImageURL] = useState<string | undefined>();

  const [selectedStyle, setSelectedStyle] = useState<
    '라이언' | '테디베어' | '베이비' | null
  >(null);

  const navigate = useNavigate();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const fileURL = URL.createObjectURL(file);
      setImageURL(fileURL);
    }
  };

  const handleStyleSelect = (
    style: '라이언' | '테디베어' | '베이비' | null,
  ) => {
    setSelectedStyle(style);
  };

  const isButtonActive = imageFile && selectedStyle;

  const {
    mutate,
    isPending,
    isSuccess,
    data: AIdata,
  } = UsePostAIStyling({
    options: {
      onSuccess: () => {
        console.log('User created successfully!');
      },
      onError: (err) => {
        console.error('Error creating user:', err);
      },
    },
  });

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('image', imageFile as File);

    if (formData) {
      mutate({ styleText: selectedStyle, image: formData });
    }
  };

  if (isPending) {
    return (
      <MobileLayout backgroundColor={theme.palette.Black}>
        <GIFWrapper direction="column" padding="40px 20px 0 20px">
          <AIHeader />
          <Flex
            direction="column"
            backgroundColor={theme.palette.Black}
            gap={28}
            padding="0 0 123px"
          >
            <Flex height={55}>
              <LoadingGIFImg src={LoadingGIF} alt="loading indicator" />
            </Flex>
            <Text typo="Title2" colorCode={theme.palette.White}>
              새로운 스타일로 변화 중...
            </Text>
          </Flex>
        </GIFWrapper>
      </MobileLayout>
    );
  }

  if (isSuccess) {
    navigate('/ai/result', { state: { resultImage: AIdata } });
  }

  return (
    <MobileLayout backgroundColor={theme.palette.Black}>
      <Flex direction="column" padding="40px 20px 130px 20px">
        <AIHeader />
        <FileInputWrapper>
          <input type="file" onChange={handleFileUpload} />
          {imageURL ? (
            <Image src={imageURL} />
          ) : (
            <Flex
              backgroundColor={theme.palette.Gray900}
              height={415}
              borderRadius={24}
              gap={5}
            >
              <UploadIcon width={22} />
              <Text typo="Label3" colorCode={theme.palette.White}>
                사진 업로드
              </Text>
            </Flex>
          )}
        </FileInputWrapper>
        <HeightFitFlex
          direction="column"
          gap={19}
          align="start"
          margin="21px 0 0"
        >
          <Text typo="Title2" colorCode={theme.palette.White}>
            스타일 선택
          </Text>

          <HeightFitFlex gap={8} justify="start">
            <SelectableImage
              src={LionCut}
              alt="LionCut"
              selected={selectedStyle === '라이언'}
              onClick={() => handleStyleSelect('라이언')}
            />
            <SelectableImage
              src={BearCut}
              alt="BearCut"
              selected={selectedStyle === '테디베어'}
              onClick={() => handleStyleSelect('테디베어')}
            />
            <SelectableImage
              src={BabyCut}
              alt="BabyCut"
              selected={selectedStyle === '베이비'}
              onClick={() => handleStyleSelect('베이비')}
            />
          </HeightFitFlex>
        </HeightFitFlex>
        <HeightFitFlex
          direction="column"
          gap={8}
          align="start"
          margin="33px 0 16px"
        >
          <Text typo="Caption1" colorCode={theme.palette.Normal500}>
            이런 사진은 지양해주세요😢
          </Text>
          <Text typo="Title2" colorCode={theme.palette.White}>
            주의사항
          </Text>
        </HeightFitFlex>
        <CautionList>
          <li>
            <Text typo="Caption1" colorCode={theme.palette.White}>
              1. 깔끔한 배경에서 촬영된 사진이면 더욱 좋아요.
            </Text>
          </li>
          <li>
            <Text typo="Caption1" colorCode={theme.palette.White}>
              2. 측면보다는 정면사진을 업로드해주세요.
            </Text>
          </li>
          <li>
            <Text typo="Caption1" colorCode={theme.palette.White}>
              3. 얼굴이 가려진 사진은 인식에 실패할 수 있어요.
            </Text>
          </li>
        </CautionList>
        <GuideImageList
          justify="flex-start"
          padding="0 10px"
          gap={26}
          margin="21px 0 0"
        >
          <WidthFitFlex gap={17}>
            <Image src={GuideDog1} width={80} alt="GuideDogPhoto1" />
            <CautionList>
              <li>
                <Text typo="Caption1" colorCode={theme.palette.White}>
                  ⭕️ 깔끔한 배경
                </Text>
              </li>
              <li>
                <Text typo="Caption1" colorCode={theme.palette.White}>
                  ⭕ 정면
                </Text>
              </li>
              <li>
                <Text typo="Caption1" colorCode={theme.palette.White}>
                  ⭕ 가리지않은 얼굴
                </Text>
              </li>
            </CautionList>
          </WidthFitFlex>
          <WidthFitFlex gap={17}>
            <Image src={GuideDog2} width={80} alt="GuideDogPhoto2" />
            <CautionList>
              <li>
                <Text typo="Caption1" colorCode={theme.palette.White}>
                  ❌ 얼굴을 가리면 안돼요
                </Text>
              </li>
            </CautionList>
          </WidthFitFlex>
          <WidthFitFlex gap={17}>
            <Image src={GuideDog3} width={80} alt="GuideDogPhoto3" />
            <CautionList>
              <li>
                <Text typo="Caption1" colorCode={theme.palette.White}>
                  ❌ 측면사진은 안돼요
                </Text>
              </li>
              <li>
                <Text typo="Caption1" colorCode={theme.palette.White}>
                  ❌ 깔끔한 배경이여야 더 좋아요
                </Text>
              </li>
            </CautionList>
          </WidthFitFlex>
        </GuideImageList>
        {isButtonActive && (
          <SubmitButton onClick={handleSubmit}>
            <Text typo="Body2">
              {selectedStyle === '라이언'
                ? '사자'
                : selectedStyle === '테디베어'
                  ? '곰돌이'
                  : '베이비'}
              컷 생성하기
            </Text>
          </SubmitButton>
        )}
      </Flex>
    </MobileLayout>
  );
};

export default AIStyling;

const FileInputWrapper = styled.label`
  display: block;
  width: 100%;
  cursor: pointer;
  input {
    display: none;
  }
`;

const CautionList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 12px;
`;

const GuideImageList = styled(HeightFitFlex)`
  overflow-x: auto;
  flex-wrap: nowrap;
  white-space: nowrap;
`;

const SelectableImage = styled(Image)<{ selected: boolean }>`
  width: 105px;
  box-sizing: border-box;
  border: ${({ selected }) =>
    selected ? `4px solid ${theme.palette.Normal500}` : 'none'};
  border-radius: 24px;
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? `1` : '0.7')};

  &:hover {
    opacity: 1;
  }
`;

const SubmitButton = styled(FrontBtn)`
  position: fixed;
  bottom: 0;
  height: 53px;
  border-radius: 0;
`;

const GIFWrapper = styled(Flex)`
  height: 100vh;
`;

const LoadingGIFImg = styled.img`
  width: 115px;
  height: 66px;
`;
