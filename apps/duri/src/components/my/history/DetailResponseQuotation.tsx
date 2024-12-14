import { Button, ResponseQuotation, theme } from '@duri-fe/ui';
import { useGetQuotationInfo } from '@duri-fe/utils';

export const DetailResponseQuotation = ({
  quotationId,
  handleCloseButton,
  handleNavigate,
}: {
  quotationId: number;
  handleCloseButton: () => void;
  handleNavigate: (e: React.MouseEvent) => void;
}) => {
  const { data: quotationData } = useGetQuotationInfo(quotationId);

  return (
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
      <Button
        bg={theme.palette.Black}
        fontColor={theme.palette.White}
        borderRadius="8px"
        typo="Body3"
        width="173px"
        height="47px"
        onClick={handleNavigate}
      >
        수락 및 결제진행 또는 리뷰작성
      </Button>
    </ResponseQuotation>
  );
};
