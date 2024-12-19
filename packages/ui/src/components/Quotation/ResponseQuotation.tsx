import {
  Flex,
  HeightFitFlex,
  Image,
  Seperator,
  Text,
  TextField,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';
import { format } from 'date-fns';

import ShopDefaultImage from '../../assets/images/ShopDefaultImage.png';
import { ResponseQuotationType } from '../../types';

import { DetailGrooming } from './DetailGrooming';

export const ResponseQuotation = ({
  responseList,
  isSalon = false,
  children,
}: {
  responseList: ResponseQuotationType;
  isSalon?: boolean;
  children: React.ReactNode;
}) => {
  const { groomingMenu, additionalGrooming, specialCare, designCut } =
    responseList.menuDetail;
  const { totalPrice } = responseList.quotation.priceDetail;
  const { shopName, shopAddress, shopPhone, groomerName } =
    responseList.shopDetail;
  const { startDateTime, endDateTime, memo } = responseList.quotation;
  return (
    <MaxWidthFlex direction="column">
      <Flex direction="column" gap={28}>
        <Image
          height={111}
          src={responseList.shopDetail.shopImage ?? ShopDefaultImage}
        />
        <Text typo="Body2">{shopName}</Text>
        <Seperator mode="dotted" height="2px" />
        <HeightFitFlex direction="column" gap={18}>
          <Flex justify="space-between" padding="0 30.5px">
            <WidthFitFlex direction="column" align="flex-start">
              <MultipleLineText typo="Caption5">{shopAddress}</MultipleLineText>
              <Text typo="Caption5">대표 : {groomerName}</Text>
            </WidthFitFlex>
            <WidthFitFlex direction="column" align="flex-end">
              <MultipleLineText typo="Caption5">T:{shopPhone}</MultipleLineText>
              <MultipleLineText typo="Caption5">
                {format(responseList.quotationCreatedAt, 'yyyy-MM-dd HH:mm')}
              </MultipleLineText>
            </WidthFitFlex>
          </Flex>
        </HeightFitFlex>
        <Seperator mode="dotted" height="2px" />
        <HeightFitFlex direction="column" gap={18}>
          <Flex justify="space-between" padding="0 30.5px">
            <Text typo="Body2">예약 시간</Text>
            <SingleLineText typo="Body2" align="end">
              {format(startDateTime, 'yyyy-MM-dd HH:mm')}~
              {format(endDateTime, 'HH:mm')}
            </SingleLineText>
          </Flex>
        </HeightFitFlex>
        <Seperator mode="dotted" height="2px" />
        <HeightFitFlex direction="column" gap={24}>
          <DetailGrooming
            groomingMenu={groomingMenu}
            additionalGrooming={additionalGrooming}
            specialCare={specialCare}
            designCut={designCut}
          />
        </HeightFitFlex>
        <Seperator mode="dotted" height="2px" />
        <Flex direction="column" align="flex-start" padding="0 35.5px" gap={24}>
          <Text typo="Body2">요청사항</Text>
          {isSalon ? (
            <MemoText typo="Label3" colorCode={theme.palette.Gray500}>
              {memo}
            </MemoText>
          ) : (
            <TextField
              value={memo}
              width={266}
              multiline={true}
              height={108}
              disabled
            />
          )}
        </Flex>
        <Seperator mode="dotted" height="2px" />
        <HeightFitFlex direction="column" gap={18}>
          <Flex justify="space-between" padding="0 30.5px">
            <Text typo="Body2">예상 결제 금액</Text>
            <Text typo="Body1" colorCode={theme.palette.Normal700}>
              {totalPrice.toLocaleString()} 원
            </Text>
          </Flex>
        </HeightFitFlex>
      </Flex>
      {children && (
        <Flex gap={7} margin="6px 0" padding="16px 18.5px">
          {children}
        </Flex>
      )}
    </MaxWidthFlex>
  );
};

const MultipleLineText = styled(Text)`
  word-break: keep-all;
  max-width: 120px;
  text-align: left;
`;

const SingleLineText = styled(Text)`
  word-break: no-wrap;
`;

const MaxWidthFlex = styled(Flex)`
  max-width: 337px;
`;

const MemoText = styled(Text)`
  text-align: start;
`;
