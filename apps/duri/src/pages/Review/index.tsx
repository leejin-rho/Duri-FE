// import { ShopLine } from '@duri/components/shop';
import { useForm } from 'react-hook-form';
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
  // PetInfo,
  Text,
  TextField,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

export interface ReviewFormData {
  quotationId: number;
  rating: number;
  comment: string;
  image: string;
}

const ReviewWritePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);
  //useForm으로 리뷰 작성 폼 만들어줘여댕 ~,~
  // const { control, handleSubmit, setValue, getValues } = useForm<ReviewFormData>({
  const { setValue, getValues } = useForm<ReviewFormData>({
    mode: 'onChange',
    defaultValues: {
      quotationId: location.state,
      rating: 5,
      comment: '',
      image: '',
    },
  });
  const handleImageChange = (file: string) => setValue('image', file);
  const handleRatingChange = (rating: number) => setValue('rating', rating);
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue('comment', e.target.value);
  const handleSubmit = () => {
    console.log(getValues());
  };

  return (
    <MobileLayout>
      <Header
        title="후기 작성"
        backIcon={true}
        onClickBack={handleNavigate}
        titleAlign="start"
      />
      <FlexGrow direction="column" justify="flex-start">
        {/* <ShopLine /> */}
        <Flex direction="column" gap={4} margin="42px 0 12px 0">
          <Text typo="Body2">미용이 만족스러우셨나요?</Text>
          <Text typo="Caption5" colorCode={theme.palette.Gray400}>
            미용에 대한 후기를 남겨주세요👀
          </Text>
        </Flex>
        <Flex margin="0 0 15px 0">
          <SelectStar initialScore={5} onChange={handleRatingChange} size={29} />
        </Flex>
        <Flex gap={8}>
        <ReviewImageFile imageURL={getValues('image')} onChange={handleImageChange} />
        <ShadowImageBox width={90} height={90} borderRadius={8} />
        <ShadowImageBox width={90} height={90} borderRadius={8} />
        </Flex>
        <Flex margin="15px 0">
          <TextField
            multiline={true}
            height={108}
            placeholder="후기를 작성해주세요!"
            placeholderTypo={theme.typo.Caption1}
            onChange={handleTextChange}
          />
        </Flex>
        {/* <PetInfo /> */}
      </FlexGrow>
      <HeightFitFlex margin='0 0 93px 0'>
      <Button
        bg={theme.palette.Black}
        fontColor={theme.palette.White}
        borderRadius="0px"
        onClick={handleSubmit}
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
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
`