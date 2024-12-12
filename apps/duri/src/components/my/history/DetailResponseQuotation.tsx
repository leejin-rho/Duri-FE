import { useState } from 'react';

import { ResponseQuotationType } from '@duri/assets/types';
import {
  Button,
  defaultResponseData,
  ResponseQuotation,
  theme,
} from '@duri-fe/ui';

export const DetailResponseQuotation = ({
  quotationId,
  handleCloseButton,
  handleNavigate,
}: {
  quotationId: number;
  handleCloseButton: () => void;
  handleNavigate: (e: React.MouseEvent) => void;
}) => {
  // const responseQuotationData  quotationId로 응답견적서 정보 받아와야 함
  // const [responseList, setResponseList] =
  const [responseList] =
    useState<ResponseQuotationType>(defaultResponseData);
    console.log(quotationId)
  return (
    <ResponseQuotation responseList={responseList}>
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
