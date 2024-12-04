import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { HeightFitFlex, MobileLayout } from '@duri-fe/ui';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // 쿼리 파라미터 값이 결제 요청할 때 보낸 데이터와 동일한지 반드시 확인하세요.
    // 클라이언트에서 결제 금액을 조작하는 행위를 방지할 수 있습니다.
    const requestData = {
      orderId: searchParams.get('orderId'),
      amount: searchParams.get('amount'),
      paymentKey: searchParams.get('paymentKey'),
    };

    async function confirm() {
      //PATCH 요청으로 결제 완료 상태로 바꾸기
      const response = await fetch('/confirm', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const json = await response.json();

      if (!response.ok) {
        // 결제 실패 비즈니스 로직을 구현하세요.
        navigate(`/fail?message=${json.message}&code=${json.code}`);
        return;
      }

      // 결제 성공 비즈니스 로직을 구현하세요.
      // 결제 성공 시 마이 견적으로 이동 -> 견적 요청 목록에서 안뜨도록 변경되어야 함 -> 예약 탭에서 뜨게
      // 쿠폰 사용한 경우 쿠폰 개수 줄이는 동작도 필요
    }
    confirm();
  }, []);

  return (
    <MobileLayout>
      <HeightFitFlex direction="column" margin="56px 0 0 0">
        {/* <BoxSelect width={126} height={126} stroke={theme.palette.Normal700} fill={theme.palette.White} /> */}

        <div className="box_section">
          <h2>결제 성공</h2>
          <p>{`주문번호: ${searchParams.get('orderId')}`}</p>
          <p>{`결제 금액: ${Number(
            searchParams.get('amount'),
          ).toLocaleString()}원`}</p>
          <p>{`paymentKey: ${searchParams.get('paymentKey')}`}</p>
        </div>
      </HeightFitFlex>
    </MobileLayout>
  );
};

export default SuccessPage;
