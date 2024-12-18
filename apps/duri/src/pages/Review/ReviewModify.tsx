import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { PetInfoType } from '@duri/assets/types';
import { ReviewImageFile } from '@duri/components/review/ReviewImageFile';
import { SelectStar } from '@duri/components/review/SelectStar';
import {
  Button,
  Card,
  DuriNavbar,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  PetInfo,
  Text,
  TextField,
  theme,
} from '@duri-fe/ui';
import { useGetReviewDetail, usePutReview } from '@duri-fe/utils';
import styled from '@emotion/styled';

interface ReviewFormData {
  rating: number;
  comment: string;
  image: File | null;
}

const ReviewModifyPage = () => {
  const location = useLocation(); // reviewId state전달
  const navigate = useNavigate();
  const handleNavigate = () => {
    window.location.href = `/my/review/${location.state}`;
  };
  const reviewId = location.state;

  const { mutateAsync: putReview, isError: isPutError } = usePutReview(() =>
    handleNavigate(),
  );

  const { data: reviewData } = useGetReviewDetail(Number(location.state));

  const [imageURL, setImageURL] = useState<string | undefined>();

  const [petInfo, setPetInfo] = useState<PetInfoType>();

  useEffect(() => {
    if (reviewData) {
      setPetInfo(reviewData.petInfo);
      setImageURL(reviewData.imgUrl);
      setValue('rating', reviewData.rating);
      setValue('comment', reviewData.comment);
      setValue('image', null);
    }
  }, [reviewData]);

  const { control, handleSubmit, setValue } = useForm<ReviewFormData>({
    mode: 'onChange',
    defaultValues: {
      rating: 5,
      comment: '',
    },
  });

  const handleChangeImageFile = (file: File | null) => {
    setValue('image', file);
  };

  const onSubmit = (data: ReviewFormData) => {
    // image와 나머지 데이터를 분리
    const { image, ...updateReviewRequest } = data;

    const formData = new FormData();

    formData.append(
      'updateReviewRequest',
      new Blob([JSON.stringify(updateReviewRequest)], {
        type: 'application/json',
      }),
    );

    if (image) {
      formData.append('image', image);
    }

    // API 연결
    putReview({ reviewId, formData });
  };

  return (
    <MobileLayout>
      <Header
        title="후기 수정"
        backIcon
        onClickBack={() => navigate(-1)}
        titleAlign="start"
      />
      <FlexGrow direction="column" justify="flex-start" padding="0 20px">
        <Flex direction="column" gap={4} margin="42px 0 12px 0">
          <Text typo="Body2">미용이 만족스러우셨나요?</Text>
          <Text typo="Caption5" colorCode={theme.palette.Gray400}>
            미용에 대한 후기를 남겨주세요👀
          </Text>
        </Flex>

        {/* 별점 입력 */}
        <Flex margin="0 0 15px 0">
          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <SelectStar
                {...field}
                initialScore={field.value}
                onChange={(value) => field.onChange(value)}
                size={29}
              />
            )}
          />
        </Flex>

        {/* 이미지 업로드 */}
        <Flex gap={8}>
          <Controller
            name="image"
            control={control}
            render={() => (
              <ReviewImageFile
                imageURL={imageURL}
                setImageURL={setImageURL}
                onChange={handleChangeImageFile}
              />
            )}
          />
          <ShadowImageBox width={90} height={90} borderRadius={8} />
          <ShadowImageBox width={90} height={90} borderRadius={8} />
        </Flex>

        {/* 텍스트 필드 */}
        <Flex margin="15px 0">
          <Controller
            name="comment"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                multiline
                width={331}
                height={108}
                placeholder="후기를 작성해주세요!"
                placeholderTypo={theme.typo.Caption1}
              />
            )}
          />
        </Flex>
        {petInfo && (
          <Flex width={331}>
            <Card borderRadius={8} bg={theme.palette.Gray_White} padding="12px">
              <PetInfo
                age={petInfo.age}
                breed={petInfo.breed}
                gender={petInfo.gender}
                image={petInfo.imageURL}
                name={petInfo.name}
                weight={petInfo.weight}
                neutering={petInfo.neutering}
                themeVariant="compact"
              />
            </Card>
          </Flex>
        )}
      </FlexGrow>
      {isPutError && (
        <Flex>
          <Text typo="Caption3" colorCode={theme.palette.Alert}>
            수정에 실패했습니다. 잠시 후 다시 시도해주세요.
          </Text>
        </Flex>
      )}
      <HeightFitFlex margin="1px 0 93px">
        <Button
          bg={theme.palette.Black}
          fontColor={theme.palette.White}
          borderRadius="0px"
          onClick={handleSubmit(onSubmit)}
        >
          완료
        </Button>
      </HeightFitFlex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default ReviewModifyPage;

const FlexGrow = styled(Flex)`
  flex: 1;
`;

const ShadowImageBox = styled(Flex)`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;
