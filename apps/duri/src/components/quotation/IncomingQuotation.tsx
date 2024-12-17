import { Button, Flex, Modal, NextArrow, Text, theme } from '@duri-fe/ui';
import { useModal } from '@duri-fe/utils';
import styled from '@emotion/styled';

import { DetailResponseQuotation } from './DetailResponseQuotation';

interface IncomingQuotationProps {
  quotationId: number;
  requestId: number;
  onSelect: () => void;
  salonName: string;
  price: number | null;
}

export const IncomingQuotation = ({
  quotationId,
  requestId,
  salonName,
  price = null,
  onSelect,
}: IncomingQuotationProps) => {
  const { isOpenModal, toggleModal } = useModal();
  const handleClickNavigateButton = () => {
    toggleModal();
    onSelect();
  };

  return (
    <>
      <Button
        padding="24px 16px"
        bg={theme.palette.White}
        borderRadius="16px"
        disabled={price === null}
        onClick={price === null ? undefined : toggleModal}
      >
        <Flex justify="space-between">
          <Flex justify="flex-start">
            <SalonNameText typo="Title3">{salonName}</SalonNameText>
            <Text typo="Body3" colorCode={theme.palette.Gray300}>
              {price
                ? `${price.toLocaleString()}원 `
                : '아직 견적 도착 전이에요.'}
            </Text>
          </Flex>
          {price && <NextArrow width={29} height={31} />}
        </Flex>
      </Button>
      <Modal isOpen={isOpenModal} toggleModal={toggleModal} title="견적서">
        {
          <DetailResponseQuotation
            quotationId={quotationId} //결제를 위한 quotationId 전달
            requestId={requestId} //견적서 조회를 위한 requestId 전달
            handleCloseButton={toggleModal}
            handleNavigate={handleClickNavigateButton}
          />
        }
      </Modal>
    </>
  );
};

const SalonNameText = styled(Text)`
  width: 116px;
  justify-content: start;
`;
