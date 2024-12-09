import {
  diseaseMapping,
  Flex,
  HeightFitFlex,
  Image,
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
  themeVariant = 'spacious',
}: PetInfoType) => {
  const { imageSize, gap, typo } = PetInfoTheme[themeVariant];

  return (
    <HeightFitFlex gap={18} margin="19px 0 0 0">
      <Image borderRadius={40} width={133} height={133} src={image} />
      <Flex direction="column" gap={15} align="flex-start">
        <Text typo="Body2">{name}</Text>
        <Text typo="Caption2" colorCode={theme.palette.Gray400}>
          {breed}, {gender === 'F' ? '암컷' : '수컷'}, {age}세, {weight}kg
        </Text>
      </Flex>
    </HeightFitFlex>
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
