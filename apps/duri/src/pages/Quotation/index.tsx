import {
  Button,
  MobileLayout,
  RequestQuotation,
  ResponseQuotation,
  theme,
} from '@duri-fe/ui';

const QuotationPage = () => {
  return (
    <MobileLayout>
      <RequestQuotation />
      <ResponseQuotation>
        <Button
          bg={theme.palette.Gray20}
          borderRadius="8px"
          typo="Body3"
          width="123px"
          height="47px"
        >
          거절
        </Button>
        <Button
          bg={theme.palette.Black}
          fontColor={theme.palette.White}
          borderRadius="8px"
          typo="Body3"
          width="173px"
          height="47px"
        >
          수락 및 결제진행
        </Button>
      </ResponseQuotation>
    </MobileLayout>
  );
};

export default QuotationPage;
