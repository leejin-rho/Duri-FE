import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PaymentWidget from '@duri/components/payment/Widget';
import { DuriNavbar, Flex, Header, MobileLayout, Text } from '@duri-fe/ui';
import { useGetDetailQuotation } from '@duri-fe/utils';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { quotationId, requestId } = location.state; // state에서 quotationId 가져오기

  //매장 및 시술 정보 조회 & 결제를 위해 파라미터로 들어가는 애들 유효성 검사
  if (requestId === undefined) return;
  if (quotationId === undefined) return;

  const { data: quotationData } = useGetDetailQuotation(requestId);

  const [groomingList, setGroomingList] = useState<string[]>([]);

  const handleClickBackButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (quotationData) {
      const groomingList = [
        ...quotationData.menuDetail.groomingMenu,
        ...quotationData.menuDetail.additionalGrooming,
        ...quotationData.menuDetail.specialCare,
        ...quotationData.menuDetail.designCut,
      ];
      setGroomingList(groomingList);
    }
  }, [quotationData]);
  //쿠폰 정보 - 후순위!!!!!!

  return (
    <MobileLayout>
      <Header backIcon onClickBack={handleClickBackButton} title="주문서" />
      {quotationData ? (
        <Flex direction="column">
          {/* 결제 방법 - 쿠폰 개발된다면 쿠폰 정보도 같이 넘겨야 함 */}
          <PaymentWidget
            groomingPrice={quotationData.quotation.priceDetail.totalPrice}
            groomingList={groomingList}
            quotationId={Number(quotationId)}
          />
        </Flex>
      ) : (
        <Flex>
          <Text>Loading...</Text>
        </Flex>
      )}
      <DuriNavbar />
    </MobileLayout>
  );
};

export default PaymentPage;
