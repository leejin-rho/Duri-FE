import {
  diseaseMapping,
  Flex,
  HeightFitFlex,
  Image,
  KeyOfTypo,
  Pencil,
  personalityMapping,
  ProfileImage,
  SalonTag,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import { parsePetInfo } from '@duri-fe/utils';
import styled from '@emotion/styled';
import { format } from 'date-fns';

interface GroomerInfoType {
  groomerName: string;
  groomerImage: string;
  date: string;
  startTime: string;
  endTime: string;
}

interface PetInfoType {
  image?: string;
  name: string;
  age: number;
  breed: string;
  weight: number;
  gender: string;
  neutering?: boolean;
  dday?: number;
  complete?: boolean;
  groomer?: GroomerInfoType;
  character?: string[];
  diseases?: string[];
  modify?: boolean;
  onClick?: () => void | Promise<void>;
  themeVariant?: 'compact' | 'spacious' | 'medium';
}

export const PetInfo = ({
  image,
  name,
  age,
  breed,
  weight,
  gender,
  neutering,
  dday,
  complete,
  groomer,
  character,
  diseases,
  modify = false,
  onClick,
  themeVariant = 'spacious',
}: PetInfoType) => {
  const { imageSize, gap, typo } = PetInfoTheme[themeVariant];

  return (
    <Flex direction="column" gap={16}>
      <HeightFitFlex gap={18}>
        {modify ? (
          <ProfileImageWrapper onClick={onClick}>
            <ProfileImage
              borderRadius={imageSize.borderRadius}
              width={imageSize.width}
              height={imageSize.height}
              src={image}
            />
            <PencilWrapper
              backgroundColor={theme.palette.Black}
              borderRadius={99}
              height={29}
              imageSize={imageSize.width}
            >
              <Pencil width={17} height={17} />
            </PencilWrapper>
          </ProfileImageWrapper>
        ) : (
          <ProfileImage
            borderRadius={imageSize.borderRadius}
            width={imageSize.width}
            height={imageSize.height}
            src={image}
          />
        )}
        <Flex direction="column" gap={gap.horizontal} align="flex-start">
          <Flex justify="flex-start" gap={8}>
            <Text typo={typo.name}>{name}</Text>
            {(dday === 0 || dday) && (
              <SalonTag
                content={dday === 0 ? `D-day` : `D-${dday}`}
                bg={theme.palette.Normal500}
                colorCode={theme.palette.Black}
                typo="Label2"
                padding="8px 10px"
                height={26}
                borderRadius={99}
              />
            )}
            {complete && (
              <SalonTag
                content="미용 완료"
                bg={theme.palette.Gray50}
                colorCode={theme.palette.Gray300}
                typo="Label2"
                padding="8px 10px"
                height={26}
                borderRadius={99}
              />
            )}
          </Flex>
          <Text typo={typo.description} colorCode={theme.palette.Gray400}>
            {parsePetInfo({ age, breed, weight, gender })}
          </Text>
          {neutering && <SalonTag content="중성화 완료" padding="4px" />}
          {groomer && (
            <Flex
              direction="column"
              padding="8px 0 0 0"
              gap={8}
              align="flex-start"
            >
              <Flex justify="flex-start" gap={8}>
                <Image
                  src={groomer.groomerImage}
                  width={24}
                  height={24}
                  borderRadius={24}
                />
                <Text typo="Label2" colorCode={theme.palette.Black}>
                  {groomer.groomerName}
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Text typo="Label2" colorCode={theme.palette.Black}>
                  {groomer.date}
                </Text>
                <Text typo="Label3" colorCode={theme.palette.Gray400}>
                  {format(groomer.startTime, 'hh:mm')} ~{' '}
                  {format(groomer.endTime, 'hh:mm')}
                </Text>
              </Flex>
            </Flex>
          )}
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

const ProfileImageWrapper = styled(WidthFitFlex)`
  position: relative;
  cursor: pointer;
`;
const PencilWrapper = styled(WidthFitFlex)<{ imageSize: number }>`
  position: absolute;
  border: 1px solid ${theme.palette.White};
  padding: 6px;
  top: ${({ imageSize }) => `${imageSize - 32}px`};
  left: ${({ imageSize }) => `${imageSize - 30}px`};
`;

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

const PetInfoTheme: Record<'compact' | 'spacious' | 'medium', ThemeVariant> = {
  compact: {
    imageSize: { width: 77, height: 77, borderRadius: 99 },
    gap: { vertical: 20, horizontal: 6 },
    typo: { name: 'Label1', description: 'Label3' },
  },
  medium: {
    imageSize: { width: 100, height: 100, borderRadius: 8 },
    gap: { vertical: 18, horizontal: 6 },
    typo: { name: 'Body2', description: 'Caption2' },
  },
  spacious: {
    imageSize: { width: 133, height: 133, borderRadius: 40 },
    gap: { vertical: 18, horizontal: 8 },
    typo: { name: 'Title3', description: 'Body3' },
  },
};
