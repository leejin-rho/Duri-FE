import {
  Flex,
  HardText,
  HeightFitFlex,
  Image,
  PetInfo,
  ProfileImage,
  RatingStars,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import { MyShopReviewType } from '@duri-fe/utils';
import styled from '@emotion/styled';

export interface ShopReviewBoxProps {
  review: MyShopReviewType;
}

export const ShopReviewBox = (props: ShopReviewBoxProps) => {
  const {
    review: {
      userName,
      userImageURL,
      rating,
      comment,
      createdAt,
      imgUrl,
      petInfo: {
        petId: petId,
        imageURL: petImage,
        name: petName,
        age: petAge,
        breed: petBreed,
        gender: petGender,
        weight: petWeight,
        neutering: petNeutering,
      },
    },
  } = props;

  return (
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
            <ProfileImage
              width={34}
              height={34}
              borderRadius={99}
              src={userImageURL}
            />
            <WidthFitFlex direction="column" align="flex-start" gap={6}>
              <Text>{userName}</Text>
              <RatingStars score={rating} size={12} />
            </WidthFitFlex>
          </WidthFitFlex>
        </HeightFitFlex>
        <HardText typo="Caption5" colorCode={theme.palette.Gray300}>
          {createdAt}
        </HardText>
      </Flex>
      {imgUrl && (
        <HeightFitFlex margin="8px 0 0">
          <Image src={imgUrl} borderRadius={12} />
        </HeightFitFlex>
      )}
      <Text typo="Label3" margin="8px 0 0 0">
        {comment}
      </Text>
      <HeightFitFlex
        borderRadius={8}
        padding="6px 12px"
        backgroundColor={theme.palette.Gray_White}
        margin="12px 0 0 0"
      >
        <PetInfo
          themeVariant="compact"
          key={petId}
          name={petName}
          image={petImage}
          age={petAge}
          breed={petBreed}
          gender={petGender}
          weight={petWeight}
          neutering={petNeutering}
        />
      </HeightFitFlex>
    </ShadowFlex>
  );
};

const ShadowFlex = styled(HeightFitFlex)`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;
