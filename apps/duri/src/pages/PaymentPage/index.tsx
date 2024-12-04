import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { QuotationProps } from '@duri/assets/types/quotation';
import PaymentWidget from '@duri/components/payment/widget';
import { DuriNavbar, Flex, MobileLayout } from '@duri-fe/ui';
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
