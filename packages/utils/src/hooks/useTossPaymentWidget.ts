import { useEffect, useState } from 'react';

import { loadTossPayments } from '@tosspayments/tosspayments-sdk';
import { TossPaymentsWidgets } from '@tosspayments/tosspayments-sdk';

interface Amount {
  currency: string;
  value: number;
}

export const useTossPaymentWidget = (
  amount: Amount,
  customerKey?: string,
) => {
  const [ready, setReady] = useState<boolean>(false);
  const [widgets, setWidgets] = useState<TossPaymentsWidgets | null>(null);

  useEffect(() => {
    if (!customerKey) return; // customerKey가 없으면 초기화 중지

    if (widgets) return; //위젯이 이미 렌더링 되어있으면 다시 호출하지 않도록 !

    const initWidgets = async () => {
      try {
        const tossPayments = await loadTossPayments(
          import.meta.env.VITE_CLIENT_KEY, // Client Key
        );

        // 기존 위젯을 렌더링할 HTML 요소 제거
        const paymentMethodElement = document.querySelector('#payment-method');
        const agreementElement = document.querySelector('#agreement');

        if (paymentMethodElement) {
          paymentMethodElement.innerHTML = ''; // 기존 내용 제거
        }

        if (agreementElement) {
          agreementElement.innerHTML = ''; // 기존 내용 제거
        }

        const widgetsInstance = tossPayments.widgets({ customerKey });

        await widgetsInstance.setAmount(amount);

        await Promise.all([
          widgetsInstance.renderPaymentMethods({
            selector: '#payment-method',
            variantKey: 'DEFAULT',
          }),
          widgetsInstance.renderAgreement({
            selector: '#agreement',
            variantKey: 'AGREEMENT',
          }),
        ]);

        setWidgets(widgetsInstance);
        setReady(true);
      } catch (error) {
        console.error('토스 위젯 초기화 실패:', error);
      }
    };

    initWidgets();
  }, [customerKey, amount]);

  return { widgets, ready };
};
