import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HistoryCard } from '@duri/components/diary/HistoryCard';
import {
  DuriNavbar,
  Flex,
  Header,
  MobileLayout,
  Modal,
  Text,
} from '@duri-fe/ui';
import { useGetVisitHistory, useModal } from '@duri-fe/utils';

const MyHistoryPage = () => {
  //   미용일지 조회 데이터 상태관리 필요!
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/my');
  // const moveToWriteReview = () => {
  //   //quotationId 전달
  //   navigate('/my/review/write', { state: shopId });
  // };

  const { data: historyData } = useGetVisitHistory();

  const { isOpenModal, toggleModal } = useModal();

  const [selectedQuotationId, setSelectedQuotationId] = useState<number>();
  // const [shopId, setShopId] = useState<number>();

  useEffect(() => {
    console.log(selectedQuotationId);
  }, [selectedQuotationId]);

  useEffect(() => {
    console.log(historyData);
  }, [historyData]);
  // 모달 토글 함수
  // const handleToggleModal = (quotationId: number, shopId: number) => {
  const handleToggleModal = (quotationId: number) => {
    setSelectedQuotationId(quotationId);
    // setShopId(shopId);
    toggleModal();
  };

  return (
    <MobileLayout>
      <Header
        backIcon
        title="이용기록"
        titleAlign="start"
        onClickBack={handleNavigate}
      />
      <Flex
        direction="column"
        justify="flex-start"
        gap={20}
        padding="0 20px"
        margin="40px 0 133px"
      >
        {historyData && historyData.length > 0 ? (
          historyData.map(({ month, historyList }) => (
            <div key={month}>
              {historyList.map((history) => (
                <HistoryCard
                  key={history.quotationId}
                  visitMonth={`${month}월`}
                  tagContent={history.complete ? '미용 완료' : '미완료'}
                  designerName={history.groomerName}
                  shopName={history.shopName}
                  petName={history.petName}
                  visitDate={history.startDate}
                  dayOfWeek={history.day}
                  toggleModal={() =>
                    // handleToggleModal(history.quotationId, history.shopId)
                    handleToggleModal(history.quotationId)
                  }
                />
              ))}
            </div>
          ))
        ) : (
          <Text>이용 기록이 없습니다.</Text>
        )}
        {isOpenModal && selectedQuotationId && (
          <Modal isOpen={isOpenModal} toggleModal={toggleModal}>
            <></>
            {/*  여기는 따로 응답견적서UI 컴포넌트를 만들어야함
            <DetailResponseQuotation
              requestId={selectedQuotationId}
              // quotationId={selectedQuotationId}
              handleCloseButton={toggleModal}
              handleNavigate={moveToWriteReview}
            /> */}
          </Modal>
        )}
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default MyHistoryPage;
