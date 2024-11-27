import { useEffect, useState } from 'react';

import { QuotationProps } from '@duri/assets/types/QuotationType';
import {
  loadTossPayments,
  TossPaymentsWidgets,
} from '@tosspayments/tosspayments-sdk';

const clientKey = import.meta.env.VITE_CLIENT_KEY;
const customerKey = crypto.randomUUID(); //user Idx값으로 대체하기!

interface QuotationInfo {
    quotationInfo: QuotationProps;
}
interface Amount {
  currency: string;
  value: number;
}

const PaymentWidget = ({quotationInfo} : QuotationInfo) => {
  const [amount, setAmount] = useState<Amount>({
    currency: 'KRW',
    value: quotationInfo.groomingTotalPrice,
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
    <div className="wrapper">
      <div className="box_section">
        {/* 결제 UI */}
        <div id="payment-method" />
        {/* 이용약관 UI */}
        <div id="agreement" />
        {/* 쿠폰 체크박스 */}
        <div>
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
              {/* <span>5,000원 할인 쿠폰 적용</span> */}
            </label>
          </div>
        </div>

        {/* 결제하기 버튼 */}
        <button
          className="button"
          disabled={!ready}
          onClick={async () => {
            try {
              // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
              // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
                // 결제 항목(groomingList, 미용실 정보, 고객 정보) POST 요청 to 서버!!!!!!



              // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
              if (widgets)
                await widgets.requestPayment({
                  orderId: 'gmilrw7NlNvxDwuzV2D4m',
                  orderName: `${quotationInfo.groomingList[0].menu} 외 ${quotationInfo.groomingList.length-1}건`,
                  successUrl: window.location.origin + '/payment/success',
                  failUrl: window.location.origin + '/payment/fail',
                  customerName: '김토스',
                  customerMobilePhone: '01012341234',
                });
            } catch (error) {
              // 에러 처리하기
              console.error(error);
            }
          }}
        >
          {amount.value}원 결제하기
        </button>
      </div>
    </div>
  );
};

export default PaymentWidget;
