import { useEffect, useState } from 'react';

import { RequestItemType } from '@duri/assets/types';
import { RequestItem } from '@duri/components/quotation/RequestItem';
import {
  DuriNavbar,
  FilledLocation,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';

const defaultRequestItems = [
  {
    quotationId: 2,
    createdAt: '2024-12-06T14:13:41.575229',
    expiredAt: '2024-12-07T14:13:41.575229',
    shops: [
      {
        shopId: 1,
        shopName: '강남 미용샵',
      },
    ],
    expired: true,
  },
  {
    quotationId: 3,
    createdAt: '2024-12-06T16:03:42.476479',
    expiredAt: '2024-12-07T16:03:42.476479',
    shops: [
      {
        shopId: 1,
        shopName: '강남 미용샵',
      },
      {
        shopId: 2,
        shopName: '홍대 펫샵',
      },
    ],
    expired: false,
  },
];

const QuotationPage = () => {
  const [requestList] = useState<RequestItemType[] | null>(defaultRequestItems);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MobileLayout>
      <Header title="요청서 및 견적서" />
      <Flex
        direction="column"
        gap={12}
        padding="0 20px"
        margin="10px 0 102px 0"
      >
        <HeightFitFlex gap={5} justify="flex-start">
          <FilledLocation
            width={22}
            height={22}
            color={theme.palette.Gray500}
          />
          <Text typo="Label2" colorCode={theme.palette.Gray600}>
            경기도 성남시
          </Text>
        </HeightFitFlex>
        <Flex direction="column" padding="0 22px" align="flex-start" gap={12}>
          {requestList &&
            requestList.map((requestItem) => (
              <RequestItem
                key={requestItem.quotationId}
                requestItem={requestItem}
              />
            ))}
        </Flex>
      </Flex>
      {/* <RequestQuotation />
          <ResponseQuotation>
            <Button
              bg={theme.palette.Gray20}
              borderRadius="8px"
              typo="Body3"
              width="123px"
              height="47px"
            >
              거절
            </Button>
            <Button
              bg={theme.palette.Black}
              fontColor={theme.palette.White}
              borderRadius="8px"
              typo="Body3"
              width="173px"
              height="47px"
            >
              수락 및 결제진행
            </Button>
          </ResponseQuotation> */}
      <DuriNavbar />
    </MobileLayout>
  );
};

export default QuotationPage;
