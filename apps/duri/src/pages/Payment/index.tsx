import { useLocation } from 'react-router-dom';

// import PaymentWidget from '@duri/components/payment/Widget';
import { DuriNavbar, Flex, MobileLayout } from '@duri-fe/ui';
import { useGetDetailQuotation } from '@duri-fe/utils';

const PaymentPage = () => {
  const location = useLocation();
  const { selectedQuotationId } = location.state; // state에서 quotationId 가져오기

  //매장 및 시술 정보
  if (selectedQuotationId === undefined) return;
  else console.log(selectedQuotationId);
  const { data: quotationData } = useGetDetailQuotation(selectedQuotationId);

  //쿠폰 정보 - 후순위!!!!!!

  return (
    <MobileLayout>
      {quotationData ? (
        <Flex direction="column">
          {/* 결제 방법 - 쿠폰 개발된다면 쿠폰 정보도 같이 넘겨야 함 */}
          {/* <PaymentWidget quotationInfo={quotationData} /> */}
        </Flex>
      ) : (
        <>돌아가기</>
      )}
      <DuriNavbar />
    </MobileLayout>
  );
};

export default PaymentPage;
