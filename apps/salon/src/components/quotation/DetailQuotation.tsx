import { useNavigate } from 'react-router-dom';

import {
  Button,
  Flex,
  HeightFitFlex,
  ResponseQuotation,
  Text,
  theme,
} from '@duri-fe/ui';
import { useGetDetailQuotation } from '@duri-fe/utils';
import styled from '@emotion/styled';

interface DetailQuotationProps {
  requestId: number;
  enableCompleteButton?: boolean;
  closeModal: () => void;
}

export const DetailQuotation = ({
  requestId,
  enableCompleteButton = false,
  closeModal,
}: DetailQuotationProps) => {
  const navigate = useNavigate();

  const { data: quotation } = useGetDetailQuotation(requestId);

  const handleNavigate = () => {
    closeModal();
    navigate(`/feedback`);
  };

  if (!quotation) {
    return null;
  }

  return (
    <Flex direction="column">
      <ResponseQuotation responseList={quotation} isSalon>
        <HeightFitFlex gap={8}>
          <Button
            width="120px"
            height="47px"
            bg={theme.palette.Gray20}
            borderRadius="8px"
            onClick={closeModal}
          >
            <Text typo="Body3">나중에 쓰기</Text>
          </Button>
          <CompleteButton
            height="47px"
            bg={
              enableCompleteButton ? theme.palette.Black : theme.palette.Gray200
            }
            fontColor={theme.palette.White}
            disabled={!enableCompleteButton}
            borderRadius="8px"
            onClick={enableCompleteButton ? handleNavigate : undefined}
          >
            <Text typo="Body3">일지 쓰기</Text>
          </CompleteButton>
        </HeightFitFlex>
      </ResponseQuotation>
    </Flex>
  );
};

const CompleteButton = styled(Button)`
  flex-shrink: 1;
`;
