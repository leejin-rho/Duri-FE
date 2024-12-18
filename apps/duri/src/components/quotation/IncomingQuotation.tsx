import { Button, Flex, Modal, NextArrow, Text, theme } from '@duri-fe/ui';
import { useModal } from '@duri-fe/utils';
import styled from '@emotion/styled';

import { DetailResponseQuotation } from './DetailResponseQuotation';

interface IncomingQuotationProps {
  requestId: number;
  salonName: string;
  price: number | null;
}

export const IncomingQuotation = ({
  requestId,
  salonName,
  price = null,
}: IncomingQuotationProps) => {
  const { isOpenModal, toggleModal } = useModal();

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
            requestId={requestId} //결제 시 메뉴 조회를 위한 requestId 전달
            handleCloseButton={toggleModal}
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
