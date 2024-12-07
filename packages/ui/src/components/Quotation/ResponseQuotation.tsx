import { useState } from 'react';

import {
  Close,
  defaultResponseData,
  Flex,
  HeightFitFlex,
  Image,
  Seperator,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import { format } from 'date-fns';

import { ResponseProps } from '../../types';

import { DetailGrooming } from './DetailGrooming';

export const ResponseQuotation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [responseList] = useState<ResponseProps>(defaultResponseData);
  const { groomingMenu, additionalGrooming, specialCare, designCut } =
    responseList.quotationDetails;
  return (
    <Flex direction="column">
      <Flex direction="column" justify="flex-start" padding="19px 5px">
        <HeightFitFlex justify="space-between" padding="0 23.5px ">
          <Text typo="Body3" colorCode={theme.palette.Gray400}>
            견적서
          </Text>
          <Close width={17} height={17} />
        </HeightFitFlex>
      </Flex>
      <Flex direction="column" gap={21}>
        <Image
          height={111}
          src="https://s3-alpha-sig.figma.com/img/d5d3/cdc1/d19a01f5ad7ac510ca410769dcba590c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=daVSUN4m9Tm7YYBWnzeeuAeL53xSvUEBRbzQTJQX-XLCbNybv203PkQhyIeiQC7wTI2l~pEuKOzPxmTl1-wDwO0dv8C8nZH6X2VA-4u8vdjdLNMOzKZCRhYTXeZjlrpdEJwMyhxK2xrJIQA5j-Rp4sbj~uaDbjMniEbILf5daQ2poAiD2gYWYp570oufSUXQ7An8wn0q82T95JyVZkn2SZJfEwxMK4h3-kaHs~5neeQRhm9i41F1bznoNA1Wu~GcUm3Ufy7EF~ltn~jKpjsyrT8o9HJrhO-vEn8S5oHsaV44zdeXvd-GkTs63zG~3~yNlGkXXmP3WJbv4cz6rSpFZg__"
        />
        <Text typo="Body2">{responseList.salonName}</Text>
        <Seperator mode="dotted" height="2px" />
        <HeightFitFlex direction="column" gap={18}>
          <Flex justify="space-between" padding="0 30.5px">
            <WidthFitFlex direction="column" align='flex-start'>
              <Text typo="Caption5">{responseList.salonAddress}</Text>
              <Text typo="Caption5">{responseList.designerName}</Text>
            </WidthFitFlex>
            <WidthFitFlex direction='column' align='flex-end'>
            <Text typo="Caption5">{responseList.salonPhone}</Text>
            <Text typo="Caption5">{format(responseList.requestTime, 'yyyy-MM-dd HH:mm')}</Text>
            </WidthFitFlex>
          </Flex>
        </HeightFitFlex>
        <Seperator mode="dotted" height="2px" />
        <HeightFitFlex direction="column" gap={18}>
          <Flex justify="space-between" padding="0 30.5px">
            <Text typo="Body2">예약 시간</Text>
            <Text typo="Body2">
              {format(responseList.startDateTime, 'yyyy-MM-dd HH:mm')} ~{' '}
              {format(responseList.endDateTime, 'HH:mm')}
            </Text>
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
        <HeightFitFlex direction="column" gap={18}>
          <Flex justify="space-between" padding="0 30.5px">
            <Text typo="Body2">예상 결제 금액</Text>
            <Text typo="Body1" colorCode={theme.palette.Normal700}>
              {responseList.totalPrice.toLocaleString()} 원
            </Text>
          </Flex>
        </HeightFitFlex>
      </Flex>
      <Flex gap={7} margin='6px 0' padding='16px 18.5px'>{children}</Flex>
    </Flex>
  );
};
