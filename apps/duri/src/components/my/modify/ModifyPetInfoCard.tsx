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
  lastGrooming: string | null;
  character: string[];
  diseases: string[];
}

export const ModifyPetInfoCard = () => {
  const petListData = useGetPetListInfo();
  const [petListInfo, setPetListInfo] = useState<PetListInfo[]>([]);
  useEffect(() => {
    if (petListData.data) setPetListInfo(petListData.data.petProfileList);
  });

  return (
    <Flex direction='column' gap={20}>
      {petListInfo &&
        petListInfo.map((petInfo, index) => (
          <SwipeCard key={index} petInfo={petInfo} />
        ))}
    </Flex>
  );
};
