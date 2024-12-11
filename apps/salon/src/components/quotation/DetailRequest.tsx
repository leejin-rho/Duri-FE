import { useNavigate } from "react-router-dom";

import { Button, Flex, HeightFitFlex, RequestQuotation, Text, theme } from "@duri-fe/ui";
import { useGetDetailRequest } from "@duri-fe/utils";
import styled from "@emotion/styled";

interface DetailRequestProps {
  requestId: number;
  closeModal: () => void;
}

export const DetailRequest = ({
  requestId,
  closeModal,
}: DetailRequestProps) => {
  const navigate = useNavigate();

  const { data: request, timeList } = useGetDetailRequest(requestId);

  const handleReply = () => {
    closeModal();
    navigate(`/quotation/reply/${requestId}`);
  }

  if (!request) return null;

  return (
    <Flex direction="column">
      <RequestQuotation requestList={request} selectedTimeList={timeList}>
        <HeightFitFlex gap={8}>
          <Button 
            width='120px'
            height='47px'
            bg={theme.palette.Gray20}
            borderRadius='8px'
            onClick={closeModal}
          >
            <Text typo='Body3'>나중에 쓰기</Text>
          </Button>
          <CompleteButton 
            height='47px'
            bg={theme.palette.Black}
            fontColor={theme.palette.White}
            borderRadius='8px'
            onClick={handleReply}
          >
            <Text typo='Body3'>견적서 작성</Text>
          </CompleteButton>
        </HeightFitFlex>
      </RequestQuotation>
    </Flex>
  );
}

const CompleteButton = styled(Button)`
  flex-shrink: 1;
`