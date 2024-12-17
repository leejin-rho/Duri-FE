import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { ReviewImageFile } from '@duri/components/review/ReviewImageFile';
import { SelectStar } from '@duri/components/review/SelectStar';
import {
  Button,
  DuriNavbar,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  PetInfo,
  ShopInfo,
  Text,
  TextField,
  theme,
} from '@duri-fe/ui';
import { useGetReviewShopAndPetInfo, usePostReview } from '@duri-fe/utils';
import styled from '@emotion/styled';

export interface ReviewFormData {
  quotationId: number;
  rating: number;
  comment: string;
  image: File | null;
}

const ReviewWritePage = () => {
  const location = useLocation();
  const quotationId = Number(location.state);
  const { data: shopAndPetDetailInfo } = useGetReviewShopAndPetInfo({
    quotationId: quotationId,
  });

  const navigate = useNavigate();
  const handleClickShopButton = () => {
    if (shopAndPetDetailInfo?.shopInfo.shopId) {
      const shopId = shopAndPetDetailInfo.shopInfo.shopId;
      navigate(`/shop/${shopId}`);
    }
  };
  const handleClickBackButton = () => {
    navigate(-1);
  };

  const [imageURL, setImageURL] = useState<string | undefined>();

  const { mutateAsync: postReview, isError: isPostError } = usePostReview();

  const { control, handleSubmit, setValue } = useForm<ReviewFormData>({
    mode: 'onChange',
    defaultValues: {
      quotationId: location.state || 0,
      rating: 5,
      comment: '',
      image: null,
    },
  });

  const handleChangeImageFile = (file: File | null) => {
    setValue('image', file);
  };

  const onSubmit = (data: ReviewFormData) => {
    // image와 나머지 데이터를 분리
    const { image, ...newReviewRequest } = data;

    const formData = new FormData();

    formData.append(
      'newReviewRequest',
      new Blob([JSON.stringify(newReviewRequest)], {
        type: 'application/json',
      }),
    );

    if (image) {
      formData.append('image', image);
    }

    // API 연결
    postReview({ quotationId: Number(7), formData });
  };

  return (
    <MobileLayout>
      <Header
        title="후기 작성"
        backIcon
        onClickBack={handleClickBackButton}
        titleAlign="start"
      />

      <FlexGrow direction="column" justify="flex-start">
        <Flex direction="column" gap={4} margin="42px 0 12px 0">
          {/* 가게 정보 */}
          {shopAndPetDetailInfo?.shopInfo && (
            <ShopInfo
              onClick={handleClickShopButton}
              themeVariant="duri"
              image={shopAndPetDetailInfo.shopInfo.imageURL}
              shopName={shopAndPetDetailInfo.shopInfo.shopName}
              address={shopAndPetDetailInfo.shopInfo.address}
              shopTag1={shopAndPetDetailInfo.shopInfo.shopTag1}
              shopTag2={shopAndPetDetailInfo.shopInfo.shopTag2}
              shopTag3={shopAndPetDetailInfo.shopInfo.shopTag3}
            />
          )}

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
        {shopAndPetDetailInfo?.petInfo && (
          <Flex>
            <PetInfo
              age={shopAndPetDetailInfo.petInfo.age}
              weight={shopAndPetDetailInfo.petInfo.weight}
              name={shopAndPetDetailInfo.petInfo.name}
              breed={shopAndPetDetailInfo.petInfo.breed}
              gender={shopAndPetDetailInfo.petInfo.gender}
              image={shopAndPetDetailInfo.petInfo.imageURL}
              neutering={shopAndPetDetailInfo.petInfo.neutering}
            />
          </Flex>
        )}
      </FlexGrow>
      {isPostError && (
        <Flex>
          <Text typo="Caption3" colorCode={theme.palette.Alert}>
            등록에 실패했습니다. 잠시 후 다시 시도해주세요.
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
          등록
        </Button>
      </HeightFitFlex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default ReviewWritePage;

const FlexGrow = styled(Flex)`
  flex: 1;
`;

const ShadowImageBox = styled(Flex)`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;
