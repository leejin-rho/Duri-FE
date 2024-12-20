import { useNavigate } from 'react-router-dom';

import {
  Flex,
  Pencil,
  ProfileImage,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface OwnerInfoProps {
  shopId: number;
  image: string;
  shopName: string;
  // shopEmail: string;
}

export const OwnerInfo = ({ image, shopName }: OwnerInfoProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/my/groomer/edit');
  };

  return (
    <Flex justify="space-between" padding="0 6px">
      <WidthFitFlex direction="column" align="flex-start" gap={14}>
        <Text typo="Heading">
          {shopName} 사장님,
          <br />
          안녕하세요!
        </Text>
        <Flex justify="flex-start">
          <MoveToPortfolio href="/portfolio">
            내 포트폴리오 보기
          </MoveToPortfolio>
        </Flex>
      </WidthFitFlex>
      <ProfileImageWrapper onClick={handleNavigate}>
        <ProfileImage
          width={100}
          height={100}
          borderRadius={40}
          src={image === null ? undefined : image}
        />
        <PencilWrapper
          backgroundColor={theme.palette.Black}
          borderRadius={99}
          height={29}
        >
          <Pencil width={17} height={17} color={theme.palette.White} />
        </PencilWrapper>
      </ProfileImageWrapper>
    </Flex>
  );
};

const MoveToPortfolio = styled.a`
  background-color: ${theme.palette.White};
  ${theme.typo.Caption3}
  color: ${theme.palette.Gray300};
  padding: 10px;
  text-align: center;
  border-radius: 99px;
  cursor: pointer;
  text-decoration: none;
`;

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
