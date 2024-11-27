import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { QuotationProps } from '@duri/assets/types/QuotationType';
import PaymentInfo from '@duri/components/payment/info';
import PaymentWidget from '@duri/components/payment/widget';
import { getQuotationInfo } from '@duri-fe/utils';

const PaymentPage = () => {
  const { quotationId } = useParams<{ quotationId: string }>();
  //고객 정보 - 전역변수

  //매장 및 시술 정보
  const [quotationInfo, setQuotationInfo] = useState<QuotationProps>();
  useEffect(() => {
    (async () => {
      if (quotationId) {
        try {
          const quotation = await getQuotationInfo(quotationId);
          if (quotation) setQuotationInfo(quotation);

          console.log(typeof quotationInfo?.groomingTotalPrice);
        } catch (error) {
          console.error('Failed to fetch quotation info:', error);
        }
      }
    })();
  }, [quotationId]);

  //쿠폰 정보 - 후순위!!!!!!
  //   const [coupons, setCoupons] = useState();
  useEffect(() => {
    // 쿠폰 정보 불러와야 함
  }, []);

  return (
    <>
      {quotationInfo ? (
        <>
          {/* 결제 정보 컴포넌트 - 쿠폰 개발된다면 쿠폰 정보도 같이 넘겨야 함 */}
          <PaymentInfo quotationInfo={quotationInfo} />
          {/* 결제 방법 - 쿠폰 개발된다면 쿠폰 정보도 같이 넘겨야 함 */}
          <PaymentWidget quotationInfo={quotationInfo} />
        </>
      ) : (
        <>돌아가기</>
      )}
    </>
  );
};

export default PaymentPage;
