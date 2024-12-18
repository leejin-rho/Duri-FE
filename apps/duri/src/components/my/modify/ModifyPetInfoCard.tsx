import { useEffect, useState } from 'react';

import { Flex } from '@duri-fe/ui';
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
  const { data: petListData } = useGetPetListInfo();
  const [petListInfo, setPetListInfo] = useState<PetListInfo[]>([]);
  useEffect(() => {
    if (petListData) setPetListInfo(petListData);
    console.log(petListData);
  });

  return (
    <Flex direction="column" gap={20} padding="0 0 114px 0">
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
    </Flex>
  );
};
