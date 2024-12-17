import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  Flex,
  FrontBtn,
  Header,
  MobileLayout,
  PetInfo,
  SalonNavbar,
  Seperator,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import { css } from '@emotion/react';
import MainInputContainer from '@salon/components/feedback/MainInputContainer';
import PetBehaviorContainer from '@salon/components/feedback/PetBehaviorContainer';
import PortfolioInputContainer from '@salon/components/feedback/PortfolioInputContainer';

const petData = {
  id: 1,
  image:
    'https://duri-cicd-bucket.s3.ap-northeast-2.amazonaws.com/review/b32e28b0-d88e-4a03-a05a-aa701fcc627d_6천원.jpg',
  name: 'string',
  age: 0,
  gender: 'M',
  breed: 'string',
  weight: 0,
  neutering: true,
  character: ['string'],
  diseases: ['string'],
  lastGrooming: '2024-12-06T18:00:00.000+00:00',
};

const userData = {
  name: '심승보',
  phone: '010-7664-6286',
};

export interface FeedBackRequestType {
  friendly: string;
  reaction: string;
  behavior: string;
  noticeContent: string;
  portfolioContent: string;
  expose: boolean;
}

const FeedBackPage = () => {
  const navigate = useNavigate();
  // const { state } = useLocation();
  // const { quotationId } = state;
  // TODO: quotationId로 요청해서 펫, 보호자 데이터 받아오기
  /**
   "friendly": "string",
  "reaction": "string",
  "behavior": "string",
  "noticeContent": "string",
  "portfolioContent": "string",
  "expose": true
 */
  const [newFeedbackRequest, setNewFeedbackRequest] =
    useState<FeedBackRequestType>({
      friendly: '',
      reaction: '',
      behavior: '',
      noticeContent: '',
      portfolioContent: '',
      expose: true,
    });

  const [feedbackImageList, setFeedbackImageList] = useState<File[]>([]);

  const handleSubmitFeedback = async () => {
    console.log(newFeedbackRequest);
    const formData = new FormData();

    formData.append(
      'newFeedbackRequest',
      new Blob([JSON.stringify(newFeedbackRequest)], {
        type: 'application/json',
      }),
    );

    feedbackImageList.forEach((image) => {
      formData.append('image', image);
    });

    // TODO: 피드백 POST
    console.log(formData);
  };

  return (
    <MobileLayout>
      <form onSubmit={handleSubmitFeedback}>
        <Flex direction="column" padding="0 0 160px">
          <Header
            backIcon
            title="일지 쓰기"
            titleAlign="start"
            onClickBack={() => navigate(-1)}
          />
          <Flex padding="16px 20px">
            <Card
              height="235px"
              borderRadius={16}
              padding="12px 12px 16px 12px"
            >
              <PetInfo
                image={petData.image}
                name={petData.name}
                breed={petData.breed}
                gender={petData.gender}
                age={petData.age}
                weight={petData.weight}
                neutering={petData.neutering}
                character={petData.character}
                diseases={petData.diseases}
                themeVariant="spacious"
              />
            </Card>
          </Flex>

          <Seperator />

          <Flex padding="16px 22px" justify="space-between">
            <Text typo="Title3">보호자</Text>
            <WidthFitFlex gap={16}>
              <Text typo="Body2" css={FontWeightLight}>
                {userData.name}
              </Text>
              <Text
                typo="Body2"
                css={FontWeightLight}
                colorCode={theme.palette.Gray500}
              >
                {userData.phone}
              </Text>
            </WidthFitFlex>
          </Flex>

          <Seperator />

          <Flex padding="16px 20px" direction="column" align="flex-start">
            <MainInputContainer
              feedbackImageList={feedbackImageList}
              setFeedbackImageList={setFeedbackImageList}
              newFeedbackRequest={newFeedbackRequest}
              setNewFeedbackRequest={setNewFeedbackRequest}
            />
          </Flex>

          <Flex padding="16px 0" direction="column" align="flex-start">
            <PetBehaviorContainer />
          </Flex>

          <Flex padding="16px 20px" direction="column" align="flex-start">
            <Text typo="Title2">포트폴리오 노출 설정</Text>
          </Flex>

          <Flex padding="16px 20px" direction="column" align="flex-start">
            <PortfolioInputContainer />
          </Flex>
        </Flex>

        <FrontBtn
          height="53px"
          bg={theme.palette.Black}
          borderRadius="0"
          onClick={handleSubmitFeedback}
        >
          <Text typo="Body2" colorCode={theme.palette.White}>
            완료
          </Text>
        </FrontBtn>
      </form>

      <SalonNavbar />
    </MobileLayout>
  );
};

export default FeedBackPage;

const FontWeightLight = css`
  font-weight: 400;
`;
