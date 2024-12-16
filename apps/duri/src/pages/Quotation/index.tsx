import { useEffect } from 'react';

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
import { useGetRequestHistory } from '@duri-fe/utils';

const QuotationPage = () => {
  const { data: requestList } = useGetRequestHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    console.log(requestList);
  });

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
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

        {requestList && requestList.length > 0 ? (
          <Flex direction="column" padding="0 22px" align="flex-start" gap={12}>
            {requestList.map((requestItem) => (
              <RequestItem
                key={requestItem.quotationReqId}
                requestItem={requestItem}
              />
            ))}
          </Flex>
        ) : (
          <Flex margin='92px 0 0'>
          <Text typo="Body3" colorCode={theme.palette.Gray300}>
            요청서 및 견적서가 없습니다.
          </Text>
          </Flex>
        )}
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default QuotationPage;
