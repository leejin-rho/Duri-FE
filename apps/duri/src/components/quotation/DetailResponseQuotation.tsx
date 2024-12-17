import { Button, ResponseQuotation, theme } from '@duri-fe/ui';
import { useGetDetailQuotation } from '@duri-fe/utils';

export const DetailResponseQuotation = ({
  requestId,
  handleCloseButton,
  handleNavigate,
}: {
  requestId: number;
  quotationId: number;
  handleCloseButton: () => void;
  handleNavigate: () => void;
}) => {
  const { data: quotationData } = useGetDetailQuotation(requestId);

  return (
    <>
      {quotationData && (
        <ResponseQuotation responseList={quotationData}>
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
          {quotationData.status === '결제 전' && (
            <Button
              bg={theme.palette.Black}
              fontColor={theme.palette.White}
              borderRadius="8px"
              typo="Body3"
              width="173px"
              height="47px"
              onClick={handleNavigate}
            >
              수락 및 결제진행
            </Button>
          )}
          {quotationData.status === '결제 완료' && (
            <Button
              bg={theme.palette.Gray200}
              fontColor={theme.palette.White}
              borderRadius="8px"
              typo="Body3"
              width="173px"
              height="47px"
              disabled
            >
              {quotationData.status}
            </Button>
          )}
        </ResponseQuotation>
      )}
    </>
  );
};
