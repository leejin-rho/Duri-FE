import React from 'react';

import {
  Button,
  Card,
  Flex,
  HeightFitFlex,
  Image,
  ProfileImage,
  Text,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface PetInfoProps {
  name: string,
  image?: string,
  age: number,
  breed: string,
  gender: string,
  weight: number,
}

const PetInfo = ({
  name,
  image,
  age,
  breed,
  gender,
  weight,
}: PetInfoProps) => {
  return (
    <HeightFitFlex direction="column" align="flex-start" gap={16}>
      <Text typo="Title2">반려견 선택</Text>
      <Card
        borderRadius={12}
        height="113px"
        borderColor={theme.palette.Normal500}
        padding="6px"
      >
        <Flex justify="flex-start" gap={18}>
          <PetImageWrapper>
            <SelectedTag
              typo="Caption3"
              fontColor={theme.palette.Normal700}
              width="43px"
              height="29px"
              borderRadius="8px"
              padding="0px"
            >
              선택
            </SelectedTag>
            {image ? (
              <Image src={image} borderRadius={8} width={100} height={100} />
            ) : <ProfileImage borderRadius={8} width={100} height={100} />}
          </PetImageWrapper>
          <HeightFitFlex direction="column" gap={12} align="flex-start">
            <Text typo="Body2">{name}</Text>
            <Text typo="Caption2" colorCode={theme.palette.Gray400}>
              {breed}, {gender === 'F' ? '여아' : '남아'}, {age}살, {weight}kg
            </Text>
          </HeightFitFlex>
        </Flex>
      </Card>
    </HeightFitFlex>
  );
};

export default PetInfo;

const PetImageWrapper = styled.div`
  position: relative;
`;
const SelectedTag = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
`;
