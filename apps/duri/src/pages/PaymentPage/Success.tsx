import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  DuriNavbar,
  Flex,
  HeightFitFlex,
  MobileLayout,
  Seperator,
  Text,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

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
      <Container direction='column'>
      <Flex direction="column" padding="0 24px 46px 24px" gap={29} margin='90px 0 35px 0'>
        {/* <RadioSelect width={126} height={126} stroke={theme.palette.Normal700} fill={theme.palette.White} /> */}

        <Text typo="Body1" colorCode={theme.palette.Normal700}>
          결제가 완료되었습니다!
        </Text>
        {/* <p>{`주문번호: ${searchParams.get('orderId')}`}</p>
        <p>{`결제 금액: ${Number(
          searchParams.get('amount'),
        ).toLocaleString()}원`}</p>
        <p>{`paymentKey: ${searchParams.get('paymentKey')}`}</p> */}

        <Seperator height="1px" />
        <HeightFitFlex direction="column" padding="0 10px" gap={12} justify='flex-start'>
          <HeightFitFlex justify="space-between">
            <Text typo="Caption1" colorCode={theme.palette.Gray300}>
              가맹점
            </Text>
            <Text typo="Label2">댕댕샵</Text>
          </HeightFitFlex>
          <HeightFitFlex justify="space-between">
            <Text typo="Caption1" colorCode={theme.palette.Gray300}>
              결제금액
            </Text>
            <Text typo="Body1" colorCode={theme.palette.Normal700}>
            {Number(
          searchParams.get('amount'),
        ).toLocaleString()} 원
            </Text>
          </HeightFitFlex>
        </HeightFitFlex>
        <Seperator height="1px" />
        <Flex direction="column" padding="0 10px" gap={12} justify='flex-start'>
          <HeightFitFlex justify="space-between">
            <Text typo="Caption1" colorCode={theme.palette.Gray300}>
              결제일시
            </Text>
            <Text typo="Label2">2024-11-21 10:52:16</Text>
          </HeightFitFlex>
          <HeightFitFlex justify="space-between">
            <Text typo="Caption1" colorCode={theme.palette.Gray300}>
              결제카드
            </Text>
            <Text typo="Label2">현대카드</Text>
          </HeightFitFlex>
        </Flex>
        </Flex>

        <BottomWrapper padding='0 44px' widthPer={100}>
          <ul>
            <Li>결제금액은 해당 금액만큼 충전 후 즉시 결제됩니다.</Li>
            <Li>
              포인트 적립 정책은 예고없이 변경될 수 있으며, 결제 취소 시적립된
              포인트는 회수됩니다.
            </Li>
            <Li colorCode={theme.palette.Black}>결제 취소를 원할 경우 매장에 문의해주세요.</Li>
          </ul>
        </BottomWrapper>
      </Container>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default SuccessPage;

const Li = styled.li<{ colorCode?: string }>`
  list-style: outside;
  color: ${({ colorCode }) => (colorCode ? colorCode : theme.palette.Gray400)};
  font: ${theme.typo.Caption4};
`;

const Container = styled(Flex)`
  position: relative;
  height: 100vh;
`

const BottomWrapper = styled(HeightFitFlex)`
  position: absolute;
  bottom: 117px;
`
