import {
  diseaseMapping,
  Flex,
  HeightFitFlex,
  Pencil,
  personalityMapping,
  ProfileImage,
  SalonTag,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

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
  modify?: boolean;
  onClick?: () => void | Promise<void>;
}

export const PetInfoA = ({
  image,
  name,
  age,
  breed,
  weight,
  gender,
  neutering,
  character,
  diseases,
  modify = false,
  onClick
}: PetInfoType) => {
  return (
    <Flex direction="column" gap={16}>
      <HeightFitFlex gap={18}>
        {modify ? (
          <ProfileImageWrapper onClick={onClick}>
            <ProfileImage width={100} height={100} borderRadius={40} />
            <PencilWrapper
              backgroundColor={theme.palette.Black}
              borderRadius={99}
              height={29}
            >
              <Pencil width={17} height={17} />
            </PencilWrapper>
          </ProfileImageWrapper>
        ) : (
          <ProfileImage
            borderRadius={40}
            width={133}
            height={133}
            src={image}
          />
        )}
        <Flex direction="column" gap={15} align="flex-start">
          <Text typo="Body2">{name}</Text>
          <Text typo="Caption2" colorCode={theme.palette.Gray400}>
            {breed}, {gender === 'F' ? '여아' : '남아'}, {age}세, {weight}kg
          </Text>
          {neutering && <SalonTag content="중성화 완료" />}
        </Flex>
      </HeightFitFlex>
      <Flex justify="flex-start" gap={4}>
        {character &&
          character.map((key, index) => {
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
      <Flex justify="flex-start" gap={4}>
        {diseases &&
          diseases.map((key, index) => {
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
    </Flex>
  );
};

const ProfileImageWrapper = styled(WidthFitFlex)`
  position: relative;
  cursor: pointer;
`;
const PencilWrapper = styled(WidthFitFlex)`
  position: absolute;
  border: 1.094px solid ${theme.palette.White};
  padding: 6px;
  top: 76px;
  left: 74px;
`;
