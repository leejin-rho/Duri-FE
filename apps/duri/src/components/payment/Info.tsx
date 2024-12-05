import React from 'react';

import { Flex, Text, theme } from '@duri-fe/ui';

const PaymentInfo = ({
  totalGroomingPrice,
  vat,
}: {
  totalGroomingPrice: number;
  vat: number;
}) => {
  const totalPrice = totalGroomingPrice + vat;

  return (
    <Flex
      direction="column"
      align="flex-start"
      padding="29px 20px 150px 20px"
      gap={24}
    >
      <Text typo="Title2">결제금액</Text>
      <Flex direction="column" gap={15}>
        <Flex justify="space-between">
          <Text typo="Body2">주문금액</Text>
          <Text typo="Body2">{totalPrice.toLocaleString()} 원</Text>
        </Flex>
        <Flex justify="space-between" padding="0 0 0 9px">
          <Text typo="Label3" colorCode={theme.palette.Gray300}>
            ㄴ 상품금액
          </Text>
          <Text typo="Label3" colorCode={theme.palette.Gray300}>
            {totalGroomingPrice.toLocaleString()} 원
          </Text>
        </Flex>
        <Flex justify="space-between" padding="0 0 0 9px">
          <Text typo="Label3" colorCode={theme.palette.Gray300}>
            ㄴ VAT
          </Text>
          <Text typo="Label3" colorCode={theme.palette.Gray300}>
            {vat.toLocaleString()} 원
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PaymentInfo;
