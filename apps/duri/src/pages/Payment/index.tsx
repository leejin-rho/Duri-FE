import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { QuotationProps } from '@duri/assets/types/quotation';
import PaymentWidget from '@duri/components/payment/Widget';
import { DuriNavbar, Flex, MobileLayout } from '@duri-fe/ui';
import { useGetQuotationInfo } from '@duri-fe/utils';

const PaymentPage = () => {
  const location = useLocation();
  const { selectedQuotationId } = location.state; // state에서 quotationId 가져오기

  //매장 및 시술 정보
  const [quotationInfo, setQuotationInfo] = useState<QuotationProps>();
  if(selectedQuotationId === undefined) return
  else console.log(selectedQuotationId);
  const response = useGetQuotationInfo(selectedQuotationId);

  useEffect(()=>{
    if(response) setQuotationInfo(response);
  }, [response])

  //쿠폰 정보 - 후순위!!!!!!
  //   const [coupons, setCoupons] = useState();
  // useEffect(() => {
    // 쿠폰 정보 불러와야 함
  // }, []);

  return (
    <MobileLayout>
      {quotationInfo ? (
        <Flex direction='column'>
          {/* 결제 방법 - 쿠폰 개발된다면 쿠폰 정보도 같이 넘겨야 함 */}
          <PaymentWidget quotationInfo={quotationInfo} />
        </Flex>
      ) : (
        <>돌아가기</>
      )}
      <DuriNavbar />
    </MobileLayout>
  );
};

export default PaymentPage;
