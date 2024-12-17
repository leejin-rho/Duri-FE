import { useNavigate } from 'react-router-dom';

import { Button, ResponseQuotation, theme } from '@duri-fe/ui';
import { useGetDetailQuotation } from '@duri-fe/utils';

export const DetailResponseQuotation = ({
  requestId,
  handleCloseButton,
}: {
  requestId: number;
  handleCloseButton: () => void;
}) => {
  const navigate = useNavigate();
  const { data: quotationData } = useGetDetailQuotation(requestId);
  const handleClickPayment = (quotationId: number) => {
    navigate('/payment', {
      state: {
        quotationId: quotationId,
        requestId: requestId,
      },
    });
  };

  return (
    <>
      {quotationData && (
        <ResponseQuotation responseList={quotationData}>
          {quotationData.status === '결제 전' && (
            <>
              <Button
                bg={theme.palette.Gray20}
                borderRadius="8px"
                typo="Body3"
                width="123px"
                height="47px"
                onClick={handleCloseButton}
              >
                닫기
              </Button>
              <Button
                bg={theme.palette.Black}
                fontColor={theme.palette.White}
                borderRadius="8px"
                typo="Body3"
                width="173px"
                height="47px"
                onClick={() => handleClickPayment(quotationData.quotationId)}
              >
                수락 및 결제진행
              </Button>
            </>
          )}
        </ResponseQuotation>
      )}
    </>
  );
};
