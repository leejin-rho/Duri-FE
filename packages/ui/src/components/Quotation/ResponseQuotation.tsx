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

import { ResponseQuotationType } from '../../types';

import { DetailGrooming } from './DetailGrooming';

export const ResponseQuotation = ({
  responseList,
  children,
}: {
  responseList: ResponseQuotationType;
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
          src="https://s3-alpha-sig.figma.com/img/d5d3/cdc1/d19a01f5ad7ac510ca410769dcba590c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=daVSUN4m9Tm7YYBWnzeeuAeL53xSvUEBRbzQTJQX-XLCbNybv203PkQhyIeiQC7wTI2l~pEuKOzPxmTl1-wDwO0dv8C8nZH6X2VA-4u8vdjdLNMOzKZCRhYTXeZjlrpdEJwMyhxK2xrJIQA5j-Rp4sbj~uaDbjMniEbILf5daQ2poAiD2gYWYp570oufSUXQ7An8wn0q82T95JyVZkn2SZJfEwxMK4h3-kaHs~5neeQRhm9i41F1bznoNA1Wu~GcUm3Ufy7EF~ltn~jKpjsyrT8o9HJrhO-vEn8S5oHsaV44zdeXvd-GkTs63zG~3~yNlGkXXmP3WJbv4cz6rSpFZg__"
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
          <TextField value={memo} width={266} multiline={true} height={108} />
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
      <Flex gap={7} margin="6px 0" padding="16px 18.5px">
        {children}
      </Flex>
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
