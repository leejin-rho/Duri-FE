import { Button, Flex, ProfileImage, Text, theme, WidthFitFlex } from '@duri-fe/ui';

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
        <Button
          bg={theme.palette.White}
          typo="Caption3"
          fontColor={theme.palette.Gray300}
          padding='10px'
        >
          내 포트폴리오 보기
        </Button>
      </WidthFitFlex>
        <ProfileImage width={100} height={100} borderRadius={40} src={image} />
    </Flex>
  );
};
