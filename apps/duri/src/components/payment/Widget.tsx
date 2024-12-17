import { useEffect } from 'react';

import { Button, Flex, Seperator, theme } from '@duri-fe/ui';
import {
  handlePayment,
  useGetUuid,
  usePostAmount,
  useTossPaymentWidget,
} from '@duri-fe/utils';
import styled from '@emotion/styled';

import PaymentInfo from './Info';

interface PaymentWidget {
  groomingPrice: number;
  groomingList: string[];
  quotationId: number
}

const PaymentWidget = ({
  groomingList,
  groomingPrice,
  quotationId
}: PaymentWidget) => {
  // 결제 금액 정보
  const vat = groomingPrice * 0.1;
  const totalPrice = groomingPrice + vat;

  const amount = { currency: 'KRW', value: totalPrice }; //결제 금액 정보 저장

  const { data: uuidData } = useGetUuid(); // 생성된 customerKey, orderId 저장
  const { mutateAsync: postAmount } = usePostAmount();

  const { widgets, ready } = useTossPaymentWidget(
    uuidData?.customerKey,
    amount,
  );

  const handleClickPaymentButton = () => {
    if (
      widgets === null ||
      uuidData === undefined ||
      uuidData?.customerKey === undefined ||
      uuidData?.orderId === undefined
    ) {
      return;
    } else {
      const orderId = uuidData.orderId;

      //세션 임시저장 api 호출
      postAmount({ amount: groomingPrice, orderId: orderId });

      //토스 결제
      handlePayment({
        widgets,
        groomingList,
        orderId,
        quotationId
      });
    }
  };

  useEffect(() => {
    if (widgets == null) {
      return;
    }

    widgets.setAmount(amount);
  }, [widgets, amount]);

  useEffect(() => {
    console.log(uuidData);
  }, [uuidData]);

  return (
    <Container direction="column">
      <Flex direction="column" className="wrapper">
        <Flex direction="column" className="box_section">
          {/* 결제 UI */}
          <Flex direction="column" id="payment-method" />

          {/* 이용약관 UI */}
          <Flex id="agreement" padding="0"></Flex>
          {/* 쿠폰 체크박스 */}
          {/* <div>
          <div>
            <label htmlFor="coupon-box">
              <input
                id="coupon-box"
                type="checkbox"
                aria-checked="true"
                disabled={!ready}
                onChange={(event) => {
                  setAmount({
                    ...amount,
                    value: event.target.checked
                      ? amount.value - 5_000
                      : amount.value + 5_000,
                  });
                }}
              />
              <span>5,000원 할인 쿠폰 적용</span>
            </label>
          </div>
        </div> */}
        </Flex>
      </Flex>
      <Seperator height="12px" />
      {/* 결제 정보 컴포넌트 - 쿠폰 개발된다면 쿠폰 정보도 같이 넘겨야 함 */}
      <PaymentInfo totalGroomingPrice={groomingPrice} vat={vat} />
      {/* 결제하기 버튼 */}
      <BottomButton
        bg={theme.palette.Black}
        fontColor={theme.palette.White}
        typo="Body2"
        disabled={!ready}
        borderRadius="0"
        height="53px"
        onClick={handleClickPaymentButton}
      >
        결제 진행하기
      </BottomButton>
    </Container>
  );
};

export default PaymentWidget;

const Container = styled(Flex)`
  position: relative;
`;

const BottomButton = styled(Button)`
  position: sticky;
  bottom: 92px;
  left: 0;
  z-index: 999;
`;
