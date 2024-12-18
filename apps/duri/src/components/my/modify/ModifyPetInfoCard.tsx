import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Flex, HeightFitFlex, Text, theme } from '@duri-fe/ui';
import { useGetPetListInfo } from '@duri-fe/utils';

import { SwipeCard } from './SwipeCard';

interface PetListInfo {
  id: number;
  name: string;
  image: string | null;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  neutering: boolean;
  lastGrooming: string | null;
  character: string[];
  diseases: string[];
}

export const ModifyPetInfoCard = () => {
  const navigate = useNavigate();

  const { data: petListData } = useGetPetListInfo();

  const [petListInfo, setPetListInfo] = useState<PetListInfo[]>([]);

  const handleClickRegisterButton = () => {
    navigate('/my/pet/register');
  };

  useEffect(() => {
    if (petListData) setPetListInfo(petListData);
  }, [petListData]);

  return (
    <Flex direction="column" gap={20}>
      {petListInfo &&
        petListInfo.map(
          ({
            age,
            breed,
            character,
            diseases,
            gender,
            id,
            image,
            name,
            neutering,
            weight,
          }: PetListInfo) => (
            <SwipeCard
              key={id}
              age={age}
              breed={breed}
              character={character}
              diseases={diseases}
              gender={gender}
              id={id}
              image={image}
              name={name}
              neutering={neutering}
              weight={weight}
            />
          ),
        )}
      {petListInfo.length === 0 && (
        <Flex
          backgroundColor={theme.palette.White}
          borderRadius={16}
          width={334}
          height={163}
          padding="12px 30px 16px 12px"
          gap={16}
          direction='column'
        >
          <Text typo="Label3" colorCode={theme.palette.Gray300}>
            앗! 등록된 반려견이 없어요.
          </Text>
          <HeightFitFlex>
            <Button
              typo="Label4"
              fontColor={theme.palette.White}
              onClick={handleClickRegisterButton}
              bg={theme.palette.Black}
              width="135px"
              padding="10px"
              borderRadius="8px"
            >
              마이펫 등록하러가기
            </Button>
          </HeightFitFlex>
        </Flex>
      )}
    </Flex>
  );
};
