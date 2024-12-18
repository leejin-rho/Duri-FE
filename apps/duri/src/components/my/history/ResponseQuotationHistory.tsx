import { useNavigate } from 'react-router-dom';

import { Button, ResponseQuotation, theme } from '@duri-fe/ui';
import { useGetDetailQuotation } from '@duri-fe/utils';

export const ResponseQuotationHistory = ({
  requestId,
  handleCloseButton,
}: {
  requestId: number;
  handleCloseButton: () => void;
}) => {
  const navigate = useNavigate();
  const { data: quotationData } = useGetDetailQuotation(requestId);
  const handleClickReviewButton = (quotationId: number) => {
    navigate('/review/write', {
      state: {
        quotationId: quotationId,
      },
    });
  };

  return (
    <>
      {quotationData && (
        <ResponseQuotation responseList={quotationData}>
          {quotationData.status === '리뷰 작성 가능' && (
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
                onClick={() =>
                  handleClickReviewButton(quotationData.quotationId)
                }
              >
                후기 쓰기
              </Button>
            </>
          )}
          {quotationData.status === '리뷰 작성 ' && (
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
                bg={theme.palette.Gray200}
                fontColor={theme.palette.White}
                borderRadius="8px"
                typo="Body3"
                width="173px"
                height="47px"
                disabled
              >
                후기 쓰기
              </Button>
            </>
          )}
        </ResponseQuotation>
      )}
    </>
  );
};
