import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PaymentInfo from '@duri/components/payment/info';
import PaymentWidget from '@duri/components/payment/widget';
import { getQuotationInfo } from '@duri-fe/utils';

export interface QuotationProps {
  salonIdx: string;
  salonName: string;
  salonAddress: string;
  salonImage: string;
  designerName: string;
  designerCareer: string;
  designerAge: number;
  designerGender: string;
  groomingList: { menu: string; price: number }[]; // 배열의 각 요소가 "{menu:"시술 이름", price:"금액"}" 형식의 객체
  groomingTotalPrice: number;
}

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

  return (
    <>
      {quotationInfo ? (
        <>
          {/* 결제 정보 컴포넌트 */}
          <PaymentInfo quotationInfo={quotationInfo}/>
          {/* 결제 방법 */}
          <PaymentWidget quotationInfo={quotationInfo} />
        </>
      ) : (
        <>돌아가기</>
      )}
    </>
  );
};

export default PaymentPage;
