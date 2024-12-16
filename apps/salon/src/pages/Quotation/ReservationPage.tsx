import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  Flex,
  MobileLayout,
  Modal,
  PetInfo,
  SalonNavbar,
  Text,
  theme,
} from '@duri-fe/ui';
import {
  useGetCompletedQuotationList,
  useGetReservedQuotationList,
  useModal,
} from '@duri-fe/utils';
import styled from '@emotion/styled';
import { DetailQuotation } from '@salon/components/quotation/DetailQuotation';
import { TabBarItem } from '@salon/components/quotation/TabBarItem';

const ReservationPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>('reserved');
  const [selectedRequestId, setSelectedRequestId] = useState<number | null>(
    null,
  );

  const { isOpenModal, openModal, closeModal } = useModal();

  const { data: reservationList } = useGetReservedQuotationList();
  const { data: completedQuotationList } = useGetCompletedQuotationList();

  const handleRequestClick = (requestId: number) => {
    setSelectedRequestId(requestId);
    openModal();
  };

  const handleNavigate = () => {
    navigate('/quotation');
  };

  const handleToggleTab = (currTab: string) => {
    setSelectedTab(currTab);
  };

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Flex
        height={60}
        padding="0 20px"
        gap={16}
        justify="flex-start"
        backgroundColor={theme.palette.White}
      >
        <TabBarItem
          label="견적"
          selected={false}
          typo="Body1Light"
          fitContent
          onClick={handleNavigate}
        />
        <TabBarItem label="예약" selected typo="Body1" fitContent />
      </Flex>
      <Flex
        height={48}
        justify="flex-start"
        backgroundColor={theme.palette.White}
      >
        <TabBarItem
          label="예약 확정"
          selected={selectedTab === 'reserved'}
          typo={selectedTab === 'reserved' ? 'Title3' : 'Body2Light'}
          onClick={() => handleToggleTab('reserved')}
        />
        <TabBarItem
          label="시술 완료"
          selected={selectedTab === 'complete'}
          typo={selectedTab === 'complete' ? 'Title3' : 'Body2Light'}
          onClick={() => handleToggleTab('complete')}
        />
      </Flex>

      {selectedTab === 'reserved' ? (
        reservationList && reservationList.length > 0 ? (
          <Flex direction="column" gap={8} padding="30px 20px">
            {reservationList.map(
              ({
                requestId,
                petDetailResponse,
                dday,
                groomerName,
                groomerImage,
                date,
                startTime,
                endTime,
              }) => (
                <Flex
                  key={requestId}
                  onClick={() => handleRequestClick(requestId)}
                >
                  <Card borderRadius={12} padding="12px" shadow="none">
                    <PetInfo
                      themeVariant="medium"
                      image={petDetailResponse.image}
                      name={petDetailResponse.name}
                      breed={petDetailResponse.breed}
                      age={petDetailResponse.age}
                      gender={petDetailResponse.gender}
                      weight={petDetailResponse.weight}
                      dday={dday}
                      groomer={{
                        groomerName: groomerName,
                        groomerImage: groomerImage,
                        date: date,
                        startTime: startTime,
                        endTime: endTime,
                      }}
                    />
                  </Card>
                </Flex>
              ),
            )}
          </Flex>
        ) : (
          // TODO : 임시 대체뷰 수정 필요
          <FlexGrow>
            <Text>예약된 일정이 없어요.</Text>
          </FlexGrow>
        )
      ) : completedQuotationList && completedQuotationList.length > 0 ? (
        <Flex direction="column" gap={8} padding="30px 20px">
          {completedQuotationList.map(
            ({
              requestId,
              petDetailResponse,
              groomerName,
              groomerImage,
              date,
              startTime,
              endTime,
            }) => (
              <Flex
                key={requestId}
                onClick={() => handleRequestClick(requestId)}
              >
                <Card borderRadius={12} padding="12px" shadow="none">
                  <PetInfo
                    themeVariant="medium"
                    image={petDetailResponse.image}
                    name={petDetailResponse.name}
                    breed={petDetailResponse.breed}
                    age={petDetailResponse.age}
                    gender={petDetailResponse.gender}
                    weight={petDetailResponse.weight}
                    complete
                    groomer={{
                      groomerName: groomerName,
                      groomerImage: groomerImage,
                      date: date,
                      startTime: startTime,
                      endTime: endTime,
                    }}
                  />
                </Card>
              </Flex>
            ),
          )}
        </Flex>
      ) : (
        // TODO : 임시 대체뷰 수정 필요
        <FlexGrow>
          <Text>완료된 일정이 없어요.</Text>
        </FlexGrow>
      )}

      <SalonNavbar />

      {selectedRequestId && (
        <>
          <Modal
            title="견적서"
            margin="20px"
            isOpen={isOpenModal && selectedTab === 'reserved'}
            toggleModal={closeModal}
          >
            <DetailQuotation
              requestId={selectedRequestId}
              closeModal={closeModal}
            />
          </Modal>

          <Modal
            title="견적서"
            margin="20px"
            isOpen={isOpenModal && selectedTab === 'complete'}
            toggleModal={closeModal}
          >
            <DetailQuotation
              requestId={selectedRequestId}
              closeModal={closeModal}
              enableCompleteButton
            />
          </Modal>
        </>
      )}
    </MobileLayout>
  );
};

const FlexGrow = styled(Flex)`
  flex-grow: 1;
`;

export default ReservationPage;
