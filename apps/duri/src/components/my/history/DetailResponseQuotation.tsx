import { useEffect } from 'react';

import { Button, ResponseQuotation, theme } from '@duri-fe/ui';
import { useGetDetailQuotation } from '@duri-fe/utils';

export const DetailResponseQuotation = ({
  quotationId,
  handleCloseButton,
  handleNavigate,
}: {
  quotationId: number;
  handleCloseButton: () => void;
  handleNavigate: (e: React.MouseEvent) => void;
}) => {
  const { data: quotationData } = useGetDetailQuotation(quotationId);
  useEffect(() => {
    if (quotationData) console.log(quotationData);
  });

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
          <Button
            bg={
              quotationData.status === '결제 전'
                ? theme.palette.Black
                : theme.palette.Gray20
            }
            fontColor={
              quotationData.status === '결제 전'
                ? theme.palette.White
                : theme.palette.Black
            }
            borderRadius="8px"
            typo="Body3"
            width="173px"
            height="47px"
            onClick={handleNavigate}
          >
            {quotationData.status === '결제 전'
              ? '수락 및 결제진행'
              : quotationData.status}
          </Button>
        </ResponseQuotation>
      )}
    </>
  );
};
