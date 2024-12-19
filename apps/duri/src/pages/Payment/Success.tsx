import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  DuriNavbar,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  PaymentSuccess,
  Seperator,
  Text,
  theme,
} from '@duri-fe/ui';
import { usePostAmountVerity, usePostPayment } from '@duri-fe/utils';
import styled from '@emotion/styled';
import { format } from 'date-fns';


const SuccessPage = () => {
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const [paymentKey, setPaymentKey] = useState<string>();
  const [quotationId, setQuotationId] = useState<number>();

  const [searchParams] = useSearchParams();

  const { mutateAsync: postAmountVerify, isSuccess: verifySuccess } =
    usePostAmountVerity(); //결제 정보 검증

  const {
    mutateAsync: postPaymentConfirm,
    isError: confirmError,
    isSuccess: confirmSuccess,
  } = usePostPayment();

  useEffect(() => {
    const requestData = {
      orderId: searchParams.get('orderId'),
      amount: Number(searchParams.get('amount')),
      paymentKey: searchParams.get('paymentKey'),
      quotationId: Number(searchParams.get('quotationId')),
    };

    if (requestData.amount) setAmount(requestData.amount);
    if (requestData.orderId) setOrderId(requestData.orderId);
    if (requestData.paymentKey) setPaymentKey(requestData.paymentKey);
    if (requestData.quotationId) setQuotationId(requestData.quotationId);

    if (requestData.amount && requestData.orderId && requestData.paymentKey) {
      const responseData = {
        orderId: requestData.orderId,
        amount: requestData.amount,
      };

      //결제 금액 확인
      postAmountVerify(responseData);
    }
  }, []);

  // 검증 성공 시 결제 완료로 확정
  useEffect(() => {
    if (verifySuccess) {
      const paymentInfo = {
        orderId: orderId,
        amount: amount,
        paymentKey: paymentKey,
        quotationId: quotationId,
      };

      postPaymentConfirm(paymentInfo);
    }
  }, [verifySuccess]);

  useEffect(() => {
    if (confirmError) {
      navigate(
        '/payment/fail?code=FAIL_CONFIRM&message=결제가 중단되었습니다.',
      );
    } else if (confirmSuccess) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [confirmError, confirmSuccess]);

  return (
    <MobileLayout>
      <Container direction="column">
        <Header />
        <Flex
          direction="column"
          padding="0 24px 46px 24px"
          gap={29}
          margin="0 0 35px 0"
        >
          <PaymentSuccess width={126} height={126} />

          <Text typo="Body1" colorCode={theme.palette.Normal700}>
            결제가 완료되었습니다!
          </Text>

          <Seperator height="1px" />
          <HeightFitFlex
            direction="column"
            padding="0 10px"
            gap={12}
            justify="flex-start"
          >
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
                {Number(searchParams.get('amount')).toLocaleString()} 원
              </Text>
            </HeightFitFlex>
          </HeightFitFlex>
          <Seperator height="1px" />
          <Flex
            direction="column"
            padding="0 10px"
            gap={12}
            justify="flex-start"
          >
            <HeightFitFlex justify="space-between">
              <Text typo="Caption1" colorCode={theme.palette.Gray300}>
                결제일시
              </Text>
              <Text typo="Label2">{format(new Date(), "yyyy-MM-dd HH:mm:ss")}</Text>
            </HeightFitFlex>
            <HeightFitFlex justify="space-between">
              <Text typo="Caption1" colorCode={theme.palette.Gray300}>
                결제수단
              </Text>
              <Text typo="Label2">간편결제</Text>
            </HeightFitFlex>
          </Flex>
        </Flex>

        <BottomWrapper padding="0 44px" widthPer={100}>
          <ul>
            <Li>결제금액은 해당 금액만큼 충전 후 즉시 결제됩니다.</Li>
            <Li>
              포인트 적립 정책은 예고없이 변경될 수 있으며, 결제 취소 시적립된
              포인트는 회수됩니다.
            </Li>
            <Li colorCode={theme.palette.Black}>
              결제 취소를 원할 경우 매장에 문의해주세요.
            </Li>
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
`;

const BottomWrapper = styled(HeightFitFlex)`
  position: absolute;
  bottom: 117px;
`;
