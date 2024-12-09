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
}: PetInfoType) => {
  return (
    <Flex direction="column" gap={16}>
      <HeightFitFlex gap={18} margin="19px 0 0 0">
        <ProfileImage borderRadius={40} width={133} height={133} src={image} />
        <Flex direction="column" gap={15} align="flex-start">
          <Text typo="Body2">{name}</Text>
          <Text typo="Caption2" colorCode={theme.palette.Gray400}>
            {breed}, {gender === 'F' ? '암컷' : '수컷'}, {age}세, {weight}kg
          </Text>
          {neutering && <SalonTag content="중성화 완료" />}
        </Flex>
      </HeightFitFlex>
      <Flex justify="flex-start" gap={4}>
        {character &&
          character.map((key, index) => {
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
      </Flex>
      <Flex justify="flex-start" gap={4}>
        {diseases &&
          diseases.map((key, index) => {
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
      </Flex>
    </Flex>
  );
};
