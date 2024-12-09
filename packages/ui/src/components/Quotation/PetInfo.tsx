import {
  diseaseMapping,
  Flex,
  HeightFitFlex,
  personalityMapping,
  ProfileImage,
  SalonTag,
  Text,
  theme,
} from '@duri-fe/ui';

interface PetInfoType {
  image?: string;
  name: string;
  age: number;
  breed: string;
  weight: number;
  gender: string;
  neutering?: boolean;
  character?: string[];
  diseases?: string[];
  imageSize?: number;
  imageBorderRadius?: number;
}

export const PetInfo = ({
  image,
  name,
  age,
  breed,
  weight,
  gender,
  neutering,
  character,
  diseases,
  imageSize = 133,
  imageBorderRadius = 40,
}: PetInfoType) => {
  return (
    <Flex direction="column" gap={16}>
      <HeightFitFlex gap={18}>
        <ProfileImage borderRadius={imageBorderRadius} width={imageSize} height={imageSize} src={image} />
        <Flex direction="column" gap={8} align="flex-start">
          <Text typo="Body2">{name}</Text>
          <Text typo="Caption2" colorCode={theme.palette.Gray400}>
            {breed}, {gender === 'F' ? '암컷' : '수컷'}, {age}세, {weight}kg
          </Text>
          {neutering && <SalonTag content="중성화 완료" />}
        </Flex>
      </HeightFitFlex>
      {character && <Flex justify="flex-start" gap={4}>
        {character.map((key, index) => {
          const label = personalityMapping[key]
          return <SalonTag
            key={index}
            height={23}
            content={label}
            bg={theme.palette.Normal100}
            colorCode={theme.palette.Normal700}
            typo="Label2"
          />
        })}
      </Flex> }
      {diseases && <Flex justify="flex-start" gap={4}>
        {diseases.map((key, index) => {
          const label = diseaseMapping[key]
          return <SalonTag
            key={index}
            height={23}
            content={label}
            bg={theme.palette.Alert}
            colorCode={theme.palette.White}
            typo="Label2"
          />
        })}
      </Flex> }
    </Flex>
  );
};
