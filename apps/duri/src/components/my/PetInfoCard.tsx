import { useNavigate } from 'react-router-dom';

import {
  Flex,
  NextArrow,
  PetInfo,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface PetInfoCardProps {
  petId: number;
  name: string;
  imageURL?: string;
  age: number;
  breed: string;
  weight: number;
  gender: string;
  neutering: boolean;
}

export const PetInfoCard = ({
  name,
  imageURL,
  age,
  gender,
  breed,
  weight,
  neutering,
}: PetInfoCardProps) => {
  const navigate = useNavigate();

  const handleClickNavigateButton = () => {
    navigate('/my/pet');
  };

  return (
    <FlexButton
      direction="column"
      borderRadius={12}
      padding="25px 22px 27px 13px"
      backgroundColor={theme.palette.White}
      align="flex-start"
      gap={20}
      onClick={handleClickNavigateButton}
    >
      <Text typo="Body2">마이펫</Text>
      <Flex align="flex-start" padding="0 9px">
        <PetInfo
          name={name}
          age={age}
          breed={breed}
          gender={gender === 'F' ? '여아' : '남아'}
          weight={weight}
          neutering={neutering}
          image={imageURL}
          themeVariant="compact"
        />
        <WidthFitFlex align="flex-start" margin="5px 0 0 0">
          <NextArrow width={29} height={31} />
        </WidthFitFlex>
      </Flex>
    </FlexButton>
  );
};

const FlexButton = styled(Flex)`
  cursor: pointer;
`;
