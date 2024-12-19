import { useEffect } from 'react';

import { RequestItemType } from '@duri/assets/types';
import { RequestItem } from '@duri/components/quotation/RequestItem';
import {
  DuriNavbar,
  Flex,
  Header,
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

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header title="요청서 및 견적서" />
      <Flex
        direction="column"
        gap={12}
        padding="0 20px"
        margin="10px 0 102px 0"
      >
        {requestList && requestList.length > 0 ? (
          <Flex direction="column" padding="0 22px" align="flex-start" gap={12}>
            {requestList.map(
              ({
                quotationReqId,
                requestId,
                createdAt,
                expiredAt,
                isExpired,
                shops,
              }: RequestItemType) => (
                <RequestItem
                  key={requestId}
                  quotationReqId={quotationReqId}
                  requestId={requestId}
                  createdAt={createdAt}
                  expiredAt={expiredAt}
                  isExpired={isExpired}
                  shops={shops}
                />
              ),
            )}
          </Flex>
        ) : (
          <Flex margin="92px 0 0">
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
