import {
  diseaseMapping,
  Flex,
  HeightFitFlex,
  KeyOfTypo,
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
  themeVariant?: 'compact' | 'spacious';
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
  themeVariant = 'spacious',
}: PetInfoType) => {
  const { imageSize, gap, typo } = PetInfoTheme[themeVariant];

  return (
    <Flex direction="column" gap={16}>
      <HeightFitFlex gap={18}>
        <ProfileImage
          borderRadius={imageSize.borderRadius}
          width={imageSize.width}
          height={imageSize.height}
          src={image}
        />
        <Flex direction="column" gap={gap.horizontal} align="flex-start">
          <Text typo={typo.name}>{name}</Text>
          <Text typo={typo.description} colorCode={theme.palette.Gray400}>
            {breed}, {gender === 'F' ? '암컷' : '수컷'}, {age}세, {weight}kg
          </Text>
          {neutering && <SalonTag content="중성화 완료" />}
        </Flex>
      </HeightFitFlex>
      {character && (
        <Flex justify="flex-start" gap={4}>
          {character.map((key, index) => {
            const label = personalityMapping[key];
            return (
              <SalonTag
                key={index}
                height={23}
                content={label}
                bg={theme.palette.Normal100}
                colorCode={theme.palette.Normal700}
                typo="Label2"
              />
            );
          })}
        </Flex>
      )}
      {diseases && (
        <Flex justify="flex-start" gap={4}>
          {diseases.map((key, index) => {
            const label = diseaseMapping[key];
            return (
              <SalonTag
                key={index}
                height={23}
                content={label}
                bg={theme.palette.Alert}
                colorCode={theme.palette.White}
                typo="Label2"
              />
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};

interface ThemeVariant {
  imageSize: {
    width: number;
    height: number;
    borderRadius: number;
  };
  gap: {
    vertical: number;
    horizontal: number;
  };
  typo: {
    name: KeyOfTypo;
    description: KeyOfTypo;
  };
}

const PetInfoTheme: Record<'compact' | 'spacious', ThemeVariant> = {
  compact: {
    imageSize: { width: 77, height: 77, borderRadius: 99 },
    gap: { vertical: 20, horizontal: 6 },
    typo: { name: 'Label1', description: 'Label3' },
  },
  spacious: {
    imageSize: { width: 133, height: 133, borderRadius: 40 },
    gap: { vertical: 18, horizontal: 8 },
    typo: { name: 'Title3', description: 'Body3' },
  },
};
