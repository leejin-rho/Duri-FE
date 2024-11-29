import { QuotationProps } from '@duri/assets/types/QuotationType';



interface QuotationInfo {
  quotationInfo: QuotationProps;
}

const PaymentInfo = ({ quotationInfo }: QuotationInfo) => {
  //고객 정보 - 전역변수
  const user = { name: '김동글', phone: '010-1234-5678' };

  return (
    <>
      <>
        고객 정보
        {user.name}님{user.phone}
      </>
      <>
        매장 정보
        {quotationInfo.salonImage}
        {quotationInfo.salonName}
        {quotationInfo.salonAddress}
        미용사 정보
        {quotationInfo.designerName} 디자이너 경력{quotationInfo.designerCareer}
        /{quotationInfo.designerGender}/{quotationInfo.designerAge}세
      </>
      <>
        시술 정보
        {quotationInfo.groomingList.map((grooming) => {
          return (
            <>
              {grooming.menu} {grooming.price}
            </>
          );
        })}
        총 금액 {quotationInfo.groomingTotalPrice} 원
      </>
      <>
        쿠폰 정보
        <>쿠폰 컴포넌트 만들어야 함 근데 완전 후순위</>
      </>
      <>
        결제 정보
        {quotationInfo.groomingTotalPrice}
      </>
    </>
  );
};

export default PaymentInfo;
