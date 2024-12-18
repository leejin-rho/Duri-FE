import {
  Flex,
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
}

export const OwnerInfo = ({ image, shopName }: OwnerInfoProps) => {
  return (
    <Flex justify="space-between" padding="0 6px">
      <WidthFitFlex direction="column" gap={14}>
        <Text typo="Heading">
          {shopName} 사장님,
          <br />
          안녕하세요!
        </Text>
        <MoveToPortfolio href='/portfolio'>내 포트폴리오 보기</MoveToPortfolio>
      </WidthFitFlex>
      <ProfileImage width={100} height={100} borderRadius={40} src={image} />
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
