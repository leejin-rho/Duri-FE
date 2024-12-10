import { useState } from "react";

import { Card, Flex, MobileLayout, Modal, PetInfo, SalonNavbar, theme } from "@duri-fe/ui"
import { useGetNewRequestList, useModal } from "@duri-fe/utils";
import { DetailRequest } from "@salon/components/quotation/DetailRequest";
import { TabBarItem } from "@salon/components/quotation/TabBarItem"

const QuotationPage = () => {
  const { isOpenModal, openModal, closeModal } = useModal();
  const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);

  const { data: newRequestList } = useGetNewRequestList();

  const handleRequestClick = (requestId: number) => {
    setSelectedRequestId(requestId);
    openModal();
  }

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Flex
        height={60}
        padding="0 20px"
        gap={16}
        justify="flex-start"
        backgroundColor={theme.palette.White}
      >
        <TabBarItem label="견적" selected typo="Body1" fitContent />
        <TabBarItem
          label="예약"
          selected={false}
          typo="Body1Light"
          fitContent
        />
      </Flex>
      <Flex
        height={48}
        justify="flex-start"
        backgroundColor={theme.palette.White}
      >
        <TabBarItem label="새로운 견적 요청" selected typo="Title3" />
        <TabBarItem label="답장한 견적" selected={false} typo="Body3" />
      </Flex>

      <Flex direction="column" gap={8} padding="30px 20px">
        {newRequestList?.map((request) => (
          <Flex key={request.requestId} onClick={() => handleRequestClick(request.requestId)}>
            <Card borderRadius={12} padding="6px">
              <PetInfo
                themeVariant="medium"
                image={request.petImage}
                name={request.petName}
                breed={request.petBreed}
                age={request.petAge}
                neutering={request.petNeutering}

                // TODO : gender, weight API 수정 필요함
                gender="F"
                weight={7.3}
              />
            </Card>
          </Flex>
        ))}
      </Flex>

      <SalonNavbar />

      {selectedRequestId &&
        <Modal title='요청서' margin="20px" isOpen={isOpenModal} toggleModal={closeModal}>
          <DetailRequest requestId={selectedRequestId} closeModal={closeModal} />
        </Modal>
      }
    </MobileLayout>
  )
}

export default QuotationPage;