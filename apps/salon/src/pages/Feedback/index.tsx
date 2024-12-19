import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Card,
  Flex,
  FrontBtn,
  Header,
  MobileLayout,
  PetInfo,
  SalonNavbar,
  Seperator,
  SkeletonCard,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import { useGetPetInfoByQuotationId, usePostFeedback } from '@duri-fe/utils';
import { css } from '@emotion/react';
import MainInputContainer from '@salon/components/feedback/MainInputContainer';
import PetBehaviorContainer from '@salon/components/feedback/PetBehaviorContainer';
import PortfolioInputContainer from '@salon/components/feedback/PortfolioInputContainer';

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
  const { state } = useLocation();
  const { quotationId } = state;

  const { data: petAndUserInfo } = useGetPetInfoByQuotationId({
    quotationId: quotationId,
  });

  const { mutateAsync: postFeedback } = usePostFeedback();

  const {
    petProfileResponse = {
      id: 0,
      image: '',
      name: '',
      age: 0,
      gender: '',
      breed: '',
      weight: 0,
      neutering: false,
      character: [],
      diseases: [],
      lastGrooming: '',
    },
    customerName,
    customerPhone,
  } = petAndUserInfo || {};

  const [newFeedbackRequest, setNewFeedbackRequest] =
    useState<FeedBackRequestType>({
      friendly: '',
      reaction: '',
      behavior: '',
      noticeContent: '',
      portfolioContent: '',
      expose: true,
    });
  const {
    friendly,
    reaction,
    behavior,
    noticeContent,
    portfolioContent,
    expose,
  } = newFeedbackRequest;

  const [feedbackImageList, setFeedbackImageList] = useState<File[]>([]);

  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (expose) {
      setIsValid(
        feedbackImageList.length > 0 &&
          noticeContent !== '' &&
          friendly !== '' &&
          reaction !== '' &&
          behavior !== '' &&
          portfolioContent !== '',
      );
    } else {
      setIsValid(
        noticeContent !== '' &&
          friendly !== '' &&
          reaction !== '' &&
          behavior !== '',
      );
    }
  }, [newFeedbackRequest, feedbackImageList]);

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
    await postFeedback({
      quotationId: quotationId,
      formData: formData,
    });
    navigate(-1);
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
            {petAndUserInfo ? (
              <Card
                height="235px"
                borderRadius={16}
                padding="12px 12px 16px 12px"
              >
                <PetInfo
                  image={petProfileResponse.image}
                  name={petProfileResponse.name}
                  breed={petProfileResponse.breed}
                  gender={petProfileResponse.gender}
                  age={petProfileResponse.age}
                  weight={petProfileResponse.weight}
                  neutering={petProfileResponse.neutering}
                  character={petProfileResponse.character}
                  diseases={petProfileResponse.diseases}
                  themeVariant="spacious"
                />
              </Card>
            ) : (
              <SkeletonCard height={235} borderRadius={16} />
            )}
          </Flex>

          <Seperator />

          <Flex padding="16px 22px" justify="space-between">
            <Text typo="Title3">보호자</Text>
            <WidthFitFlex gap={16}>
              <Text typo="Body2" css={FontWeightLight}>
                {customerName}
              </Text>
              <Text
                typo="Body2"
                css={FontWeightLight}
                colorCode={theme.palette.Gray500}
              >
                {customerPhone}
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
            <PetBehaviorContainer
              newFeedbackRequest={newFeedbackRequest}
              setNewFeedbackRequest={setNewFeedbackRequest}
            />
          </Flex>

          <Flex padding="16px 20px" direction="column" align="flex-start">
            <PortfolioInputContainer
              newFeedbackRequest={newFeedbackRequest}
              setNewFeedbackRequest={setNewFeedbackRequest}
            />
          </Flex>
        </Flex>

        <button
          type="button"
          onClick={handleSubmitFeedback}
          disabled={!isValid}
        >
          <FrontBtn
            height="53px"
            bg={isValid ? theme.palette.Black : theme.palette.Gray200}
            disabled={!isValid}
            borderRadius="0"
          >
            <Text typo="Body2" colorCode={theme.palette.White}>
              완료
            </Text>
          </FrontBtn>
        </button>
      </form>

      <SalonNavbar />
    </MobileLayout>
  );
};

export default FeedBackPage;

const FontWeightLight = css`
  font-weight: 400;
`;
