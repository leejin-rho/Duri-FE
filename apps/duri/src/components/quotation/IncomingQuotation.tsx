import { Button, Flex, NextArrow, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface IncomingQuotationProps {
  salonName: string;
  price: number | null;
}

export const IncomingQuotation = ({
  salonName,
  price = null,
}: IncomingQuotationProps) => {
  return (
    <Button padding="24px 16px" bg={theme.palette.White} borderRadius="16px">
      <Flex justify="space-between">
        <Flex justify="flex-start">
          <SalonNameText typo="Title3">{salonName}</SalonNameText>
          <Text typo="Body3" colorCode={theme.palette.Gray300}>
            {price ? `${price.toLocaleString()}원 ` : '아직 견적 도착 전이에요.'}
          </Text>
        </Flex>
        {price && <NextArrow width={29} height={31} />}
      </Flex>
    </Button>
  );
};

const SalonNameText = styled(Text)`
  width: 116px;
  justify-content: start;
`;
