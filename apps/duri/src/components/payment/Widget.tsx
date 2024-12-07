import { useEffect, useState } from 'react';
import React from 'react';

import { Button, Flex, Seperator, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';
import {
  loadTossPayments,
  TossPaymentsWidgets,
} from '@tosspayments/tosspayments-sdk';

import { QuotationProps } from '../../assets/types/quotation';

import PaymentInfo from './Info';

const clientKey = import.meta.env.VITE_CLIENT_KEY;
const customerKey = '1'; //user Idx값으로 대체하기!

interface QuotationInfo {
  quotationInfo: QuotationProps;
}
interface Amount {
  currency: string;
  value: number;
}

const PaymentWidget = ({ quotationInfo }: QuotationInfo) => {
  const vat = quotationInfo.groomingTotalPrice * 0.1;
  const totalPrice = quotationInfo.groomingTotalPrice + vat;
  // const [amount, setAmount] = useState<Amount>({
  const [amount] = useState<Amount>({
    currency: 'KRW',
    value: totalPrice,
  });
  const [ready, setReady] = useState<boolean>(false);
  const [widgets, setWidgets] = useState<TossPaymentsWidgets | null>(null);

  useEffect(() => {
    async function fetchPaymentWidgets() {
      // ------  결제위젯 초기화 ------
      const tossPayments = await loadTossPayments(clientKey);
      // 회원 결제
      const widgets = tossPayments.widgets({
        customerKey,
      });
      // 비회원 결제
      // const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });

      setWidgets(widgets);
    }

    fetchPaymentWidgets();
  }, [clientKey, customerKey]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets == null) {
        return;
      }
      // ------ 주문의 결제 금액 설정 ------
      await widgets.setAmount(amount);

      await Promise.all([
        // ------  결제 UI 렌더링 ------
        widgets.renderPaymentMethods({
          selector: '#payment-method',
          variantKey: 'DEFAULT',
        }),
        // ------  이용약관 UI 렌더링 ------
        widgets.renderAgreement({
          selector: '#agreement',
          variantKey: 'AGREEMENT',
        }),
      ]);

      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets]);

  useEffect(() => {
    if (widgets == null) {
      return;
    }

    widgets.setAmount(amount);
  }, [widgets, amount]);

  return (
    <Container direction="column">
      <Flex direction="column" className="wrapper">
        <Flex direction="column" className="box_section">
          {/* 결제 UI */}
          <Flex direction="column" id="payment-method" />

          {/* 이용약관 UI */}
          <Flex id="agreement" padding="0" />
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
      <PaymentInfo
        totalGroomingPrice={quotationInfo.groomingTotalPrice}
        vat={quotationInfo.groomingTotalPrice * 0.1}
      />
      {/* 결제하기 버튼 */}
      <BottomButton
        bg={theme.palette.Black}
        fontColor={theme.palette.White}
        typo="Body2"
        disabled={!ready}
        borderRadius="0"
        height="53px"
        onClick={async () => {
          try {
            // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
            // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
            // 결제 항목(groomingList, 미용실 정보, 고객 정보) POST 요청 to 서버!!!!!!

            // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
            if (widgets)
              await widgets.requestPayment({
                orderId: 'gmilrw7NlNvxDwuzV2D4m',
                orderName: `${quotationInfo.groomingList[0].menu} 외 ${quotationInfo.groomingList.length - 1}건`,
                successUrl: window.location.origin + '/payment/success',
                failUrl: window.location.origin + '/payment/fail',
                customerName: '김토스',
                customerMobilePhone: '01012341234',
                metadata: {
                  salonName: quotationInfo.salonName,
                  date: new Date().toISOString(),
                },
              });
          } catch (error) {
            // 에러 처리하기
            console.error(error);
          }
        }}
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
